import {
  Paper,
  Container,
  Box,
  Typography,
  Switch,
  FormControlLabel,
} from "@mui/material";

function StatusBar({ status, toggle }) {
  const statusText = status ? "OPEN" : "CLOSED";
  const actionText = status ? "Close" : "Open";

  return (
    <Paper
      elevation={1}
      component="section"
      role="region"
      aria-labelledby="showroom-status"
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
              role="img"
              aria-label={`Status indicator: showroom is ${statusText.toLowerCase()}`}
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
            <Typography
              id="showroom-status"
              variant="h6"
              component="h2"
              sx={{
                fontWeight: 500,
                fontSize: "1rem", // Ensure consistent sizing
              }}
            >
              Showroom is currently{" "}
              <Box
                component="span"
                role="status"
                aria-live="polite"
                aria-atomic="true"
                sx={{
                  color: status ? "success.main" : "error.main",
                  fontWeight: 600,
                }}
              >
                {statusText}
              </Box>
            </Typography>
          </Box>
          <FormControlLabel
            control={
              <Switch
                checked={status}
                onChange={toggle}
                color={status ? "error" : "success"}
                inputProps={{
                  "aria-describedby": "switch-description",
                  "aria-label": `${actionText} showroom`,
                }}
              />
            }
            label={`${actionText} Showroom`}
            labelPlacement="start"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontWeight: 600,
                color: "text.primary",
              },
            }}
          />
          <Typography
            id="switch-description"
            variant="srOnly"
            component="div"
            sx={{
              position: "absolute",
              left: "-10000px",
              width: "1px",
              height: "1px",
              overflow: "hidden",
            }}
          >
            Toggle to {actionText.toLowerCase()} the furniture showroom
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}

export default StatusBar;
