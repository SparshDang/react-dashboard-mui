import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { AdminPanelSettingsOutlined } from "@mui/icons-material/";
import { LockOpenOutlined } from "@mui/icons-material";
import { SecurityOutlined } from "@mui/icons-material";

import Header from "../../components/Header";

import { tokens } from "../../themes";
import { mockDataTeam } from "../../data/mockData";
export default function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellCLassName: "name-column-cell",
    },
    {
      field: "age",
      headerName: "AGE",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "PHONE NUMBER", flex: 1 },
    { field: "email", headerName: "EMAIL", flex: 1 },
    {
      field: "access",
      headerName: "ACCESS",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width={"60%"}
            m="0 auto"
            p="5px"
            display={"flex"}
            justifyContent={"center"}
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius={"4px"}
          >
            {access === "admin" && <AdminPanelSettingsOutlined />}
            {access === "manager" && <SecurityOutlined />}
            {access === "user" && <LockOpenOutlined />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the team members" />
      <Box
        m="40px 0 0 0"
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
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
}
