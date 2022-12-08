// @mui material components
import Card from "@mui/material/Card";
import SoftButton from "components/SoftButton";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import SoftTypography from "components/SoftTypography";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DataTable from "examples/Tables/DataTable";
import { FormControl, Select, Switch } from "@mui/material";
import SoftInput from "components/SoftInput";
import Footer from "examples/Footer";
import { Link } from "react-router-dom";
// Data
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchArtists } from "../../../redux/artistTableSlice";
import dataTableData from "layouts/applications/data-tables/data/dataTableData";
import { deleteArtist } from "redux/artistDeleteSlice";
import { useCookies } from "react-cookie";

function DataTables() {
  const dispatch = useDispatch();

  const [cookie] = useCookies("artfi_token");

  const Status = ({ value, id }) => {
    const [status, setStatus] = useState(value);

    useEffect(() => {
      if (status != value) {
        statusEdit();
      }
    }, [status]);

    const statusEdit = async () => {
      const response = await dispatch(deleteArtist({ token: cookie.artfi_token, id }));
      // console.log(response);
    };

    return (
      <Select input={<SoftInput />} value={status} onChange={(e) => setStatus(e.target.value)}>
        <MenuItem value={true}>Active</MenuItem>
        <MenuItem value={false}>Inactive</MenuItem>
      </Select>
    );
  };
  const IsActive = ({ value, id }) => {
    const [isActiveData, setIsActive] = useState(value);

    useEffect(() => {
      if (isActiveData != value) {
      }
    }, [isActiveData]);

    // const isActiveEdit = async () => {
    //   const active = isActiveData;

    //   // const response = await dispatch(
    //   //   editRole({ token: cookie.artfi_token, id, data: { IsActive: isActiveData } })
    //   // );
    //   console.log(response);
    // };
    return (
      <div>
        <Switch checked={isActiveData} onChange={(e) => setIsActive(e.target.checked)} />
      </div>
    );
  };
  // const deleteArtistFunction = async (id) => {
  //   const response = await dispatch(deleteArtist({ token: cookie.artfi_token, id }));
  //   console.log(response);
  // };

  const ActionMenu = ({ id }) => {
    const [usersActiveMenu, setUsersActiveMenu] = useState(null);
    const openUsersActiveMenu = (event) => setUsersActiveMenu(event.currentTarget);
    const closeUsersActiveMenu = () => setUsersActiveMenu(null);
    // console.log(id);
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
          <Link to={`/applications/edit-artist/${id}`}>
            <MenuItem onClick={closeUsersActiveMenu}>Edit</MenuItem>
          </Link>
        </Menu>
      </SoftBox>
    );
  };

  useEffect(() => {
    dispatch(fetchArtists(cookie.artfi_token));
  }, []);

  const { table, status } = useSelector((state) => state.artists);
  console.log(table, "asdasdasd");

  const newDataTableDAta = {
    columns: [
      { Header: "Artist name", accessor: "Artist_name", width: "20%" },
      { Header: "Description", accessor: "description", width: "20%" },
      { Header: "Born Year", accessor: "born_year", width: "15%" },
      { Header: "Status", accessor: "Status", width: "10%" },
      { Header: "Verified", accessor: "is_verified", width: "10%" },
      { Header: "Known For", accessor: "know_for", width: "15%" },
      { Header: "Action", accessor: "action", width: "10%" },
    ],
    rows: status
      ? [
          {
            description: "",
            is_verified: "",
            born_year: "",
            Status: "",
            know_for: "",
            action: <ActionMenu id={null} />,
          },
        ]
      : table?.map((artist, index) => {
          return {
            Artist_name: (
              <Link to={`/dashboards/artist/${artist._id}`}>
                {artist?.artistFirstName + " " + artist?.artistLastName}
              </Link>
            ),
            description: artist?.artistDescription,
            born_year: artist?.artistBornYear,
            Status: <Status value={artist.artistIsActive} id={artist._id} />,
            is_verified: <IsActive value={artist.artistIsActive} id={artist._id} />,
            know_for: artist?.artistKnownFor,
            action: <ActionMenu id={artist._id} />,
          };
        }),
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
          Artists
        </SoftTypography>

        <Link to="/applications/add-artist">
          <SoftButton style={{ marginRight: "10px" }} color="info">
            Add Artist
          </SoftButton>
        </Link>
      </SoftBox>
      <SoftBox pt={6} pb={3}>
        <Card>
          <DataTable
            table={newDataTableDAta}
            // table={dataTableData}
            canSearch
          />
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DataTables;
