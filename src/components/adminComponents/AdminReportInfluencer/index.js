import React from "react";

import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableBody } from "@mui/material";

import "./style.css";

export default function AdminReportInfluencer({ reports }) {
  return (
    <div>
      <div className="adminsReportInfluencerTableContainer">
        <div className="adminsReportInfluencerTable">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">USER_NAME</TableCell>
                  <TableCell align="right">USER_ID</TableCell>
                  <TableCell align="right">INFLUENCER_NAME</TableCell>
                  <TableCell align="right">INFLUENCER_ID</TableCell>
                  <TableCell align="right">DESCRIPTION(REPORT)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reports?.map((report) => (
                  <TableRow
                    key={report._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {report.name}
                    </TableCell>
                    <TableCell align="right">{report._id}</TableCell>
                    <TableCell align="right">{report.infName}</TableCell>
                    <TableCell align="right">{report.influencer}</TableCell>
                    <TableCell align="right">{report.description}</TableCell>
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
