import React, { useState } from "react";
import AddMovie from "../components/movies/AddMovie";
import { Button } from "@mui/material";
import AddCategory from "../components/movies/AddCategory";

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        backgroundImage: `url('https://images.wallpapershq.com/wallpapers/1432/wallpaper_1432_1920x1080.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Button onClick={handleOpen} variant="contained" style={{position:"absolute"}}>
        Add Category
      </Button>
      <AddMovie />/
      <AddCategory open={open} handleClose={handleClose} />
    </div>
  );
};

export default AdminPage;
