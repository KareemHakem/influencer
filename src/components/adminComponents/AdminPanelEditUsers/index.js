import React from "react";

import { Button, ButtonGroup } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import "./style.css";

export default function AdminPanelEditUsers({
  handleEditInputUsersNavigate,
  handleDeleteUsersNavigate,
  handleAdminDeleteUsers,
  users,
}) {
  return (
    <div>
      <div className="AdminsUsersEditInfoTableContainer">
        <div className="AdminsUsersEditInfoTable">
          <TableContainer component={Paper}>
            <Table  aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableID">ID</TableCell>
                  <TableCell className="tableName" align="right">
                    NAME
                  </TableCell>
                  <TableCell className="tableEmail" align="right">
                    EMAIL
                  </TableCell>
                  <TableCell className="tableAdmin" align="right">
                    ADMIN
                  </TableCell>
                  <TableCell className="tableInfluencer" align="right">
                    INFLUENCER
                  </TableCell>
                  <TableCell className="tableActions" align="right">
                    ACTIONS
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users?.map((user) => (
                  <TableRow
                    key={user._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell className="tableID" component="th" scope="row">
                      {user._id}
                    </TableCell>
                    <TableCell className="tableName" align="right">
                      {user.name}
                    </TableCell>
                    <TableCell className="tableEmail" align="right">
                      {user.email}
                    </TableCell>
                    <TableCell className="tableAdmin" align="right">
                      {user.isAdmin ? (
                        <CheckCircleIcon
                          fontSize="large"
                          style={{ color: "green" }}
                        />
                      ) : (
                        <CancelIcon fontSize="large" style={{ color: "red" }} />
                      )}
                    </TableCell>
                    <TableCell className="tableInfluencer" align="right">
                      {user.isInfluencer ? (
                        <CheckCircleIcon
                          fontSize="large"
                          style={{ color: "green" }}
                        />
                      ) : (
                        <CancelIcon fontSize="large" style={{ color: "red" }} />
                      )}
                    </TableCell>
                    <TableCell className="tableActions" align="right">
                      <ButtonGroup
                        style={{ backgroundColor: "gray" }}
                        variant="contained"
                      >
                        <Button
                          onClick={() => handleEditInputUsersNavigate(user._id)}
                          style={{ color: "black" }}
                        >
                          <EditIcon />
                        </Button>
                        <Button
                          style={{ color: "red" }}
                          onClick={() => handleAdminDeleteUsers(user._id)}
                        >
                          <DeleteIcon />
                        </Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
