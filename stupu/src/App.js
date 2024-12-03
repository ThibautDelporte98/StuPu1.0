import React, { lazy, Suspense, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./hooks/AuthContext";
import AppShell from "./AppShell";
import { FetchProvider } from "./hooks/FetchContext";
import "./styles/index.css";
import Admin from "pages/dashboard/admin";
import EmailVerification from "pages/EmailVerification";

const Home = lazy(() => import("./pages/home"));
const Dashboard = lazy(() => import("./pages/dashboard/student/Overview"));
const SignIn = lazy(() => import("./pages/signIn"));
const Signup = lazy(() => import("./pages/signupStudent"));
const SignUpTutor = lazy(() => import("./pages/signupStudent"));
const SignUpChoice = lazy(() => import("./pages/signupChoice"));
const Loader = lazy(() => import("./components/loader/Loader"));
const MyLessonsStudent = lazy(() =>
  import("./pages/dashboard/student/MyLessons")
);
const CompletedLessonDetail = lazy(() =>
  import("./pages/dashboard/student/CompletedLessonDetail")
);
const LessonDetail = lazy(() =>
  import("./pages/dashboard/student/LessonDetail")
);
const MyProfile = lazy(() => import("./pages/dashboard/student/MyProfile"));
const AvailabilityManager = lazy(() =>
  import("./pages/dashboard/tutor/Available")
);

const LoadingFallback = () => (
  <AppShell>
    <Loader />
  </AppShell>
);

const UnauthenticatedRoutes = () => (
  <Routes>
    <Route path="/emailerfication" element={<EmailVerification />} />
    <Route path="/registratie" element={<SignUpChoice />} />
    <Route path="/registratie-lesgever" element={<SignUpTutor />} />
    <Route path="/registratie-lesvolger" element={<Signup />} />
    <Route path="/aanmelden" element={<SignIn />} />
    <Route path="/" element={<Home />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

const AuthenticatedRoute = ({ children }) => {
  const auth = useContext(AuthContext);
  return auth.isAuthenticated() && auth ? (
    <AppShell>{children}</AppShell>
  ) : (
    <Navigate to="/aanmelden" />
  );
};

// const StudentRoute = ({ children }) => {
//   const auth = useContext(AuthContext);
//   return auth.isAuthenticated() && auth.isStudent() ? (
//     <AppShell>{children}</AppShell>
//   ) : (
//     <Navigate to="/aanmelden" />
//   );
// };

const AdminRoute = ({ children }) => {
  const auth = useContext(AuthContext);
  return auth.isAuthenticated() && auth.isAdmin() ? (
    <AppShell>{children}</AppShell>
  ) : (
    <Navigate to="/aanmelden" />
  );
};

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <AuthenticatedRoute>
              <Dashboard />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/mijn-bijlessen"
          element={
            <AuthenticatedRoute>
              <MyLessonsStudent />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/mijn-bijles-detail"
          element={
            <AuthenticatedRoute>
              <LessonDetail />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/voltooide-lessen"
          element={
            <AuthenticatedRoute>
              <CompletedLessonDetail />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/mijn-profiel"
          element={
            <AuthenticatedRoute>
              <MyProfile />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/mijn-beschikbaarheid"
          element={
            <AuthenticatedRoute>
              <AvailabilityManager />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />
        <Route path="/*" element={<UnauthenticatedRoutes />} />
      </Routes>
    </Suspense>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <FetchProvider>
          <AppRoutes />
        </FetchProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
