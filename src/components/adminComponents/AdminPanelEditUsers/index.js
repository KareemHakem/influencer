import React from "react";
import { useSelector } from "react-redux";

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

export default function AdminPanelEditUsers({ handleEdit, handleDelete }) {
  const { influencer } = useSelector((state) => state.influencers);
  console.log("influencer =>", influencer);
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
                {influencer?.influencers?.map((influencer) => (
                  <TableRow
                    key={influencer._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {influencer._id}
                    </TableCell>
                    <TableCell align="right">{influencer.name}</TableCell>
                    <TableCell align="right">{influencer._email}</TableCell>
                    <TableCell align="right">
                      {influencer.isAdmin ? (
                        <CheckCircleIcon
                          fontSize="large"
                          style={{ color: "green" }}
                        />
                      ) : (
                        <CancelIcon fontSize="large" style={{ color: "red" }} />
                      )}
                    </TableCell>
                    <TableCell align="right">
                      {influencer.isInfluencer ? (
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
                        <Button onClick={handleEdit} style={{ color: "black" }}>
                          <EditIcon />
                        </Button>
                        <Button style={{ color: "red" }} onClick={handleDelete}>
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
