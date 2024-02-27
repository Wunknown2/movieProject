import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useAuth } from "../context/AuthContextProvider";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Copyright } from "@mui/icons-material";

const Auth = () => {
  const {
    handleRegister,
    user,
    setUser,
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    handleLogOut,
    handleLogin,
    hasAccount,
    setHasAccount,
  } = useAuth();
  console.log(emailError, passwordError);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <Container component="main" maxWidth="xs" sx={{ mt: "8%" }}>
      <Box
        sx={{
          marginTop: "8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ margin: "1", bgcolor: "secondary" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="blue">
          {hasAccount ? "Login Form" : "Register Now"}
        </Typography>
        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            label="Email Address"
            name="email"
            autoFocus
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText={emailError}
            fullWidth
            id="email"
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            autoFocus
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            helperText={setPasswordError}
            fullWidth
            id="password"
            margin="normal"
            type="password"
          />
        </Box>
        {hasAccount ? (
          <Button
            onClick={handleLogin}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        ) : (
          <Button
            onClick={handleRegister}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register Now
          </Button>
        )}
        <Grid container>
          <Grid item>
            <Typography
              variant="body2"
              onClick={() => setHasAccount(!hasAccount)}
              sx={{
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              {hasAccount
                ? `Dont have an account? Register Now`
                : `Already an account? Login`}
            </Typography>
          </Grid>
          <Copyright sx={{ mt: 0, mb: 4 }}></Copyright>
        </Grid>
      </Box>
    </Container>
  );
};

export default Auth;
