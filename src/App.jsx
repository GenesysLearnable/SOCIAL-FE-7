import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfileSetup from "./components/ProfileSetup.jsx";
import AddFriends from "./components/AddFriend.jsx";
import Auth from "./components/Auth.jsx";
import Call from "./components/Call.jsx";
import ForgetPassword from "./components/ForgetPassword.jsx";
import ChangePassword from "./components/ChangePassword.jsx";
import OTP from "./components/Otp.jsx";
import React, { createContext } from "react";

export const RecoveryContext = createContext();
import Call from "./components/Call.jsx"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
    },
    {
      path: "/setup",
      element: <ProfileSetup />,
    },
    {
      path: "/addFriends",
      element: <AddFriends />,
    },
    {
      path: "/call",
      element: <Call />,
    },
    {
      path: "/ForgetPassword",
      element: <ForgetPassword />,
    },
    {
      path: "/ChangePassword",
      element: <ChangePassword />,
    },
    {
      path: "/OTP-Code",
      element: <OTP />,
    },
  ]);
  return (
    <>
      <RecoveryContext.Provider value={{}}>
        <RouterProvider router={router} />
      </RecoveryContext.Provider>
     <ToastContainer/>
   </>
  );
}

export default App;
