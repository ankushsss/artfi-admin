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
// import dataTableData from "./TeamList/dataTableData";
// import { fetchArtists } from "redux/artistTableSlice";
// import { fetchUser } from "redux/userGetSlice";
import { fetchMedia } from "redux/mediaGetSlice";
import { editRole } from "redux/userEditRole";
import { Avatar, FormControl, Icon, Menu, MenuItem, Select, Switch } from "@mui/material";
import { useCookies } from "react-cookie";
import SoftInput from "components/SoftInput";
import link from "assets/theme/components/link";
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import MediaInfoModal from "../EditFeaturedIn/ModalMediaInfo";
import axios from "axios";
import { deleteMedia } from "redux/mediaDeleteSlice";

function MediaList() {
  const dispatch = useDispatch();
  const [cookie] = useCookies("artfi_token");

  const [EditMediaId, setEditMediaId] = useState(false);
  const [open, setOpen] = useState(false);

  const [EditMediaInfo, setEditMediaInfo] = useState({
    title: "",
    url: "",
    image: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const deleteMedia = async (id) => {
  //   const response = await axios
  //     .delete(`http://localhost:4200/api/media/updatemediapartner/${id}`)
  //     .catch(err);
  // };

  const deleteMediaFunction = async (id) => {
    const response = await dispatch(deleteMedia({ token: cookie.artfi_token, id }));
  };

  const ActionMenu = ({ id, editMedia }) => {
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
          <MenuItem
            onClick={() => {
              closeUsersActiveMenu();
              setEditMediaInfo({
                title: editMedia.mediatitle,
                url: editMedia.mediaurl,
                image: editMedia.medialogo,
              });
              setEditMediaId(id);
              handleOpen();
            }}
          >
            Edit
          </MenuItem>
          <MenuItem
            onClick={() => {
              closeUsersActiveMenu();
              deleteMediaFunction(id);
            }}
          >
            Delete
          </MenuItem>
        </Menu>
      </SoftBox>
    );
  };

  useEffect(() => {
    dispatch(fetchMedia(cookie.artfi_token));
  }, []);

  const { table, status } = useSelector((state) => state.fetchMedia);
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
  // const Type = ({value,id})=>{
  //   const [type, setType] = useState(value)

  //   useEffect(()=>{
  //     if(type != value)
  //       {
  //         typeEdit()
  //       }
  //   },[type])

  //   const typeEdit = async()=>{

  //   //   const response = await dispatch(editRole({token:cookie.artfi_token,id,data:{status:status}}))
  //   }

  //   return (
  //     <Select input={<SoftInput />} value={type}  onChange={(e)=>setType(e.target.value)}>
  //     <MenuItem value="...">...</MenuItem>
  //     <MenuItem value="coreTeam">Core Team</MenuItem>
  //     <MenuItem value="patrons">Patrons</MenuItem>
  //     <MenuItem value="advisors">Advisors</MenuItem>
  //   </Select>
  // )
  // }
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
      { Header: "Title", accessor: "title", width: "20%" },
      { Header: "Url", accessor: "url", width: "20%" },
      { Header: "Action", accessor: "action", width: "10%" },
    ],
    rows: status
      ? [
          {
            photo: "",
            title: "",
            url: "",
            action: <ActionMenu />,
          },
        ]
      : table?.map((value, index) => {
          return {
            photo: <Avatar src={`${process.env.React_App_Base_Url}/${value.medialogo}`} />,
            title: value.mediatitle,
            url: value?.mediaurl,
            action: <ActionMenu id={value._id} editMedia={value} />,
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
          Media
        </SoftTypography>
        <Link to="/media/addMedia">
          <SoftButton style={{ marginRight: "10px" }} color="info">
            Add Media
          </SoftButton>
        </Link>
      </SoftBox>
      <SoftBox pt={6} pb={3}>
        <Card>
          <DataTable table={newDataTableDAta} canSearch />
        </Card>
      </SoftBox>
      <MediaInfoModal
        id={EditMediaId}
        open={open}
        handleClose={handleClose}
        mediaInfo={EditMediaInfo}
        setMediaInfo={setEditMediaInfo}
      />
    </DashboardLayout>
  );
}

export default MediaList;
