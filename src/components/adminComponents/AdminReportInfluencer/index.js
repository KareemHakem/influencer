import React from "react";

import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./style.css";

export default function AdminReportInfluencer() {
  return (
    <div>
      <div className="adminsReportInfluencerTableContainer">
        <div className="adminsReportInfluencerTable">
          <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">USER_NAME</TableCell>
                  <TableCell align="right">USER_ID</TableCell>
                  <TableCell align="right">INFLUENCER_ID</TableCell>
                  <TableCell align="right">DESCRIPTION(REPORT)</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
