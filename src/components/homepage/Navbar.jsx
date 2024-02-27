import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAuth } from "../context/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";
import TheatersIcon from "@mui/icons-material/Theaters";
import { ADMIN } from "../../helpers/const";
import { AddShoppingCart, AddShoppingCartSharp } from "@mui/icons-material";
import { useCart } from "../context/CartContextProvider";
import { Badge } from "@mui/material";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { addProductToCart, getProductsCountInCart } = useCart();
  const [badgeCount, setBadgeCount] = React.useState(0);
  React.useEffect(() => {
    setBadgeCount(getProductsCountInCart());
  }, [addProductToCart]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();
  // ! Логика навбара
  const { user, handleLogOut } = useAuth();
  return (
    <AppBar position="static" sx={{ backgroundColor: "darkred" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TheatersIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Movie47
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>
          <TheatersIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/movies");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Фильмы
            </Button>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/pricing");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Платные фильмы
            </Button>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/favorites");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Избранное
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Link to={"/cart"}>
              <Badge badgeContent={badgeCount} color="success">
                <ShoppingCartIcon sx={{ color: "white" }} />
              </Badge>
            </Link>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user ? (
                  <>
                    <Avatar alt={user.email} src={user.email} />
                  </>
                ) : (
                  <>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzNy1hZXctMTM5LnBuZw.png"
                    />
                  </>
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user ? (
                user.email === ADMIN ? (
                  <>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">
                        <Link to={"/profile"}>Profile</Link>
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={handleLogOut}>
                        <Link to={"/auth"}>Logout</Link>
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">
                        <Link to={"/admin"}>Admin Panel</Link>
                      </Typography>
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">
                        <Link to={"/profile"}>Profile</Link>
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={handleLogOut}>
                        <Link to={"/auth"}>Logout</Link>
                      </Typography>
                    </MenuItem>
                  </>
                )
              ) : (
                <>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link to={"/auth"}>Login</Link>
                    </Typography>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
