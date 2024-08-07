import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { faker } from "@faker-js/faker";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  textAlign: "left", // Aligns text to the left
  color: theme.palette.common.white,
  padding: "16px 24px",
  overflow: "hidden",
}));
const StyledStatusCell = styled(TableCell)(({ theme }) => ({
  textAlign: "center", // Aligns text to the left
  color: theme.palette.common.white,
  padding: "16px 24px",
  overflow: "hidden",
}));

const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
  textAlign: "left", // Aligns text to the left
  color: theme.palette.common.white,
  fontWeight: "bold",
  fontSize: "1rem",
  padding: "16px 24px",
  // Ensure text alignment is not overridden by other styles
  overflow: "hidden",
}));

function createData(
  name: string,
  orderNo: number,
  amount: string,
  status: string
) {
  return { name, orderNo, amount, status };
}

const rows = [
  createData("Wade Warren", 15478256, "$124.00", "Delivered"),
  createData("Jane Cooper", 48965786, "$365.02", "Delivered"),
  createData("Guy Hawkins", 78958215, "$45.88", "Cancelled"),
  createData("Kristin Watson", 20965732, "$65.00", "Pending"),
  createData("Cody Fisher", 95715620, "$545.00", "Delivered"),
  createData("Savannah Nguyen", 78514568, "$128.20", "Delivered"),
];

export default function Orders() {
  return (
    <Card
      sx={{
        width: "838px",
        height: "300px",
        margin: 1,
        marginTop: 0,
        padding: 1,
        backgroundColor: "#1F2029",
        overflow: "hidden",
      }}
    >
      <CardContent>
        <div
          className="mb-2"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "white",
            display: "flex",
            justifyContent: "start",
            marginLeft: "20px",
          }}
        >
          Orders
        </div>
        <TableContainer
          component={Paper}
          sx={{
            maxHeight: "220px",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
          }}
        >
          <Table
            sx={{
              backgroundColor: "#1F2029",
              color: "white",
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <StyledTableHeadCell>Customer</StyledTableHeadCell>
                <StyledTableHeadCell align="right">
                  Order No.
                </StyledTableHeadCell>
                <StyledTableHeadCell align="right">Amount</StyledTableHeadCell>
                <StyledTableHeadCell align="right" sx={{ textAlign: "center" }}>
                  Status
                </StyledTableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="row">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        alt={row.name}
                        src={faker.image.avatar()}
                        sx={{ marginRight: "10px" }}
                      />
                      <Typography
                        variant="body1"
                        sx={{ color: "white", fontWeight: "bold" }}
                      >
                        {row.name}
                      </Typography>
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.orderNo}</StyledTableCell>
                  <StyledTableCell align="right">{row.amount}</StyledTableCell>
                  <StyledStatusCell
                    sx={{
                      color:
                        row.status === "Delivered"
                          ? "green"
                          : row.status === "Cancelled"
                          ? "red"
                          : row.status === "Pending"
                          ? "orange"
                          : "white",
                      fontWeight: "bold",
                      padding: "16px 24px",
                    }}
                  >
                    <Box
                      sx={{
                        padding: "2px 4px",
                        borderRadius: "8px",
                        backgroundColor:
                          row.status === "Delivered"
                            ? "rgba(0, 255, 0, 0.1)"
                            : row.status === "Cancelled"
                            ? "rgba(255, 0, 0, 0.1)"
                            : row.status === "Pending"
                            ? "rgba(255, 165, 0, 0.1)"
                            : "rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      {row.status}
                    </Box>
                  </StyledStatusCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
