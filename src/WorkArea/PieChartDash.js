import React from "react";
import Grid from "@mui/material/Grid";
import Highcharts from "highcharts";
import PieChart from "highcharts-react-official";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function PieChartDash() {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Traffic Sources",
    },
    series: [
      {
        data: [
          {
            name: "Slice",
            y: 100,
          },
          {
            name: "Direct",
            y: 50,
          },
        ],
      },
    ],
  };
  const rows = [
    { source: "Direct", traffic: "40%" },
    { source: "Search", traffic: "60%" },
  ];
  return (
    <div style={{ padding: "0.8em" }} className="pieChartDiv">
      <Grid container spacing={0}>
        <Grid item xs={6}>
          {/* <TableContainer component={Paper}> */}
          <Table sx={{ minWidth: 180 }} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Source</TableCell>
                <TableCell>Traffic</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.source}>
                  <TableCell component="th" scope="row">
                    {row.source}
                  </TableCell>
                  <TableCell>{row.traffic}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* </TableContainer> */}
        </Grid>
        <Grid item xs={6}>
          <PieChart
            highcharts={Highcharts}
            options={options}
            style={{ height: "200px" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
