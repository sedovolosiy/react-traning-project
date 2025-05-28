import {
  Paper,
  Container,
  Box,
  Typography,
  Switch,
  FormControlLabel,
} from "@mui/material";

function StatusBar({ status, toggle }) {
  return (
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
  );
}

export default StatusBar;
