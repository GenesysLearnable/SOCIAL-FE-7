import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProfileSetup from "./components/ProfileSetup.jsx";
import AddFriends from "./components/AddFriend.jsx";
import Auth from "./components/Auth.jsx";
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
  ]);
  return (
   <>
    <RouterProvider router={router}/>
    <ToastContainer/>
   </>
  );
}

export default App;
