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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
// import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfileInfoCard from "./ArtistDetail/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
// import Header from "layouts/pages/profile/components/Header";
import Header from "./ArtistDetail/Header";
import PlatformSettings from "layouts/pages/profile/profile-overview/components/PlatformSettings";

// Data
import profilesListData from "layouts/pages/profile/profile-overview/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { AppBar, Tab, Tabs } from "@mui/material";
import Cube from "examples/Icons/Cube";
import { Settings } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import artistSingleSlice from "redux/artistSingleSlice";
import { fetchSingleArtist } from "redux/artistSingleSlice";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import parse from 'html-react-parser'
import SoftAvatar from "components/SoftAvatar";

function ArtistDetail() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  const [artist, setArtist] = useState({});
  const handleSetTabValue = (event, newValue) => setTabValue(newValue);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [cookie] = useCookies("artfi_token");

  useEffect(() => {
    fetchArtist();
  }, []);

  const fetchArtist = async () => {
    const response = await dispatch(fetchSingleArtist({ token: cookie.artfi_token, id }));
    console.log(response.payload.artist[0]);
    setArtist(response.payload.artist[0]);
  };

  return (
    <DashboardLayout>
      <Header
        name={`${artist.artistFirstName} ${artist.artistLastName}`}
        knows={artist.artistKnownFor}
        verified={artist.artistIsVerified}
        url={artist.artistImage}
      />
      <SoftBox mt={5} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <ProfileInfoCard
              title="Artist information"
              description={artist.artistMetaDescription}
              info={{
                fullName: `${artist.artistFirstName} ${artist.artistLastName}`,
                KnownFor: artist.artistKnownFor,
                Born: `${artist.artistBornDay}-${artist.artistBornMonth}-${artist.artistBornYear} (${artist.artistBornCity})`,
                Died: `${artist.artistDiedDay}-${artist.artistDiedMonth}-${artist.artistDiedYear} (${artist.artistDiedCity})`,
                nationality: artist.artistNationaltiy,
              }}
              social={[
                {
                  link: "https://www.facebook.com/CreativeTim/",
                  icon: <FacebookIcon />,
                  color: "facebook",
                },
                {
                  link: "https://twitter.com/creativetim",
                  icon: <TwitterIcon />,
                  color: "twitter",
                },
                {
                  link: "https://www.instagram.com/creativetimofficial/",
                  icon: <InstagramIcon />,
                  color: "instagram",
                },
              ]}
              action={{ route: "", tooltip: "Edit Profile" }}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <ProfileInfoCard
              title="Bio"
              description={parse(`${artist.artistBiagraphy}`)}
              info={{}}
              action={{ route: "", tooltip: "Edit Bio" }}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Card sx={{ height: "100%" }}>
              <AppBar position="static">
                <Tabs
                  orientation={tabsOrientation}
                  value={tabValue}
                  onChange={handleSetTabValue}
                  sx={{ background: "transparent" }}
                >
                  <Tab label="Highligts" />

                  <Tab label="Archivements" />
                </Tabs>
                <div>
                  <div>
                    {artist.highlight
                      ? artist.highlight.map((img, index) => {
                          return (
                            <div
                              style={{
                                display: "flex",
                                gap: "20px",
                                alignItems: "center",
                                padding:"10px"
                                
                                
                              }}
                              key={index}
                            >
                              <SoftAvatar
                                src={`${process.env.React_App_Base_Url}/${img.highlightsImage}`}
                                alt="profile-image"
                                variant="rounded"
                                size="xl"
                                shadow="sm"
                                // style={{textAlign:"center"}}
                              />
                              <div style={{fontSize:"16px"}}>Slider {index + 1} </div>
                            </div>
                          );
                        })
                      : ""}
                  </div>
                </div>
              </AppBar>
            </Card>
          </Grid>
        </Grid>
      </SoftBox>
    </DashboardLayout>
  );
}

export default ArtistDetail;
