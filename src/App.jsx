import "./App.css";
import { useEffect, useReducer } from "react";
import chair from "./images/chair.png";
import table from "./images/table.png";
import sofa from "./images/sofa.png";

// Material-UI imports
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Box,
  Paper,
  IconButton,
  Switch,
  FormControlLabel,
  Alert,
  Avatar,
  Fab,
  Slide,
  Fade,
} from "@mui/material";
import {
  Home,
  Store,
  ShoppingCart,
  Visibility,
  StoreOutlined,
  LockOutlined,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Создаем кастомную тему Material-UI
const theme = createTheme({
  palette: {
    primary: {
      main: "#6366f1",
      light: "#8b5cf6",
      dark: "#4f46e5",
    },
    secondary: {
      main: "#ec4899",
      light: "#f472b6",
      dark: "#db2777",
    },
    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
          },
        },
      },
    },
  },
});

// вместо props.name и props.year используем деструктуризацию
// props - это объект, содержащий все переданные свойства
// в компонент Header, поэтому мы можем использовать деструктуризацию
// для извлечения нужных свойств напрямую в параметры функции
// props.name и props.year можно заменить на name и year
function Header({ name, year }) {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar sx={{ py: 2 }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              sx={{
                bgcolor: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Home />
            </Avatar>
            <Box>
              <Typography
                variant="h4"
                component="h1"
                sx={{ fontWeight: 700, mb: 0.5 }}
              >
                {name}'s Furniture Showroom
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "rgba(255,255,255,0.8)" }}
              >
                Premium furniture collection
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.7)" }}
            >
              © {year} All rights reserved
            </Typography>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

const furniture = [
  {
    id: 1,
    name: "Modern Chair",
    price: 50,
    image: chair,
    description: "Comfortable ergonomic design",
    category: "Seating",
  },
  {
    id: 2,
    name: "Dining Table",
    price: 150,
    image: table,
    description: "Elegant wooden dining table",
    category: "Tables",
  },
  {
    id: 3,
    name: "Luxury Sofa",
    price: 300,
    image: sofa,
    description: "Premium comfort sofa",
    category: "Seating",
  },
];

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
  );
}

function App() {
  // const [status, setStatus] = useState(true);
  const [status, toggle] = useReducer((prevStatus) => !prevStatus, true);
  // useReducer позволяет более гибко управлять состоянием,
  // особенно если логика изменения состояния становится сложной
  // В данном случае мы просто переключаем статус между true и false
  // useState можно использовать, если логика изменения состояния проста
  // и не требует сложных операций

  useEffect(() => {
    console.log(`The showroom is ${status ? "open" : "closed"}.`);
  }, [status]);
  // useEffect позволяет выполнять побочные эффекты в функциональных компонентах
  // В данном случае мы выводим в консоль сообщение о статусе магазина
  // Второй аргумент - массив зависимостей, который указывает, что
  // эффект должен выполняться только при изменении статуса
  // Если массив зависимостей пустой, эффект выполняется только один раз
  // при монтировании компонента

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <Header name="Serhii" year={new Date().getFullYear()} />

        {/* Status Bar */}
        <Paper
          elevation={1}
          sx={{
            borderRadius: 0,
            borderBottom: 1,
            borderColor: "divider",
            bgcolor: "background.paper",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                py: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: status ? "success.main" : "error.main",
                    animation: status ? "pulse 2s infinite" : "none",
                    "@keyframes pulse": {
                      "0%": { opacity: 1 },
                      "50%": { opacity: 0.5 },
                      "100%": { opacity: 1 },
                    },
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Showroom is currently{" "}
                  <Box
                    component="span"
                    sx={{
                      color: status ? "success.main" : "error.main",
                      fontWeight: 700,
                    }}
                  >
                    {status ? "OPEN" : "CLOSED"}
                  </Box>
                </Typography>
              </Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={status}
                    onChange={toggle}
                    color={status ? "error" : "success"}
                  />
                }
                label={`${status ? "Close" : "Open"} Showroom`}
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontWeight: 600,
                    color: "text.primary",
                  },
                }}
              />
            </Box>
          </Container>
        </Paper>

        <Main furniture={furniture} openStatus={status} toggle={toggle} />

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
      </Box>
    </ThemeProvider>
  );
}

export default App;
