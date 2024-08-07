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
        gap: 0,
        height: "160px",
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
            "--CircularProgress-track-color": "#7592FE",
            "--CircularProgress-size": "100px",
            "--CircularProgress-bar-color": "#fff",
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
            <Typography level="h3" sx={{ mb: 0, color: "#fff" }}>
              70%
            </Typography>
            <Typography sx={{ mt: 0, fontSize: "0.70rem", color: "#fff" }}>
              Goal
            </Typography>
            <Typography sx={{ mt: 0, fontSize: "0.70rem", color: "#fff" }}>
              Completed
            </Typography>
          </Box>
        </CircularProgress>
      </Box>

      <Typography sx={{ fontSize: "12px", color: "#fff", marginTop: "10px" }}>
        * The values here has been rounded off
      </Typography>
    </Box>
  );
}
