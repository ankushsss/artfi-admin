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
import { useState } from "react";
import Card from "@mui/material/Card";
import SoftButton from "components/SoftButton";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { Link } from "react-router-dom";
// Data
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// import { fetchArtists } from "../../../redux/artistTableSlice";
// import dataTableData from "layouts/applications/data-tables/data/dataTableData";
import dataTableData from "./UserList/dataTableData";
// import { fetchArtists } from "redux/artistTableSlice";
// import { fetchUser } from "redux/userGetSlice";
import { fetchTeam } from "redux/teamGetSlice";
import { Avatar, FormControl, Icon, Menu, MenuItem, Select, Switch } from "@mui/material";
import { useCookies } from "react-cookie";
import SoftInput from "components/SoftInput";
import link from "assets/theme/components/link";
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { deleteTeam } from "redux/teamDeleteSlice";
import { filterdTable } from "redux/teamGetSlice";

function TeamList() {
  const dispatch = useDispatch();
  const [cookie] = useCookies("artfi_token");

  // const filterTableLocally = (id) => {
  //   dispatch(filterdTable(id));
  // };
  const deleteTeamFunction = async (id) => {
    const response = await dispatch(deleteTeam({ token: cookie.artfi_token, id }));
  };

  const ActionMenu = ({ id }) => {
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
          <Link to={`/pages/edit-team/${id}`}>
            <MenuItem onClick={closeUsersActiveMenu}>Edit</MenuItem>
          </Link>
          <MenuItem
            onClick={() => {
              closeUsersActiveMenu();
              deleteTeamFunction(id);
              // filterTableLocally(id);
            }}
          >
            Delete
          </MenuItem>
        </Menu>
      </SoftBox>
    );
  };

  useEffect(() => {
    dispatch(fetchTeam(cookie.artfi_token));
  }, []);

  const { table, status } = useSelector((state) => state.fetchTeam);

  //   const Role = ({value,id})=>{
  //     const [role, setRole] = useState(value)
  //     useEffect(()=>{
  //       if(role != value)
  //         {
  //         roleEdit()
  //         }
  //     },[role])

  //     const roleEdit = async()=>{

  //       const response = await dispatch(editRole({token:cookie.artfi_token,id,data:{role:role}}))
  //     }

  //     return (
  //       <Select input={<SoftInput />} value={role}  onChange={async(e)=>{
  //         setRole(e.target.value)

  //       }

  //       }>
  //           <MenuItem value="...">...</MenuItem>
  //           <MenuItem value="superadmin">SuperAdmin</MenuItem>
  //           <MenuItem value="admin">Admin</MenuItem>
  //           <MenuItem value="user">User</MenuItem>
  //     </Select>
  //   )
  //   }
  const Type = ({ value, id }) => {
    const [type, setType] = useState(value);

    useEffect(() => {
      if (type != value) {
        typeEdit();
      }
    }, [type]);

    const typeEdit = async () => {
      //   const response = await dispatch(editRole({token:cookie.artfi_token,id,data:{status:status}}))
    };

    return (
      <Select input={<SoftInput />} value={type} onChange={(e) => setType(e.target.value)}>
        <MenuItem value="...">...</MenuItem>
        <MenuItem value="coreTeam">Core Team</MenuItem>
        <MenuItem value="patrons">Patrons</MenuItem>
        <MenuItem value="advisors">Advisors</MenuItem>
      </Select>
    );
  };
  // const IsActive = ({value,id})=>{
  //   const [isActiveData, setIsActive] = useState(value)

  //   useEffect(()=>{
  //     if(isActiveData != value)
  //       {
  //         isActiveEdit()
  //       }
  //   },[isActiveData])

  //   const isActiveEdit = async()=>{
  //     const active = isActiveData

  //     const response = await dispatch(editRole({token:cookie.artfi_token,id,data:{IsActive:isActiveData}}))
  //   }
  //   return(<div>
  //     <Switch checked={isActiveData}  onChange={(e)=>setIsActive(e.target.checked)}/>
  //     </div>)
  // }
  const newDataTableDAta = {
    columns: [
      { Header: "photo", accessor: "photo", width: "10%" },
      { Header: "Full Name", accessor: "fullName", width: "20%" },
      { Header: "Position", accessor: "position", width: "20%" },
      { Header: "Type", accessor: "type", width: "20%" },
      { Header: "bio", accessor: "bio", width: "15%" },
      { Header: "Social", accessor: "social", width: "10%" },
      { Header: "Action", accessor: "action", width: "10%" },
    ],
    rows: status
      ? [
          {
            photo: "",
            fullName: "",
            position: "",
            type: "",
            bio: "",
            social: "",
            action: <ActionMenu />,
          },
        ]
      : table?.map((value, index) => {
          return {
            photo: <Avatar src={`${process.env.React_App_Base_Url}/${value.photo}`} />,
            fullName: value.fullName,
            position: value?.position,
            type: <Type value={value.type} id={value._id} />,
            bio: value?.bio,
            social: (
              <div>
                <a href={value.linkedinUrl}>
                  <LinkedIn />
                </a>
                <a href={value.instagramUrl}>
                  <Instagram />{" "}
                </a>
                <a href={value.twitterUrl}>
                  <Twitter />
                </a>
              </div>
            ),
            action: <ActionMenu id={value._id} />,
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
          Teams
        </SoftTypography>

        <Link to="/teams/addTeam">
          <SoftButton style={{ marginRight: "10px" }} color="info">
            Add Team Member
          </SoftButton>
        </Link>
      </SoftBox>
      <SoftBox pt={6} pb={3}>
        <Card>
          <DataTable table={newDataTableDAta} canSearch />
        </Card>
      </SoftBox>
    </DashboardLayout>
  );
}

export default TeamList;
