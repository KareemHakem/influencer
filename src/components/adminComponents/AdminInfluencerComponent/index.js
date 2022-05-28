import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";

import "./style.css";

export default function AdminInfluencerComponent({
  handleDeleteInfluencer,
  influencer,
}) {
  return (
    <div>
      <div className="AdminUsersInfluencerInfoTableContainer">
        <div className="AdminUsersInfluencerInfoTable">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="tableId">ID</TableCell>
                  <TableCell className="tableInfluencerName" align="right">
                    NAME
                  </TableCell>
                  <TableCell className="tableFollowers" align="right">
                    FOLLOWERS
                  </TableCell>
                  <TableCell className="tablePone" align="right">
                    PHONE
                  </TableCell>
                  <TableCell className="tableRate" align="right">
                    RATE
                  </TableCell>
                  <TableCell align="right">ACTIONS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {influencer?.influencers?.map((influencer) => (
                  <TableRow
                    key={influencer._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell className="tableId" component="th" scope="row">
                      {influencer._id}
                    </TableCell>
                    <TableCell className="tableInfluencerName" align="right">
                      {influencer.name}
                    </TableCell>
                    <TableCell className="tableFollowers" align="right">
                      {influencer.instFollowers}
                    </TableCell>
                    <TableCell className="tablePone" align="right">
                      {influencer.phoneNumber}
                    </TableCell>
                    <TableCell className="tableRate" align="right">
                      {influencer.rating}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        style={{ color: "red" }}
                        onClick={() => handleDeleteInfluencer(influencer._id)}
                      >
                        <DeleteIcon />
                      </Button>
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
