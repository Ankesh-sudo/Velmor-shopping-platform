import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

  // temporary login state (later from backend)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Toolbar sx={{ justifyContent: "space-between" }}>

        {/* LOGO */}
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#C9A227" }}
        >
          Velmora
        </Typography>

        {/* NAV ITEMS */}
        <Box>

          <Button component={Link} to="/" color="secondary">
            Home
          </Button>

          <Button component={Link} to="/brands" color="secondary">
            Brands
          </Button>

          <Button component={Link} to="/cart" color="secondary">
            Cart
          </Button>

          <Button component={Link} to="/contact" color="secondary">
            Contact Us
          </Button>

          {/* LOGIN OR PROFILE */}
          {isLoggedIn ? (
            <Button component={Link} to="/profile" color="secondary">
              Profile
            </Button>
          ) : (
            <Button component={Link} to="/login" color="secondary">
              Login
            </Button>
          )}

        </Box>
      </Toolbar>
    </AppBar>
  );
}