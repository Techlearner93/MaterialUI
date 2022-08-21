import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Orsa",
    last_name: "Matovic",
    email: "omatovic0@qq.com",
    gender: "Female",
    ip_address: "64.139.90.18",
  },
  {
    id: 2,
    first_name: "Horatia",
    last_name: "Martynov",
    email: "hmartynov1@bloglines.com",
    gender: "Female",
    ip_address: "164.231.96.98",
  },
  {
    id: 3,
    first_name: "Henriette",
    last_name: "Hurles",
    email: "hhurles2@ebay.com",
    gender: "Female",
    ip_address: "37.114.2.242",
  },
  {
    id: 4,
    first_name: "Massimiliano",
    last_name: "Folbige",
    email: "mfolbige3@hibu.com",
    gender: "Male",
    ip_address: "145.117.213.220",
  },
  {
    id: 5,
    first_name: "Claudius",
    last_name: "Wickardt",
    email: "cwickardt4@seattletimes.com",
    gender: "Polygender",
    ip_address: "151.126.206.124",
  },
  {
    id: 6,
    first_name: "Earlie",
    last_name: "Sorton",
    email: "esorton5@blogs.com",
    gender: "Male",
    ip_address: "41.248.200.239",
  },
  {
    id: 7,
    first_name: "Franklyn",
    last_name: "Dillet",
    email: "fdillet6@aol.com",
    gender: "Male",
    ip_address: "254.0.62.122",
  },
  {
    id: 8,
    first_name: "Simone",
    last_name: "Younger",
    email: "syounger7@nytimes.com",
    gender: "Male",
    ip_address: "40.79.75.17",
  },
  {
    id: 9,
    first_name: "Greta",
    last_name: "Crummey",
    email: "gcrummey8@feedburner.com",
    gender: "Female",
    ip_address: "31.103.229.146",
  },
  {
    id: 10,
    first_name: "Ryley",
    last_name: "Domm",
    email: "rdomm9@timesonline.co.uk",
    gender: "Male",
    ip_address: "111.146.239.196",
  },
];
