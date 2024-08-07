import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import Graph from "./Graph";
import "../styles.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
import CircularProgressChildren from "./CircularProgressChildren";
import Orders from "./Orders";
import CustomerReviews from "./CustomerReviews";
import { FaShoppingBasket } from "react-icons/fa";
import { BsFillHandbagFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { SlTarget } from "react-icons/sl";
import { PiHamburgerLight } from "react-icons/pi";
import { BiDish } from "react-icons/bi";

interface BoxIconWrapperProps {
  children: React.ReactNode;
  color: string;
  backgroundColor: string;
  size: number;
}

const BoxIconWrapper: React.FC<BoxIconWrapperProps> = ({
  children,
  color,
  backgroundColor,
  size,
}) => {
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
      {" "}
      {children}{" "}
    </Box>
  );
};

interface CircularIconWrapperProps {
  children: React.ReactNode;
  color?: string;
  backgroundColor?: string;
  size?: number;
}

const CircularIconWrapper: React.FC<CircularIconWrapperProps> = ({
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
      {" "}
      {children}{" "}
    </Box>
  );
};

const DashBoard: React.FC = () => {
  return (
    <div className="root">
      {" "}
      <div className="row" style={{ marginLeft: "0px" }}>
        {" "}
        <h1 className="title" style={{ margin: "25px 8px" }}>
          {" "}
          DashBoard{" "}
        </h1>
        <div className="d-flex justify-content-around">
          {/* Cards */}
          <Card
            sx={{
              minWidth: 190,
              height: 160,
              margin: 1,
              backgroundColor: "#1F2029",
            }}
          >
            <CardContent>
              <div>
                <BoxIconWrapper
                  color="#4662FB"
                  backgroundColor="#273369"
                  size={50}
                >
                  <FaShoppingBasket />
                  <AddCircleIcon
                    sx={{
                      fontSize: 10,
                      marginBottom: -2.5,
                      marginLeft: "-2.5px",
                    }}
                  />
                </BoxIconWrapper>
              </div>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                  marginTop: "12px",
                  marginBottom: "14px",
                }}
                color="white"
                gutterBottom
              >
                Total Orders
              </Typography>
              {/* <span></span> */}
              <div className="d-flex align-items-center justify-content-between">
                <Typography variant="body2" color="white">
                  <span className="value-text">75</span>
                </Typography>
                <Typography variant="body2" color="white">
                  <span>
                    <ArrowUpwardIcon sx={{ fontSize: 20, color: "green" }} />
                    3%
                  </span>
                </Typography>
              </div>
            </CardContent>
          </Card>
          <Card
            sx={{
              minWidth: 190,
              height: 160,
              margin: 1,
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
                  <BsFillHandbagFill />
                  <CheckCircleIcon
                    sx={{
                      fontSize: 10,
                      marginBottom: -2.5,
                      marginLeft: "-2.5px",
                    }}
                  />
                </BoxIconWrapper>
              </div>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                  marginTop: "12px",
                  marginBottom: "14px",
                }}
                color="white"
                gutterBottom
              >
                Total Delivered
              </Typography>

              <div className="d-flex align-items-center justify-content-between">
                <Typography variant="body2" color="white">
                  <span className="value-text">70</span>
                </Typography>
                <Typography variant="body2" color="white">
                  <span>
                    <ArrowDownwardIcon sx={{ fontSize: 20, color: "red" }} />
                    3%
                  </span>
                </Typography>
              </div>
            </CardContent>
          </Card>
          <Card
            sx={{
              minWidth: 190,
              height: 160,
              margin: 1,
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
                  <BsFillHandbagFill />

                  <CancelIcon
                    sx={{
                      fontSize: 10,
                      marginBottom: -2.5,
                      marginLeft: "-2.5px",
                    }}
                  />
                </BoxIconWrapper>
              </div>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                  marginTop: "12px",
                  marginBottom: "14px",
                }}
                color="white"
                gutterBottom
              >
                Total Cancelled
              </Typography>
              <div className="d-flex align-items-center justify-content-between">
                <Typography variant="body2" color="white">
                  <span className="value-text">05</span>
                </Typography>
                <Typography variant="body2" color="white">
                  <span>
                    <ArrowUpwardIcon sx={{ fontSize: 20, color: "green" }} />
                    3%
                  </span>
                </Typography>
              </div>
            </CardContent>
          </Card>
          <Card
            sx={{
              minWidth: 190,
              height: 160,
              margin: 1,
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
                  <AiFillDollarCircle />
                  <ArrowDownwardIcon
                    sx={{
                      fontSize: 10,
                      marginBottom: -2,
                      marginLeft: "-2.5px",
                    }}
                  />
                </BoxIconWrapper>
              </div>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                  marginTop: "12px",
                  marginBottom: "14px",
                }}
                color="white"
                gutterBottom
              >
                Total Revenue
              </Typography>

              <div className="d-flex align-items-center justify-content-between">
                <Typography variant="body2" color="white">
                  <span className="value-text">$12K</span>
                </Typography>
                <Typography variant="body2" color="white">
                  <span>
                    <ArrowDownwardIcon sx={{ fontSize: 20, color: "red" }} />
                    3%
                  </span>
                </Typography>
              </div>
            </CardContent>
          </Card>

          <Card
            sx={{
              width: "380px",
              height: "160px",
              margin: 1,
              backgroundColor: "#1F2029",
            }}
          >
            <CardContent>
              <div className="d-flex justify-content-between">
                <div className="">
                  <span>
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 600,
                        marginTop: "12px",
                        marginBottom: "14px",
                      }}
                      color="white"
                      gutterBottom
                    >
                      Net Profit
                    </Typography>
                    <Typography variant="body2" color="white">
                      <span className="value-text">$ 6759.25</span>
                    </Typography>
                    <Typography
                      sx={{ marginTop: "20px" }}
                      variant="body2"
                      color="white"
                    >
                      <ArrowUpwardIcon
                        sx={{ fontSize: 20, fontWeight: 600, color: "green" }}
                      />{" "}
                      3%
                    </Typography>
                  </span>
                </div>
                <div className="">
                  <span>
                    <CircularProgressChildren />
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="row" style={{ marginLeft: "0px" }}>
        <div
          className="d-flex justify-content-around align-items-start mt-4"
          style={{ gap: "20px", margin: "10px" }}
        >
          <div style={{ flex: 2, display: "flex", flexDirection: "column" }}>
            <Card
              sx={{
                width: "838px",
                height: "300px",
                margin: 1,
                marginTop: 0,
                padding: 2,
                backgroundColor: "#1F2029",
              }}
            >
              <Graph />
            </Card>
          </div>

          <div style={{ flex: 2, display: "flex", flexDirection: "column" }}>
            <Card
              sx={{
                width: "380px",
                height: "300px",
                bgcolor: "#1F2029",
                color: "white",
                borderRadius: "10px",
              }}
            >
              <List>
                <ListItem>
                  <ListItemIcon className="mt-3">
                    <CircularIconWrapper
                      color="#E3611C"
                      backgroundColor="#623138"
                      size={70}
                    >
                      <SlTarget />
                    </CircularIconWrapper>
                  </ListItemIcon>
                  <ListItemText
                    primary="Goals"
                    className="mt-3"
                    sx={{ fontSize: "40px" }}
                  />
                  <ListItemIcon className="mt-3">
                    <CircularIconWrapper
                      color="#46474B"
                      backgroundColor="#46474B"
                      size={30}
                    >
                      <ArrowForwardIosIcon
                        sx={{
                          color: "white",
                          fontWeight: 800,
                          fontSize: "17px",
                        }}
                      />
                    </CircularIconWrapper>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircularIconWrapper
                      color="#7184E3"
                      backgroundColor="#293268"
                      size={70}
                    >
                      <PiHamburgerLight />
                    </CircularIconWrapper>
                  </ListItemIcon>
                  <ListItemText primary="Popular Dishes" />
                  <ListItemIcon>
                    <CircularIconWrapper
                      color="#46474B"
                      backgroundColor="#46474B"
                      size={30}
                    >
                      <ArrowForwardIosIcon
                        sx={{
                          color: "white",
                          fontWeight: 800,
                          fontSize: "17px",
                        }}
                      />
                    </CircularIconWrapper>
                  </ListItemIcon>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CircularIconWrapper
                      color="#2FA0C9"
                      backgroundColor="#1F4B60"
                      size={70}
                    >
                      <BiDish />
                    </CircularIconWrapper>
                  </ListItemIcon>
                  <ListItemText primary="Menus" />
                  <ListItemIcon>
                    <CircularIconWrapper
                      color="#46474B"
                      backgroundColor="#46474B"
                      size={30}
                    >
                      <ArrowForwardIosIcon
                        sx={{
                          color: "white",
                          fontWeight: 800,
                          fontSize: "17px",
                        }}
                      />
                    </CircularIconWrapper>
                  </ListItemIcon>
                </ListItem>
              </List>
            </Card>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginLeft: "0px" }}>
        <div
          className="d-flex justify-content-around align-items-start mt-4"
          style={{ gap: "20px", margin: "10px" }}
        >
          <div style={{ flex: 2, display: "flex", flexDirection: "column" }}>
            <Orders />
          </div>

          <div style={{ flex: 2, display: "flex", flexDirection: "column" }}>
            <CustomerReviews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
