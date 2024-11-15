import React, { lazy, Suspense, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./hooks/AuthContext";
import AppShell from './AppShell';
import { FetchProvider } from './hooks/FetchContext';
import "./styles/index.css";
import Admin from 'pages/dashboard/admin';


const Home = lazy(() => import("./pages/home"));
const Dashboard = lazy(() => import("./pages/dashboard/student/Overview"));
const SignIn = lazy(() => import("./pages/signIn"));
const Signup = lazy(() => import("./pages/signupStudent"));
const SignUpTutor = lazy(() => import("./pages/signupTutor"));
const SignUpChoice = lazy(() => import("./pages/signupChoice"));
const Loader = lazy(() => import('./components/common/loader/Loader'));
const MyLessonsStudent = lazy(() => import('./pages/dashboard/student/MyLessons'));
const CompletedLessonDetail = lazy(() => import("./pages/dashboard/student/CompletedLessonDetail"));
const LessonDetail = lazy(() => import("./pages/dashboard/student/LessonDetail"));
const MyProfile = lazy(() => import("./pages/dashboard/student/MyProfile"));

const LoadingFallback = () => (
  <AppShell>
    <Loader />
  </AppShell>
);

const UnauthenticatedRoutes = () => (
  <Routes>
    <Route path='/registratie' element={<SignUpChoice />} />
    <Route path='/registratie-lesgever' element={<SignUpTutor />} />
    <Route path="/registratie-lesvolger" element={<Signup />} />
    <Route path='/aanmelden' element={<SignIn />} />
    <Route path="/" element={<Home />} />
    <Route path='/mijn-bijlessen' element={<MyLessonsStudent />} />
    <Route path='/mijn-bijles-detail' element={<LessonDetail />} />
    <Route path='/voltooide-lessen' element={<CompletedLessonDetail />} />
    <Route path='/mijn-profiel' element={<MyProfile />} />
    <Route path='dashboard' element={<Dashboard />} />
  </Routes>
);

// const AuthenticatedRoute = ({ children }) => {
//   const auth = useContext(AuthContext);
//   return auth ? (
//     <AppShell>{children}</AppShell>
//   ) : (
//     <Navigate to="/aanmelden" />
//   );
// };

const StudentRoute = ({ children }) => {
  const auth = useContext(AuthContext);
  return auth.isAuthenticated() && auth.isStudent() ? (
    <AppShell>{children}</AppShell>
  ) : (
    <Navigate to="/aanmelden" />
  );
};

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
        <Route path="/dashboard" element={<StudentRoute><Dashboard /></StudentRoute>} />
        <Route path="/admin" element={<AdminRoute><Admin/></AdminRoute>} />
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
