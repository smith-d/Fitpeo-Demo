import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CircularProgress from "@mui/material/CircularProgress";
import Graph from "./Graph";
import "../styles.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FlareIcon from "@mui/icons-material/Flare";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
import CircularProgressChildren from "./CircularProgressChildren";

const BoxIconWrapper = ({ children, color, backgroundColor, size }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "15%",
        backgroundColor: backgroundColor,
        color: color,
        marginRight: 1,
        fontSize: size / 2,
      }}
    >
      {children}
    </Box>
  );
};

const CircularIconWrapper = ({
  children,
  color = "white",
  backgroundColor = "#333",
  size = 80,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: backgroundColor,
        color: color,
        marginRight: 1,
        fontSize: size / 2,
      }}
    >
      {children}
    </Box>
  );
};

const DashBoard = () => {
  return (
    <div className="root">
      <h1 className="">DashBoard</h1>

      <div className="row" style={{ marginLeft: "20px" }}>
        <div className="col-md-8">
          <div className="d-flex justify-content-around">
            <Card
              sx={{
                minWidth: 150,
                maxWidth: 150,
                margin: 2,
                backgroundColor: "#1F2029",
              }}
            >
              <CardContent>
                <div>
                  <BoxIconWrapper
                    color="4662FB"
                    backgroundColor="#273369"
                    size={50}
                  >
                    <ShoppingCartIcon sx={{ fontSize: 25, color: "blue" }} />
                  </BoxIconWrapper>
                </div>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 600 }}
                  color="white"
                  gutterBottom
                >
                  Total Orders
                </Typography>
                <span></span>

                <Typography variant="body2" color="white">
                  <span className="value-text">75 </span>
                  <ArrowUpwardIcon sx={{ fontSize: 20, color: "green" }} />
                  3%
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                minWidth: 150,
                maxWidth: 150,
                margin: 2,
                backgroundColor: "#1F2029",
              }}
            >
              <CardContent>
                <div>
                  <BoxIconWrapper
                    color="#00CA8C"
                    backgroundColor="#145244"
                    size={50}
                  >
                    <ShoppingCartIcon sx={{ fontSize: 24 }} />
                    <CheckCircleIcon sx={{ fontSize: 10, marginBottom: 1 }} />
                  </BoxIconWrapper>
                </div>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 600 }}
                  color="white"
                  gutterBottom
                >
                  Total Delivered
                </Typography>

                <Typography variant="body2" color="white">
                  <span className="value-text">70 </span>
                  <ArrowDownwardIcon sx={{ fontSize: 20, color: "red" }} />
                  3%
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                minWidth: 150,
                maxWidth: 150,
                margin: 2,
                backgroundColor: "#1F2029",
              }}
            >
              <CardContent>
                <div>
                  <BoxIconWrapper
                    color="#F65D5C"
                    backgroundColor="#613339"
                    size={50}
                  >
                    <ShoppingCartIcon sx={{ fontSize: "24" }} />
                    <CancelIcon sx={{ fontSize: 12 }} />
                  </BoxIconWrapper>
                </div>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 600 }}
                  color="white"
                  gutterBottom
                >
                  Total Cancelled
                </Typography>

                <Typography variant="body2" color="white">
                  <span className="value-text">05 </span>
                  <ArrowUpwardIcon sx={{ fontSize: 20, color: "green" }} />
                  3%
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                minWidth: 150,
                maxWidth: 150,
                margin: 2,
                backgroundColor: "#1F2029",
              }}
            >
              <CardContent>
                <div>
                  <BoxIconWrapper
                    color="#E3499C"
                    backgroundColor="#5A2D4A"
                    size={50}
                  >
                    <AttachMoneyIcon sx={{ fontSize: 24, marginBottom: 1 }} />
                    <ArrowDownwardIcon sx={{ fontSize: 10, marginBottom: 1 }} />
                  </BoxIconWrapper>
                </div>
                <Typography
                  sx={{ fontSize: 14, fontWeight: 600 }}
                  color="white"
                  gutterBottom
                >
                  Total Revenue
                </Typography>

                <Typography variant="body2" color="white">
                  <span className="value-text">$12K </span>
                  <ArrowDownwardIcon sx={{ fontSize: 20, color: "red" }} /> 3%
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="col-md-4">
          <Card
            sx={{
              minWidth: "100%",
              maxWidth: "100%",
              margin: 2,
              backgroundColor: "#1F2029",
            }}
          >
            <CardContent>
              <div className="d-flex space-between">
                <span>
                  <Typography
                    sx={{ fontSize: 14, fontWeight: 600 }}
                    color="white"
                    gutterBottom
                  >
                    Net Profit
                  </Typography>

                  <Typography
                    variant="h4"
                    className="mt-3"
                    component="div"
                    color="white"
                    gutterBottom
                  >
                    $ 6759.25
                  </Typography>
                  <Typography variant="body2" color="white">
                    <ArrowUpwardIcon
                      sx={{ fontSize: 20, fontweight: 600, color: "green" }}
                    />{" "}
                    3%
                  </Typography>
                </span>
                <span>
                  <CircularProgressChildren />
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="d-flex justify-content-around">
            <Graph />
          </div>
        </div>
        <div className="col-md-4">
          <Box
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "#1F2029",
              color: "white",
            }}
          >
            <List>
              <ListItem>
                <ListItemIcon>
                  <CircularIconWrapper
                    color="#E3611C"
                    backgroundColor="#623138"
                    size={50}
                  >
                    <FlareIcon />
                  </CircularIconWrapper>
                </ListItemIcon>
                <ListItemText primary="Goals" />
                <ListItemIcon>
                  <ArrowForwardIosIcon
                    sx={{ color: "white", fontWeight: 800 }}
                  />
                </ListItemIcon>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CircularIconWrapper
                    color="#7184E3"
                    backgroundColor="#293268"
                    size={50}
                  >
                    <FastfoodIcon />
                  </CircularIconWrapper>
                </ListItemIcon>
                <ListItemText primary="Popular Dishes" />
                <ListItemIcon>
                  <ArrowForwardIosIcon
                    sx={{ color: "white", fontWeight: 800 }}
                  />
                </ListItemIcon>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CircularIconWrapper
                    color="#2FA0C9"
                    backgroundColor="#1F4B60"
                    size={50}
                  >
                    <MenuBookIcon />
                  </CircularIconWrapper>
                </ListItemIcon>
                <ListItemText primary="Menus" />
                <ListItemIcon>
                  <ArrowForwardIosIcon
                    sx={{ color: "white", fontWeight: 800 }}
                  />
                </ListItemIcon>
              </ListItem>
            </List>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
