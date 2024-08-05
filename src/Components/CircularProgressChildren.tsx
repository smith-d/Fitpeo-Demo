import * as React from "react";
import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";
import Typography from "@mui/joy/Typography";

export default function CircularProgressChildren() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          size="lg"
          determinate
          value={70}
          sx={{
            width: "100px",
            height: "100px",
            "--CircularProgress-size": "100px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              width: "100%",
            }}
          >
            <Typography level="h3" sx={{ mb: 0, color: "#7393FF" }}>
              70%
            </Typography>
            <Typography
              level="body2"
              sx={{ mt: 0, fontSize: "0.70rem", color: "#7393FF" }}
            >
              Goal
            </Typography>
            <Typography
              level="body2"
              sx={{ mt: 0, fontSize: "0.70rem", color: "#7393FF" }}
            >
              Completed
            </Typography>
          </Box>
        </CircularProgress>
      </Box>

      <Typography sx={{ fontSize: "0.75rem", color: "text.secondary" }}>
        * The values here have been rounded off
      </Typography>
    </Box>
  );
}
