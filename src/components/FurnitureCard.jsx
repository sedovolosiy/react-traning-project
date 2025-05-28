import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Box,
  Typography,
  Fade,
} from "@mui/material";
import { Visibility } from "@mui/icons-material";

function FurnitureCard({ item, index }) {
  return (
    <Fade in={true} timeout={600 + index * 200}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            height: 240,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#f8f9fa",
            p: 2,
          }}
        >
          <CardMedia
            component="img"
            image={item.image}
            alt={item.name}
            sx={{
              maxHeight: 200,
              maxWidth: "100%",
              objectFit: "contain",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
          <Chip
            label={item.category}
            color="primary"
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              fontWeight: 600,
            }}
          />
        </Box>
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {item.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                component="span"
                color="primary"
                sx={{ fontWeight: 700 }}
              >
                ${item.price}
              </Typography>
              <Typography
                variant="caption"
                display="block"
                color="text.secondary"
              >
                Best Price
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <CardActions sx={{ p: 3, pt: 0 }}>
          <Button
            variant="contained"
            fullWidth
            startIcon={<Visibility />}
            sx={{
              py: 1.5,
              fontWeight: 600,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              "&:hover": {
                background: "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              },
            }}
          >
            View Details
          </Button>
        </CardActions>
      </Card>
    </Fade>
  );
}

export default FurnitureCard;
