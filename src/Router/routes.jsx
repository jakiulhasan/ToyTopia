import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Register from "../pages/Register";
import Error from "../Layout/Error";
import UserProfile from "../Components/UserProfile";
import PrivateRoute from "../context/PrivateRoute";
import Homepages from "../pages/Homepages";
import Login from "../pages/Login";
import ToysDetails from "../pages/ToysDetails";
import AllToys from "../pages/AllToys";
import Contacts from "../pages/Contacts";
import About from "../Components/About";
import TermsAndConditions from "../Components/TermandConditions";
import PrivacyPolicy from "../Components/PrivacyPolicy";
import ForgetPassword from "../Components/ForgetPassword";
import AuthChecker from "../context/AuthChecker";
import Support from "../Components/Support ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Homepages></Homepages>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/contacts",
        element: <Contacts></Contacts>,
      },
      { path: "/privacy-policy", Component: PrivacyPolicy },
      { path: "/term-and-conditions", Component: TermsAndConditions },
      { path: "/about", Component: About },
      { path: "/support", Component: Support },
      { path: "/forgot-password", Component: ForgetPassword },
      {
        path: "/login",
        element: (
          <AuthChecker>
            <Login></Login>
          </AuthChecker>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/user-profile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/toys/:id",
        element: <ToysDetails> </ToysDetails>,
      },
    ],
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);
export default router;
