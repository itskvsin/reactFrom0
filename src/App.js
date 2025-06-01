import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {

  const [userName , setUserName] = useState();
  const [userName2 , setUserName2] = useState();

  //Make an API call for authentication
  useEffect(() => {
    const data = {
      name : "Kevin Solanki",
      name2 : "User2"
    }
    setUserName(data.name);
    setUserName2(data.name2);
  } , [])


  return ( 
    <div className="app relative">
      <UserContext.Provider value={{loggedInUser : userName , setUserName}} >
        <Header />
      </UserContext.Provider>
      <UserContext.Provider value={{loggedInUser : userName2 , setUserName2}} >
      <Outlet />
      </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  { 
    path: "/", 
    element: <AppLayout /> , 
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about", 
        element: <Suspense fallback={"Wait a min loading content"}><About /></Suspense>
      },
      {
        path: "/contact" , 
        element: <Contact />
      },
      {
        path: "/grocery" , 
        element: <Suspense fallback={"Wait a min loading content"}><Grocery /></Suspense>
      },
      {
        path: "/restaurants/:resId" , 
        element: <RestaurantMenu />
      },
    ]
    , 
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
