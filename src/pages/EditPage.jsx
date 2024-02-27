import React from "react";
import EditMovie from "../components/movies/EditMovie";

const EditPage = () => {
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "flex-start",
      backgroundImage: `url('https://images.wallpapershq.com/wallpapers/1432/wallpaper_1432_1920x1080.jpg')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100vw",
      height: "90vh", 
    }}>
      <EditMovie />
    </div>
  );
};

export default EditPage;
