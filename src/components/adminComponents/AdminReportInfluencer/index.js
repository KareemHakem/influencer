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
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="TableUserName" align="right">
                    USER_NAME
                  </TableCell>
                  <TableCell className="TableUserId" align="right">
                    USER_ID
                  </TableCell>
                  <TableCell className="tableUserInfluencerName" align="right">
                    INFLUENCER_NAME
                  </TableCell>
                  <TableCell className="tableUserInfluencerId" align="right">
                    INFLUENCER_ID
                  </TableCell>
                  <TableCell className="tableUserDesc" align="right">
                    DESCRIPTION(REPORT)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reports?.map((report) => (
                  <TableRow
                    key={report._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      className="TableUserName"
                      component="th"
                      scope="row"
                    >
                      {report.name}
                    </TableCell>
                    <TableCell className="TableUserId" align="right">
                      {report._id}
                    </TableCell>
                    <TableCell
                      className="tableUserInfluencerName"
                      align="right"
                    >
                      {report.infName}
                    </TableCell>
                    <TableCell className="tableUserInfluencerId" align="right">
                      {report.influencer}
                    </TableCell>
                    <TableCell className="tableUserDesc" align="right">
                      {report.description}
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
