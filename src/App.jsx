import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  // Outlet,
  // Navigate,
} from "react-router-dom";
import ProfileSetup from "./components/ProfileSetup.jsx";
import AddFriends from "./components/AddFriend.jsx";

import Auth from "./components/Auth.jsx";
// import MetaMask from "./components/Transcation.jsx";
import ProfileSetup from "./components/ProfileSetup"

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
  ]);
  return (
   <>
    <RouterProvider router={router}/>
   </>

  );
}

export default App;
