import { lazy, Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";
import LoadingSpinner from "./LoadingSpinner";
import ProtectedRoute from "./ProtectedRoute";

export const LandingPage = lazy(() => import("../pages/LandingPage"));
export const IndexPage = lazy(() => import("../pages/IndexPage"));
export const InternshipsPage = lazy(() => import("../pages/InternshipsPage"));
export const NotesPage = lazy(() => import("../pages/NotesPage"));
export const ProjectsPage = lazy(() => import("../pages/ProjectsPage"));
export const ProfilePage = lazy(() => import("../pages/ProfilePage"));
export const LoginPage = lazy(() => import("../pages/LoginPage"));
export const SettingsPage = lazy(() => import("../pages/SettingsPage"));

const AppContent = () => {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={<LoadingSpinner />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        {
          path: "/dashboard",
          element: <ProtectedRoute element={<IndexPage />} />,
          index: true,
        },
        {
          path: "/internships",
          element: <ProtectedRoute element={<InternshipsPage />} />,
        },
        { path: "/notes", element: <ProtectedRoute element={<NotesPage />} /> },
        {
          path: "/projects",
          element: <ProtectedRoute element={<ProjectsPage />} />,
        },
        {
          path: "/profile",
          element: <ProtectedRoute element={<ProfilePage />} />,
        },
        {
          path: "/settings",
          element: <ProtectedRoute element={<SettingsPage />} />,
        },
      ],
    },
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return routes;
};

export default AppContent;
