import { AppBar, Tab, Tabs } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useState } from "react";
import AddAnnouncement from "./Announcement/AddAnnouncement";
import AddHeader from "./Header/AddHeader";
import Unvelling from "./UnvellingTab";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import { getOfferById } from "redux/getOfferById";
import { useEffect } from "react";
import HeaderState from "./Header/schemas/initialValues";
import AddMint from "./nft/AddMint";
import UnveilingInitialState from "./UnvellingTab/schemas/initialValues";

const Main = () => {
  const dispatch = useDispatch();
  const [cookie] = useCookies("artfi_token");
  const { id } = useParams();
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  const [isTBA, setIsTBA] = useState(false);
  const [image, setImage] = useState("");
  const [Artist, setArtist] = useState("");
  const [artistId, setArtistId] = useState("");
  const [artWorkName, setArtWorkName] = useState("");

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);
  const [openTab, setOpenTab] = useState({
    header: true,
    announcement: false,
    unvelling: false,
    publicmint: false,
  });

  useEffect(() => {
    fetchOffer();
  }, []);
  // const { data, status } = useSelector((state) => state.offer);
  const fetchOffer = async () => {
    const response = await dispatch(getOfferById({ id, token: cookie.artfi_token }));
    const headerDetails = response?.payload?.data?.headerDetails;
    HeaderState.artWorkName = headerDetails.Title;
    setImage(headerDetails.chooseImageOfArtWork);
    setArtistId(response?.payload?.data.artistId);
    setArtWorkName(headerDetails.Title);
  };
  // console.log(artistId);

  return (
    <DashboardLayout>
      <AppBar position="static">
        <Tabs
          orientation={tabsOrientation}
          value={tabValue}
          onChange={handleSetTabValue}
          sx={{ background: "transparent" }}
        >
          <Tab label="Header" onClick={() => setOpenTab({ header: true })} />
          <Tab label="New Announcement" onClick={() => setOpenTab({ announcement: true })} />
          <Tab label="Unvelling" onClick={() => setOpenTab({ unvelling: true })} />
          <Tab label="Public Mint" onClick={() => setOpenTab({ publicmint: true })} />
        </Tabs>
      </AppBar>
      {openTab.header ? <AddHeader artistId={artistId} setArtistId={setArtistId} /> : ""}
      {openTab.announcement ? <AddAnnouncement id={id} /> : ""}
      {/* {openTab.unvelling ? (
        <Unvelling
          // data={data}
          fetchedOffer={fetchedOffer}
          artWorkName={artWorkName}
          artistId={artistId}
          Artist={Artist}
          id={id}
        />
      ) : (
        ""
      )} */}
      {openTab.unvelling ? <Unvelling /> : ""}
      {openTab.publicmint ? <AddMint /> : ""}
    </DashboardLayout>
  );
};

export default Main;
