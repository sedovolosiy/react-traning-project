import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Avatar,
} from "@mui/material";
import { Home } from "@mui/icons-material";

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

export default Header;
