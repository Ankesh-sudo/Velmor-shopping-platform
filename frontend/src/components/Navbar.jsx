import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "#C9A227" }}
        >
          Velmore
        </Typography>

        <Box>
          <Button component={Link} to="/" color="secondary">
            Home
          </Button>
          <Button component={Link} to="/products" color="secondary">
            Products
          </Button>
          <Button component={Link} to="/login" color="secondary">
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}