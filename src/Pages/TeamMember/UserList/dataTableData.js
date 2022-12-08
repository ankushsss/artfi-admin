/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://material-ui.com/store/items/soft-ui-pro-dashboard/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import MenuItem from "@mui/material/MenuItem";
import SoftBox from "components/SoftBox";
import proxy from "./proxy.jpg";
import SoftButton from "components/SoftButton";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import Basket from "examples/Icons/Basket";
import { Link } from "react-router-dom";

const ActionMenu = () => {
  const [usersActiveMenu, setUsersActiveMenu] = useState(null);
  const openUsersActiveMenu = (event) => setUsersActiveMenu(event.currentTarget);
  const closeUsersActiveMenu = () => setUsersActiveMenu(null);
  return (
    <SoftBox mb={0} lineHeight={1} color="white">
      <Icon
        fontSize="default"
        onClick={openUsersActiveMenu}
        sx={{ cursor: "pointer", color: "#344767" }}
      >
        more_vert
      </Icon>
      <Menu
        anchorEl={usersActiveMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={Boolean(usersActiveMenu)}
        onClose={closeUsersActiveMenu}
        keepMounted
      >
        {/* <SoftBox mb={2} lineHeight={1} color="white">
          <SoftButton onClick={closeUsersActiveMenu} color="secondary">
            Edit
          </SoftButton>
        </SoftBox> */}
        <MenuItem onClick={closeUsersActiveMenu}>Edit</MenuItem>
        <MenuItem onClick={closeUsersActiveMenu}>Delete</MenuItem>
      </Menu>
    </SoftBox>
  );
};

const dataTableData = {
  columns: [
    { Header: "FullName", accessor: "FullName", width: "20%" },
    { Header: "Description", accessor: "description", width: "20%" },
    { Header: "Born Year", accessor: "born_year", width: "15%" },
    { Header: "Status", accessor: "Status", width: "10%" },
    { Header: "Verified", accessor: "is_verified", width: "10%" },
    { Header: "Known For", accessor: "know_for", width: "15%" },
    { Header: "Action", accessor: "action", width: "10%" },
  ],

  rows: [
    {
      FullName: <Link to="#">Hanny Baniard</Link>,
      description: "famous famous artist",
      is_verified: "verified",
      born_year: "2022",
      Status: "Active",
      know_for: "very famous",
      action: <ActionMenu />,
    },
  ],
};

export default dataTableData;
