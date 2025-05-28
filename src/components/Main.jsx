import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Alert,
  Paper,
  Avatar,
  Slide,
  Fab,
} from "@mui/material";
import {
  Store,
  StoreOutlined,
  LockOutlined,
  ShoppingCart,
} from "@mui/icons-material";
import FurnitureCard from "./FurnitureCard";

function Main({ furniture, openStatus, toggle }) {
  // Если магазин закрыт, показываем минимальный интерфейс
  if (!openStatus) {
    return (
      <Container
        maxWidth="sm"
        component="main"
        id="main-content"
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Slide direction="up" in={true} timeout={800}>
          <Paper
            elevation={8}
            role="dialog"
            aria-labelledby="closed-title"
            aria-describedby="closed-description"
            sx={{
              p: 6,
              textAlign: "center",
              borderRadius: 4,
              background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
            }}
          >
            <Avatar
              aria-hidden="true"
              sx={{
                width: 80,
                height: 80,
                mx: "auto",
                mb: 3,
                bgcolor: "error.light",
                fontSize: "2rem",
              }}
            >
              <LockOutlined fontSize="large" aria-hidden="true" />
            </Avatar>
            <Typography
              id="closed-title"
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: "text.primary",
                fontSize: "1.5rem", // Consistent h4 sizing
              }}
            >
              We're Closed
            </Typography>
            <Typography
              id="closed-description"
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 4,
                fontSize: "1rem", // Enhanced readability
                lineHeight: 1.6,
              }}
              component="p"
            >
              Sorry, our showroom is currently closed. Please come back later!
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={toggle}
              startIcon={<Store aria-hidden="true" />}
              aria-label="Open the furniture showroom"
              sx={{
                py: 1.5,
                px: 4,
                fontWeight: 600,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
                },
                "&:focus": {
                  outline: "2px solid #fff",
                  outlineOffset: "2px",
                },
              }}
            >
              Open Showroom
            </Button>
          </Paper>
        </Slide>
      </Container>
    );
  }

  // Если магазин открыт, показываем полный интерфейс
  return (
    <>
      <Container
        maxWidth="lg"
        component="main"
        id="main-content"
        sx={{ py: 6 }}
      >
        {/* Welcome Section */}
        <Box
          component="section"
          aria-labelledby="welcome-title"
          sx={{ textAlign: "center", mb: 6 }}
        >
          <Alert
            severity="success"
            icon={<Store aria-hidden="true" />}
            role="status"
            aria-live="polite"
            sx={{
              mb: 3,
              justifyContent: "center",
              borderRadius: 3,
              "& .MuiAlert-message": {
                fontWeight: 600,
              },
            }}
          >
            Currently Open
          </Alert>
          <Typography
            id="welcome-title"
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 400,
              mb: 2,
              fontSize: "2.125rem", // Proper h2 sizing per Material-UI guidelines
            }}
          >
            Welcome to Our Showroom!
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              maxWidth: 600,
              mx: "auto",
              fontSize: "1rem",
              lineHeight: 1.75,
            }}
            component="p"
          >
            Discover our premium furniture collection designed for modern living
          </Typography>
        </Box>

        {/* Control Button */}
        <Box
          component="section"
          aria-label="Showroom controls"
          sx={{ textAlign: "center", mb: 6 }}
        >
          <Button
            variant="contained"
            size="large"
            color="error"
            onClick={toggle}
            startIcon={<StoreOutlined aria-hidden="true" />}
            aria-label="Close the furniture showroom"
            sx={{
              py: 1.5,
              px: 4,
              fontWeight: 600,
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 8px 25px rgba(244, 67, 54, 0.3)",
              },
              "&:focus": {
                outline: "2px solid #fff",
                outlineOffset: "2px",
              },
            }}
          >
            Close Showroom
          </Button>
        </Box>

        {/* Furniture Grid */}
        <Box
          component="section"
          aria-labelledby="furniture-collection-title"
          role="region"
        >
          <Typography
            id="furniture-collection-title"
            variant="h3"
            component="h3"
            sx={{
              textAlign: "center",
              mb: 4,
              fontWeight: 400,
              fontSize: "1.75rem", // Proper h3 sizing
              // Visually hidden but available to screen readers for structure
              position: "absolute",
              left: "-10000px",
              width: "1px",
              height: "1px",
              overflow: "hidden",
            }}
          >
            Furniture Collection
          </Typography>
          <Grid
            container
            spacing={4}
            role="list"
            aria-label={`${furniture.length} furniture items available`}
          >
            {furniture.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={item.id} role="listitem">
                <FurnitureCard item={item} index={index} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="View shopping cart"
        title="Shopping Cart"
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)",
            transform: "scale(1.1)",
          },
          "&:focus": {
            outline: "2px solid #fff",
            outlineOffset: "2px",
          },
        }}
      >
        <ShoppingCart aria-hidden="true" />
      </Fab>
    </>
  );
}

export default Main;
