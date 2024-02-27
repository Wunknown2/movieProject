import React from "react";
import Auth from "../components/auth/Auth";

const AuthPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        backgroundImage: `url('https://wallpapergod.com/images/hd/movie-1920X1080-wallpaper-brqi267c1mab09ib.jpeg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "90vh",
      }}
    >
      <Auth />
    </div>
  );
};

export default AuthPage;
