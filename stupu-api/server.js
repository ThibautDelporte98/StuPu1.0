require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { expressjwt } = require("express-jwt");
const cookieParser = require("cookie-parser");
const jwtDecode = require("jwt-decode");
const mongoose = require("mongoose");
const dashboardData = require("./data/dashboard");
const User = require("./data/User");
const InventoryItem = require("./data/InventoryItem");

const { createToken, hashPassword, verifyPassword } = require("./util");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/authenticate", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    }).lean();

    if (!user) {
      return res.status(403).json({
        message: "Wrong email or password.",
      });
    }

    const passwordValid = await verifyPassword(password, user.password);

    if (passwordValid) {
      const { password, bio, ...rest } = user;
      const userInfo = Object.assign({}, { ...rest });
      const token = createToken(userInfo);
      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;

      const tokenExpiration = new Date(expiresAt * 1000);

      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Ensure this is set in production if using HTTPS
        expires: new Date(expiresAt * 1000),
      });

      res.json({
        message: "Authentication successful!",
        token,
        userInfo,
        expiresAt,
      });
    } else {
      res.status(403).json({
        message: "Wrong email or password.",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Something went wrong." });
  }
});



app.post("/api/signup", async (req, res) => {
  try {
    const { email, firstName, lastName, role } = req.body;

    const hashedPassword = await hashPassword(req.body.password);

    const userData = {
      email: email.toLowerCase(),
      firstName,
      lastName,
      password: hashedPassword,
      role,
    };

    const existingEmail = await User.findOne({
      email: userData.email,
    }).lean();

    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = new User(userData);
    const savedUser = await newUser.save();

    if (savedUser) {
      const token = createToken(savedUser);
      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;

      const { firstName, lastName, email, role } = savedUser;

      const userInfo = {
        firstName,
        lastName,
        email,
        role,
      };

      res.cookie("token", token, {
        httpOnly: false, // Change to true if you don’t need access in JS
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
        expires: new Date(expiresAt * 1000),
      });
      
      return res.json({
        message: "User created!",
        token,
        userInfo,
        expiresAt,
      });
    } else {
      return res.status(400).json({
        message: "There was a problem creating your account",
      });
    }
  } catch (err) {
    return res.status(400).json({
      message: "There was a problem creating your account",
    });
  }
});

const attachUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Authentication invalid" });
  }
  const decodedToken = jwtDecode(token);

  if (!decodedToken) {
    return res.status(401).json({
      message: "There was a problem authorizing the request",
    });
  } else {
    req.user = decodedToken;
    next();
  }
};

app.use(attachUser);

const requireAuth = expressjwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  audience: "api.stupu",
  issuer: "api.stupu",
  getToken: (req) => req.cookies.token,
});

app.post("/api/refresh-token", requireAuth, async (req, res) => {
  try {
    const user = req.userInfo; // Extract user information from the JWT token
    const newToken = createToken(user); // Create a new token
    const decodedToken = jwtDecode(newToken); // Decode the new token to get the expiration
    const expiresAt = decodedToken.exp;

    res.cookie("token", token, {
      httpOnly: false, // Change to true if you don’t need access in JS
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      expires: new Date(expiresAt * 1000),
    });
    
    res.json({
      message: "Token refreshed successfully!",
      token: newToken,
      expiresAt,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error refreshing the token",
    });
  }
});

const requireAdmin = (req, res, next) => {
  const { role } = req.user;
  if (role !== "admin") {
    return res.status(401).json({ message: "Insufficient role" });
  }
  next();
};

const requireStudent = (req, res, next) => {
  const { role } = req.user;
  if (role !== "student") {
    return res.status(401).json({ message: "Insufficient role" });
  }
  next();
};

app.get("/api/dashboard-data", requireAuth, (req, res) =>
  res.json(dashboardData)
);

app.patch("/api/user-role", async (req, res) => {
  try {
    const { role } = req.body;
    const allowedRoles = ["student", "admin", "tutor"];

    if (!allowedRoles.includes(role)) {
      return res.status(400).json({ message: "Role not allowed" });
    }
    await User.findOneAndUpdate({ _id: req.user.sub }, { role });
    res.json({
      message:
        "User role updated. You must log in again for the changes to take effect.",
    });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

app.get("/api/inventory", requireAuth, requireAdmin, async (req, res) => {
  try {
    const user = req.user.sub;
    const inventoryItems = await InventoryItem.find({
      user,
    });
    res.json(inventoryItems);
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

app.post("/api/inventory", requireAuth, requireAdmin, async (req, res) => {
  try {
    const userId = req.user.sub;
    const input = Object.assign({}, req.body, {
      user: userId,
    });
    const inventoryItem = new InventoryItem(input);
    await inventoryItem.save();
    res.status(201).json({
      message: "Inventory item created!",
      inventoryItem,
    });
  } catch (err) {
    return res.status(400).json({
      message: "There was a problem creating the item",
    });
  }
});

app.delete(
  "/api/inventory/:id",
  requireAuth,
  requireAdmin,
  async (req, res) => {
    try {
      const deletedItem = await InventoryItem.findOneAndDelete({
        _id: req.params.id,
        user: req.user.sub,
      });
      res.status(201).json({
        message: "Inventory item deleted!",
        deletedItem,
      });
    } catch (err) {
      return res.status(400).json({
        message: "There was a problem deleting the item.",
      });
    }
  }
);

app.get("/api/users", requireAuth, async (req, res) => {
  try {
    const users = await User.find()
      .lean()
      .select("_id firstName lastName avatar bio");

    res.json({
      users,
    });
  } catch (err) {
    return res.status(400).json({
      message: "There was a problem getting the users",
    });
  }
});

app.get("/api/bio", requireAuth, async (req, res) => {
  try {
    const { sub } = req.user;
    const user = await User.findOne({
      _id: sub,
    })
      .lean()
      .select("bio");

    res.json({
      bio: user.bio,
    });
  } catch (err) {
    return res.status(400).json({
      message: "There was a problem updating your bio",
    });
  }
});

app.patch("/api/bio", requireAuth, async (req, res) => {
  try {
    const { sub } = req.user;
    const { bio } = req.body;
    const updatedUser = await User.findOneAndUpdate(
      {
        _id: sub,
      },
      {
        bio,
      },
      {
        new: true,
      }
    );

    res.json({
      message: "Bio updated!",
      bio: updatedUser.bio,
    });
  } catch (err) {
    return res.status(400).json({
      message: "There was a problem updating your bio",
    });
  }
});

async function connect() {
  try {
    mongoose.Promise = global.Promise;
    await mongoose.connect(process.env.ATLAS_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  } catch (err) {
    console.log("Mongoose error", err);
  }
  app.listen(3002);
  console.log("API listening on localhost:3002");
}

connect();
