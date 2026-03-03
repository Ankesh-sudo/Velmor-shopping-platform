import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(90deg, #C9A227, #ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Elevate Your Fashion Presence
          </Typography>

          <Typography variant="h6" sx={{ mt: 3, color: "#ccc" }}>
            Velmore connects independent fashion brands with customers
            and celebrity collaborations.
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            sx={{
              mt: 4,
              px: 5,
              py: 1.5,
              fontWeight: "bold",
            }}
          >
            Explore Collection
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
}