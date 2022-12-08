/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://material-ui.com/store/items/soft-ui-pro-dashboard/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import SoftButton from "components/SoftButton";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import React from "react";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import { Link } from "react-router-dom";
// Data
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "redux/userGetSlice";
import { editRole } from "redux/userEditRole";
import { FormControl, Icon, Menu, MenuItem, Select, Switch } from "@mui/material";
import { useCookies } from "react-cookie";
import SoftInput from "components/SoftInput";
import UserInfoModal from "./EditUser/ModalUserInfo";
import axios from "axios";
import { deleteUser } from "redux/userDeleteSlice";

function UserList() {
  const dispatch = useDispatch();
  const [cookie] = useCookies("artfi_token");

  const [showModal, setShowModal] = useState(false);
  const [EditUserId, setEditUserId] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [editUserInfo, setEditUserInfo] = useState({
    fullname: "",
    contactNumber: "",
    email: "",
  });
  const deleteUserFunction = async (id) => {
    const response = await dispatch(deleteUser({ token: cookie.artfi_token, id }));
  };

  const ActionMenu = ({ id, index, editUser }) => {
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
          // onClick={() => setShowModal(true)}
          anchorEl={usersActiveMenu}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={Boolean(usersActiveMenu)}
          onClose={closeUsersActiveMenu}
          keepMounted
        >
          <MenuItem
            onClick={() => {
              closeUsersActiveMenu();
              setEditUserInfo({
                fullname: editUser.fullname,
                email: editUser.email,
                contactNumber: editUser.contactNumber,
                id: id,
              });
              setEditUserId(id);
              handleOpen();
            }}
          >
            Edit
          </MenuItem>
          <MenuItem
            onClick={() => {
              closeUsersActiveMenu();
              deleteUserFunction(id);
            }}
          >
            Delete
          </MenuItem>
        </Menu>
      </SoftBox>
    );
  };

  useEffect(() => {
    dispatch(fetchUser(cookie.artfi_token));
  }, []);

  const { table, status } = useSelector((state) => state.userList);

  const Role = ({ value, id }) => {
    const [role, setRole] = useState(value);
    useEffect(() => {
      if (role != value) {
        roleEdit();
      }
    }, [role]);

    const roleEdit = async () => {
      const response = await dispatch(
        editRole({ token: cookie.artfi_token, id, data: { role: role } })
      );
    };

    return (
      <Select
        input={<SoftInput />}
        value={role}
        onChange={async (e) => {
          setRole(e.target.value);
        }}
      >
        <MenuItem value="...">...</MenuItem>
        <MenuItem value="superadmin">SuperAdmin</MenuItem>
        <MenuItem value="admin">Admin</MenuItem>
        <MenuItem value="user">User</MenuItem>
      </Select>
    );
  };
  const Status = ({ value, id }) => {
    const [status, setStatus] = useState(value);

    useEffect(() => {
      if (status != value) {
        statusEdit();
      }
    }, [status]);

    const statusEdit = async () => {
      const response = await dispatch(
        editRole({ token: cookie.artfi_token, id, data: { status: status } })
      );
    };

    return (
      <Select input={<SoftInput />} value={status} onChange={(e) => setStatus(e.target.value)}>
        <MenuItem value="...">...</MenuItem>
        <MenuItem value="active">Active</MenuItem>
        <MenuItem value="inactive">Inactive</MenuItem>
        <MenuItem value="block">Block</MenuItem>
      </Select>
    );
  };
  const IsActive = ({ value, id }) => {
    const [isActiveData, setIsActive] = useState(value);

    useEffect(() => {
      if (isActiveData != value) {
        isActiveEdit();
      }
    }, [isActiveData]);

    const isActiveEdit = async () => {
      const active = isActiveData;

      const response = await dispatch(
        editRole({ token: cookie.artfi_token, id, data: { IsActive: isActiveData } })
      );
    };
    return (
      <div>
        <Switch checked={isActiveData} onChange={(e) => setIsActive(e.target.checked)} />
      </div>
    );
  };
  const newDataTableDAta = {
    columns: [
      { Header: "Full Name", accessor: "fullname", width: "20%" },
      { Header: "email", accessor: "email", width: "20%" },
      { Header: "contactNumber", accessor: "contactNumber", width: "15%" },
      { Header: "role", accessor: "role", width: "10%" },
      { Header: "status", accessor: "status", width: "10%" },
      { Header: "IsActive", accessor: "IsActive", width: "15%" },
      { Header: "Action", accessor: "action", width: "10%" },
    ],
    rows: status
      ? [
          {
            fullname: "",
            email: "",
            contactNumber: "",
            role: "",
            status: "",
            IsActive: "",
            action: <ActionMenu />,
          },
        ]
      : table?.map((value, index) => {
          return {
            fullname: value.fullname,
            email: value?.email,
            contactNumber: value?.contactNumber,
            role: <Role value={value.role} id={value._id} />,
            status: <Status value={value.status} id={value._id} />,
            IsActive: <IsActive value={value.IsActive} id={value._id} />,
            action: <ActionMenu index={index} id={value._id} editUser={value} />,
          };
        }),
    // {
    // Artist_name: <Link to="#">Hanny Baniard</Link>,
    //   description: "famous famous artist",
    //   is_verified: "verified",
    //   born_year: "2022",
    //   Status: "Active",
    //   know_for: "very famous",
    //   action: <ActionMenu />,
    // },
  };
  return (
    <DashboardLayout>
      <SoftBox
        display="flex"
        justifyContent="space-between"
        flexDirection="row"
        pt={3}
        pb={0}
        flexWrap="wrap"
        lineHeight={1}
      >
        <SoftTypography variant="h5" fontWeight="medium">
          Users
        </SoftTypography>
        <Link to="/pages/addUser">
          <SoftButton style={{ marginRight: "10px" }} color="info">
            Add Users
          </SoftButton>
        </Link>
      </SoftBox>
      <SoftBox pt={6} pb={3}>
        <Card>
          <DataTable table={newDataTableDAta} canSearch />
        </Card>
      </SoftBox>
      <UserInfoModal
        id={EditUserId}
        open={open}
        handleClose={handleClose}
        showModal={showModal}
        setShowModal={setShowModal}
        userInfo={editUserInfo}
        setUserInfo={setEditUserInfo}
      />
    </DashboardLayout>
  );
}

export default UserList;
