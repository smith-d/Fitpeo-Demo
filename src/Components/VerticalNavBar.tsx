import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import InsertChartOutlinedOutlinedIcon from "@mui/icons-material/InsertChartOutlinedOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { RiLogoutCircleRLine } from "react-icons/ri";

// Define the props for IconWrapper and Icon
interface IconWrapperProps {
  isActive?: boolean;
}

interface IconProps {
  isActive?: boolean;
}

const Sidebar = styled("div")(({ theme }) => ({
  width: 60,
  height: "100vh",
  backgroundColor: "#1F2029",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: theme.spacing(2),
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    width: 50,
  },
}));

const IconWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "isActive",
})<IconWrapperProps>(({ theme, isActive }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(1),
  ...(isActive && {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
  }),
}));

const SidebarIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: "#292B2F",
  },
}));

const TopIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "2rem",
  marginBottom: theme.spacing(4),
}));

const Icon = styled("div", {
  shouldForwardProp: (prop) => prop !== "isActive",
})<IconProps>(({ theme, isActive }) => ({
  color: isActive ? theme.palette.primary.main : theme.palette.common.white,
}));

const LogoutIcon = styled(RiLogoutCircleRLine)(({ theme }) => ({
  color: "white",
  fontSize: "1.5rem",
  position: "absolute",
  bottom: theme.spacing(2),
  margin: theme.spacing(1),
}));

export default function VerticalNavBar() {
  const [activeIcon, setActiveIcon] = React.useState("dashboard");

  const handleClick = (iconName: string) => {
    setActiveIcon(iconName);
  };

  return (
    <Sidebar>
      <IconWrapper aria-label="dashboard" isActive={activeIcon === "dashboard"}>
        <TopIconButton onClick={() => handleClick("dashboard")}>
          <GridViewOutlinedIcon sx={{ fontSize: "inherit" }} />
        </TopIconButton>
      </IconWrapper>
      <IconWrapper
        aria-label="home"
        isActive={activeIcon === "home"}
        onClick={() => handleClick("home")}
      >
        <SidebarIconButton>
          <Icon isActive={activeIcon === "home"}>
            <HomeOutlinedIcon />
          </Icon>
        </SidebarIconButton>
      </IconWrapper>
      <IconWrapper
        aria-label="chart"
        isActive={activeIcon === "chart"}
        onClick={() => handleClick("chart")}
      >
        <SidebarIconButton>
          <Icon isActive={activeIcon === "chart"}>
            <InsertChartOutlinedOutlinedIcon />
          </Icon>
        </SidebarIconButton>
      </IconWrapper>
      <IconWrapper
        aria-label="tasks"
        isActive={activeIcon === "tasks"}
        onClick={() => handleClick("tasks")}
      >
        <SidebarIconButton>
          <Icon isActive={activeIcon === "tasks"}>
            <AssignmentTurnedInOutlinedIcon />
          </Icon>
        </SidebarIconButton>
      </IconWrapper>
      <IconWrapper
        aria-label="wallet"
        isActive={activeIcon === "wallet"}
        onClick={() => handleClick("wallet")}
      >
        <SidebarIconButton>
          <Icon isActive={activeIcon === "wallet"}>
            <AccountBalanceWalletOutlinedIcon />
          </Icon>
        </SidebarIconButton>
      </IconWrapper>
      <IconWrapper
        aria-label="shopping"
        isActive={activeIcon === "shopping"}
        onClick={() => handleClick("shopping")}
      >
        <SidebarIconButton>
          <Icon isActive={activeIcon === "shopping"}>
            <ShoppingBagOutlinedIcon />
          </Icon>
        </SidebarIconButton>
      </IconWrapper>
      <LogoutIcon />
    </Sidebar>
  );
}
