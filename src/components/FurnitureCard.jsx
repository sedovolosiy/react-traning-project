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
  const cardId = `furniture-card-${item.id}`;
  const imageId = `furniture-image-${item.id}`;
  const priceId = `furniture-price-${item.id}`;

  return (
    <Fade in={true} timeout={600 + index * 200}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          "&:focus-within": {
            outline: "2px solid #6366f1",
            outlineOffset: "2px",
          },
        }}
        component="article"
        role="group"
        aria-labelledby={cardId}
      >
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
            alt={`${item.name} - ${item.description}`}
            id={imageId}
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
            role="img"
            aria-label={`Category: ${item.category}`}
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
            id={cardId}
            variant="h6"
            component="h4"
            gutterBottom
            sx={{
              fontWeight: 500,
              fontSize: "1rem", // Consistent h6/h4 sizing
              lineHeight: 1.6,
            }}
          >
            {item.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              fontSize: "0.875rem",
              lineHeight: 1.43, // Material-UI recommended line height
            }}
            component="p"
          >
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
                id={priceId}
                variant="h5"
                component="span"
                color="primary"
                sx={{
                  fontWeight: 600, // Medium weight for price emphasis
                  fontSize: "1.25rem", // Consistent h5 sizing
                }}
                aria-label={`Price: ${item.price} dollars`}
              >
                ${item.price}
              </Typography>
              <Typography
                variant="caption"
                display="block"
                color="text.secondary"
                component="span"
                sx={{
                  fontSize: "0.75rem",
                  lineHeight: 1.66,
                }}
                aria-hidden="true"
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
            startIcon={<Visibility aria-hidden="true" />}
            aria-describedby={`${cardId} ${priceId}`}
            aria-label={`View details for ${item.name}, priced at $${item.price}`}
            sx={{
              py: 1.5,
              fontWeight: 600,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              "&:hover": {
                background: "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              },
              "&:focus": {
                outline: "2px solid #fff",
                outlineOffset: "2px",
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
