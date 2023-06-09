import React from "react";
import Grid from "@mui/material/Grid";
import PieChartDash from "./PieChartDash";

export default function ProjectSource() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <PieChartDash />
      </Grid>
      <Grid item xs={6}>
        <PieChartDash />
      </Grid>
    </Grid>
  );
}
