import { lazy, Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard/DashboardLayout";
import LoadingSpinner from "./LoadingSpinner";
import ProtectedRoute from "./ProtectedRoute";

export const LandingPage = lazy(() => import("../../pages/LandingPage"));
export const IndexPage = lazy(() => import("../../pages/IndexPage"));
export const JobsPage = lazy(() => import("../../pages/JobsPage"));
export const NotesPage = lazy(() => import("../../pages/NotesPage"));
export const ProjectsPage = lazy(() => import("../../pages/ProjectsPage"));
export const ProfilePage = lazy(() => import("../../pages/ProfilePage"));
export const ResourcesPage = lazy(() => import("../../pages/ResourcesPage"));
export const EventsPage = lazy(() => import("../../pages/EventsPage"));
export const LoginPage = lazy(() => import("../../pages/LoginPage"));
export const SettingsPage = lazy(() => import("../../pages/SettingsPage"));
export const SpacesPage = lazy(() => import("../../pages/SpacesPage"));
export const CommunitySpacePage = lazy(() =>
  import("../../pages/CommunitySpacePage")
);
export const PitchPage = lazy(() => import("../../pages/PitchPage"));
const MockInterviewPage = lazy(() => import("../../pages/MockInterviewPage"));

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
          path: "/jobs",
          element: <ProtectedRoute element={<JobsPage />} />,
        },
        { path: "/notes", element: <ProtectedRoute element={<NotesPage />} /> },
        {
          path: "/projects",
          element: <ProtectedRoute element={<ProjectsPage />} />,
        },
        {
          path: "/pitch",
          element: <ProtectedRoute element={<PitchPage />} />,
        },
        {
          path: "/mock-interview/:interviewId",
          element: <ProtectedRoute element={<MockInterviewPage />} />,
        },
        {
          path: "/resources",
          element: <ProtectedRoute element={<ResourcesPage />} />,
        },
        {
          path: "/events",
          element: <ProtectedRoute element={<EventsPage />} />,
        },
        {
          path: "/spaces",
          children: [
            {
              path: "",
              element: <ProtectedRoute element={<SpacesPage />} />,
              index: true,
            },
            {
              path: ":spaceId",
              element: (
                <ProtectedRoute
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <CommunitySpacePage />
                    </Suspense>
                  }
                />
              ),
            },
          ],
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
