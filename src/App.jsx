import { createBrowserRouter, RouterProvider } from "react-router-dom";

// routing
import Homepage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import AdminLayout from "./pages/Admin/AdminLayout";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/AboutUs";
import Contact from "./pages/ContactUs";
import CreateProject from "./pages/Admin/CreateProject";
import Projects from "./pages/Projectpage";
import Authorisation from "./pages/Admin/Authorization";
import AdminProjectsPage from "./pages/Admin/Projects";
import AdminContact from "./pages/Admin/Contact";
import AdminEditDelete from "./pages/Admin/Edit-DeleteProject";
import AdminErrorPage from "./pages/Admin/AdminErrorPage";
import Skill from "./pages/Skill";
import ProposedProjects from "./pages/projects/ProposeProjects";
import Blogs from "./pages/Blogs";
// loader
import { projectLoader } from "./loaders/ProjectLoader";
import { postLoader } from "./loaders/PostLoader";
import ContactSuccess from "./pages/Contact/succesful";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/projects",

        children: [
          { index: true, element: <Projects />, loader: projectLoader },
          { path: "/projects/proposed",element:<ProposedProjects /> },
           { path: "/projects/skills",element:<Skill /> },
            { path: "/projects/frequentaskquestion",element: <ProposedProjects /> },
        ],
      },
      {
        path: "/blogs",
        element: <Blogs />,loader:postLoader
      },

      {
        path: "/about",
        element: <About />,
      },
  {
    path: "/contact",
    children: [
      { index: true, element: <Contact /> },
      { path: "/contact/success", element: <ContactSuccess /> }
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <AdminErrorPage />,
    children: [
      {
        path: "/admin/home",
        element: <Authorisation />,
        children: [
          { path: "/admin/home/projects", element: <AdminProjectsPage /> },
          { path: "/admin/home/createproject", element: <CreateProject /> },
          { path: "/admin/home/contacts", element: <AdminContact /> },
          { path: "/admin/home/EditDele", element: <AdminEditDelete /> },
        ],
      },
    ],
  },
  ],
}
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
