import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: "#28282A" }} position="static">
        <Toolbar sx={{
          display:"flex",
          justifyContent:"end",

        }}>
          <Typography
            align="center"
            variant="h6"
            component="div"
            sx={{
              // flexGrow: 1,
              width:"100%",
              display:"flex",
              justifyContent:"center",
              position:"absolute",
              left:0,
              color: " #FFF",
              fontFamily: "Roboto Condensed",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "38.4px",
              textTransform: " uppercase",
            }}
          >
            <Link sx={{ color: "#fff", textDecoration: "none" }} href="/">
              ONEPIRATE
            </Link>
          </Typography>
          <div>
            <Button
              color="inherit"
              sx={{
                fontFamily: "Roboto Condensed",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "25.6px",
                textTransform: "uppercase",
              }}
              href="signin"
            >
              Sign In
            </Button>
            <Button
              color="inherit"
              sx={{
                color: "#F36",
                fontFamily: "Roboto Condensed",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "25.6px",
                textTransform: "uppercase",
              }}
              href="signup"
            >
              Sign Up
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
