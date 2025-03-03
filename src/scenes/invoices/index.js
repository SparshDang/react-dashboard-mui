import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import Header from "../../components/Header";

import { tokens } from "../../themes";
import { mockDataInvoices } from "../../data/mockData";

export default function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex:0.5 },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellCLassName: "name-column-cell",
    },

    { field: "phone", headerName: "PHONE NUMBER", flex: 1 },
    { field: "email", headerName: "EMAIL", flex: 1 },
    { field: "cost", headerName: "COST", flex: 1, renderCell: (params) => {
        <Typography color={colors.greenAccent[500]}>
            ${params.row.cost}
        </Typography>
    } },
    { field: "date", headerName: "Date", flex: 1 },
  ];
  return (
    <Box m="20px">
      <Header title="Invoices" subtitle="List of invoice balances"  />
      <Box
        m="0 auto" 
        height="75vh"
        
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column-cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },

          "& .MuiCheckbox-root":{
            color:`${colors.greenAccent[200]} !important` 
          }
          }}
      >

        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns}/>
      </Box>
    </Box>
  );
}
