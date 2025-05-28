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
      component="header"
      role="banner"
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
              aria-hidden="true"
              sx={{
                bgcolor: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Home aria-hidden="true" />
            </Avatar>
            <Box>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontWeight: 700,
                  mb: 0.5,
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                {name}'s Furniture Showroom
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 400,
                }}
              >
                Premium furniture collection
              </Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <Typography
              variant="caption"
              component="p"
              aria-label={`Copyright ${year}, All rights reserved`}
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
