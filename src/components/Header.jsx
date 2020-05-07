import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import PublicIcon from "@material-ui/icons/Public";

function Header() {
  return (
    <AppBar position="static" style={{ backgroundColor: "#f0a500" }}>
      <Typography
        variant="h4"
        style={{
          fontWeight: "900",
          letterSpacing: "1px",
          fontSize: "2.4rem",
          fontFamily: "'Neuton', serif",
        }}
      >
        <PublicIcon style={{ marginBottom: "-4", fontSize: "2rem" }} /> Guess
        the Capital
      </Typography>
    </AppBar>
  );
}

export default Header;
