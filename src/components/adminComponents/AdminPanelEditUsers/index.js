import React from "react";
import { useDispatch } from "react-redux";
import { deleteInfluencer } from "../../../redux/deletInfluencer/action";

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
  const dispatch = useDispatch();
  return (
    <div>
      <div className="AdminsUsersEditInfoTableContainer">
        <div className="AdminsUsersEditInfoTable">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">NAME</TableCell>
                  <TableCell align="right">EMAIL</TableCell>
                  <TableCell align="right">ADMIN</TableCell>
                  <TableCell align="right">INFLUENCER</TableCell>
                  <TableCell align="right">ACTIONS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users?.map((user) => (
                  <TableRow
                    key={user._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {user._id}
                    </TableCell>
                    <TableCell align="right">{user.name}</TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                    <TableCell align="right">
                      {user.isAdmin ? (
                        <CheckCircleIcon
                          fontSize="large"
                          style={{ color: "green" }}
                        />
                      ) : (
                        <CancelIcon fontSize="large" style={{ color: "red" }} />
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {user.isInfluencer ? (
                        <CheckCircleIcon
                          fontSize="large"
                          style={{ color: "green" }}
                        />
                      ) : (
                        <CancelIcon fontSize="large" style={{ color: "red" }} />
                      )}
                    </TableCell>
                    <TableCell align="right">
                      <ButtonGroup
                        style={{ backgroundColor: "gray" }}
                        variant="contained"
                      >
                        <Button
                          onClick={handleEditInputUsersNavigate}
                          style={{ color: "black" }}
                        >
                          <EditIcon />
                        </Button>
                        <Button
                          style={{ color: "red" }}
                          onClick={() => dispatch(deleteInfluencer(user._id))}
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
