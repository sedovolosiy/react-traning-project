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
            sx={{
              p: 6,
              textAlign: "center",
              borderRadius: 4,
              background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
            }}
          >
            <Avatar
              sx={{
                width: 80,
                height: 80,
                mx: "auto",
                mb: 3,
                bgcolor: "error.light",
                fontSize: "2rem",
              }}
            >
              <LockOutlined fontSize="large" />
            </Avatar>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700, color: "text.primary" }}
            >
              We're Closed
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4, fontSize: "1.1rem" }}
            >
              Sorry, our showroom is currently closed. Please come back later!
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={toggle}
              startIcon={<Store />}
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
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Welcome Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Alert
            severity="success"
            icon={<Store />}
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
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700, mb: 2 }}
          >
            Welcome to Our Showroom!
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            Discover our premium furniture collection designed for modern living
          </Typography>
        </Box>

        {/* Control Button */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Button
            variant="contained"
            size="large"
            color="error"
            onClick={toggle}
            startIcon={<StoreOutlined />}
            sx={{
              py: 1.5,
              px: 4,
              fontWeight: 600,
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 8px 25px rgba(244, 67, 54, 0.3)",
              },
            }}
          >
            Close Showroom
          </Button>
        </Box>

        {/* Furniture Grid */}
        <Grid container spacing={4}>
          {furniture.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <FurnitureCard item={item} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Floating Action Button */}
      <Fab
        color="primary"
        aria-label="cart"
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)",
            transform: "scale(1.1)",
          },
        }}
      >
        <ShoppingCart />
      </Fab>
    </>
  );
}

export default Main;
