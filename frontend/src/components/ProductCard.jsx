import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <CardMedia
        component="img"
        height="280"
        image={product.image}
        alt={product.name}
      />

      <CardContent>
        <Typography variant="subtitle2" color="secondary">
          {product.brand}
        </Typography>

        <Typography variant="h6">{product.name}</Typography>

        <Typography variant="body1">₹{product.price}</Typography>
      </CardContent>
    </Card>
  );
}