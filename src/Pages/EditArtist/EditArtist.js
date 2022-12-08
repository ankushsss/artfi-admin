import { useEffect, useState } from "react";
import Table from "examples/Tables/Table";
// formik components
import { Formik, Form } from "formik";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import SoftInput from "components/SoftInput";
import Basket from "examples/Icons/Basket";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// NewUser page components
import UserInfo from "./index";
import validations from "layouts/pages/users/new-user/schemas/validations";
import initialValues from "layouts/pages/users/new-user/schemas/initialValues";
import SoftTypography from "components/SoftTypography";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { updateArtist } from "redux/artistUpdateSlice";
import SoftSnackbar from "components/SoftSnackbar";
import { useParams } from "react-router-dom";
import SoftAvatar from "components/SoftAvatar";
import { fetchSingleArtist } from "redux/artistSingleSlice";

function EditArtist() {
  const [cookie] = useCookies("artfi_token");
  // const [artist, setArtist] = useState({});
  const dispatch = useDispatch();
  let artist = {};
  const { id } = useParams();
  // const { table } = useSelector((state) => state.artists);

  useEffect(() => {
    fetchArtist();
    // dispatch(fetchSingleArtist({ token: cookie.artfi_token, id }));
  }, []);

  // const { data, status } = useSelector((state) => state.singleArtist);

  const fetchArtist = async () => {
    const response = await dispatch(fetchSingleArtist({ token: cookie.artfi_token, id }));
    setArtistFirstName(response.payload.artist[0].artistFirstName);
    setArtistLastName(response.payload.artist[0]?.artistLastName);
    setArtistMetaTitle(response.payload.artist[0]?.artistMetaTitle);
    setArtistMetaKeyword(response.payload.artist[0]?.artistMetaKeyword);
    setArtistDescription(response.payload.artist[0]?.artistDescription);
    setArtistMetaDescription(response.payload.artist[0]?.artistMetaDescription);
    setArtistKnownFor(response.payload.artist[0]?.artistKnownFor);
    setArtistNationaltiy(response.payload.artist[0]?.artistNationaltiy);
    setArtistBornCity(response.payload.artist[0]?.artistBornCity);
    setArtistDeathCity(response.payload.artist[0]?.artistDeathCity);
    setArtistCustomUrl(response.payload.artist[0]?.artistCustomUrl);
    setArtistArchievements(
      response.payload.artist[0]?.achievements ? response.payload.artist[0]?.achievements : []
    );
    setArtistIsVerified(response.payload.artist[0]?.artistIsVerified);
    setArtistIsActive(response.payload.artist[0]?.artistIsActive);
    setEditorValue(`${response.payload.artist[0]?.artistBiagraphy}`);
    setArtistImage(response.payload.artist[0]?.artistImage);
    setIncomingHighlights(response.payload.artist[0]?.highlight);
    setMergeHighlights(response.payload.artist[0]?.highlight);

    setBirthDate({
      year: response.payload.artist[0]?.artistBornYear,
      month: response.payload.artist[0]?.artistBornMonth,
      day: response.payload.artist[0]?.artistBornDay,
    });

    setDeathDate({
      year: response.payload.artist[0]?.artistDiedYear,
      month: response.payload.artist[0]?.artistDiedMonth,
      day: response.payload.artist[0]?.artistDiedDay,
    });
  };

  const [artistFirstName, setArtistFirstName] = useState("");
  const [artistLastName, setArtistLastName] = useState("");
  const [artistMetaTitle, setArtistMetaTitle] = useState("");
  const [artistMetaKeyword, setArtistMetaKeyword] = useState("");
  const [artistDescription, setArtistDescription] = useState("");
  const [artistMetaDescription, setArtistMetaDescription] = useState("");
  const [artistKnownFor, setArtistKnownFor] = useState("");
  const [artistNationaltiy, setArtistNationaltiy] = useState("");
  const [artistBornCity, setArtistBornCity] = useState("");
  const [artistDeathCity, setArtistDeathCity] = useState("");
  const [artistCustomUrl, setArtistCustomUrl] = useState("");
  const [archievementYear, setArchievementYear] = useState("");
  const [archievementDesc, setArchievementDesc] = useState("");
  const [artistImage, setArtistImage] = useState(null);
  const [localArtistImage, setLocalArtistImage] = useState(null);
  const [highlightsImage, setHighlightsImage] = useState([]);
  const [incomingHighlights, setIncomingHighlights] = useState([]);
  const [mergeHighlights, setMergeHighlights] = useState([]);
  const [newHighlights, setNewHighlights] = useState([]);
  const [artistArchievements, setArtistArchievements] = useState([]);
  const [artistIsVerified, setArtistIsVerified] = useState("");
  const [artistIsActive, setArtistIsActive] = useState("");
  const [editorValue, setEditorValue] = useState("");

  const [birthDate, setBirthDate] = useState({
    year: "",
    month: "",
    day: "",
  });

  const [deathDate, setDeathDate] = useState({
    year: "",
    month: "",
    day: "",
  });

  const [alertMessage, setAlertMessage] = useState({
    open: false,
    type: "",
    message: "",
    title: "",
  });

  const [Image, setImage] = useState(null);

  const currentValidation = validations[0];

  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  const artistBornYear = birthDate.year;
  const artistBornMonth = birthDate.month;
  const artistBornDay = birthDate.day;
  const artistDiedYear = deathDate.year;
  const artistDiedMonth = deathDate.month;
  const artistDiedDay = deathDate.day;
  const submitForm = async (actions) => {
    try {
      let form = new FormData();
      form.append("artistId", id);
      form.append("artistFirstName", artistFirstName);
      form.append("artistLastName", artistLastName);
      form.append("artistMetaTitle", artistMetaTitle);
      form.append("artistMetaKeyword", artistMetaKeyword);
      form.append("artistDescription", artistDescription);
      form.append("artistMetaDescription", artistMetaDescription);
      form.append("artistNationaltiy", artistNationaltiy);
      form.append("artistKnownFor", artistKnownFor);
      form.append("artistBornCity", artistBornCity);
      form.append("artistDeathCity", artistDeathCity);
      form.append("artistCustomUrl", artistCustomUrl);
      form.append(
        "artistArchievements",
        artistArchievements.length >= 1 ? JSON.stringify(artistArchievements) : ""
      );
      form.append("artistImage", artistImage);
      for (let i = 0; i < newHighlights.length; i++) {
        form.append("highlightsImage", newHighlights[i]);
      }
      form.append("oldHighlightsImage", JSON.stringify(incomingHighlights));
      form.append("artistBornYear", artistBornYear);
      form.append("artistBornMonth", artistBornMonth);
      form.append("artistBornDay", artistBornDay);
      form.append("artistDiedYear", artistDiedYear);
      form.append("artistDiedMonth", artistDiedMonth);
      form.append("artistDiedDay", artistDiedDay);
      form.append("artistBiagraphy", editorValue);

      const response = await dispatch(
        updateArtist({
          form,
          token: cookie.artfi_token,
        })
      );

      const data = response.payload;
      setAlertMessage({
        open: true,
        message: "success",
        type: "success",
        title: "success",
      });
    } catch (err) {
      console.log(err);
      setAlertMessage({
        open: true,
        message: `${err}`,
        type: "error",
        title: "Error",
      });
    }
  };

  const handleSubmit = (values, actions, artistArchievements) => {
    submitForm(values, actions);
    setArtistArchievements([]);
    setArchievementYear("");
    setArchievementDesc("");
  };

  const handleAchievements = () => {
    setArtistArchievements([
      ...artistArchievements,
      {
        archievementYear: archievementYear,
        archievementDesc: archievementDesc,
      },
    ]);
    setArchievementYear("");
    setArchievementDesc("");
  };

  const removeAchievement = (index) => {
    setArtistArchievements(
      artistArchievements.filter((item, i) => {
        return index != i;
      })
    );
  };

  const onChangeHighlightImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleHighlights = () => {
    setMergeHighlights([...mergeHighlights, Image]);
    setNewHighlights([...newHighlights, Image]);

    setImage(null);
  };

  const removeHighlight = (highlight, index) => {
    if (highlight._id) {
      setMergeHighlights(
        mergeHighlights.filter((item, i) => {
          return highlight._id != item._id;
        })
      );
      const mergedArray = incomingHighlights.filter((item, i) => {
        return highlight._id != item._id;
      });

      setIncomingHighlights(mergedArray);
    } else if (!highlight._id) {
      setMergeHighlights(
        mergeHighlights.filter((item, i) => {
          return highlight.name != item.name;
        })
      );
      setNewHighlights(
        newHighlights.filter((item, i) => {
          return highlight.name != item.name;
        })
      );
    }
  };

  // console.log(incomingHighlights, "incomingHighlights");
  // console.log(newHighlights, "newHighlights");

  return (
    <DashboardLayout>
      <SoftBox py={3} mb={20}>
        <Grid container justifyContent="flex-start" sx={{ height: "100%" }}>
          <Grid item xs={12} lg={12}>
            <Formik
              initialValues={initialValues}
              validationSchema={currentValidation}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form id="edit-artist" autoComplete="off">
                  <Card style={{ overflow: "unset" }} sx={{ height: "100%" }}>
                    <SoftBox p={2}>
                      <SoftBox>
                        <UserInfo
                          artistFirstName={artistFirstName}
                          setArtistFirstName={setArtistFirstName}
                          artistLastName={artistLastName}
                          setArtistLastName={setArtistLastName}
                          artistMetaTitle={artistMetaTitle}
                          setArtistMetaTitle={setArtistMetaTitle}
                          artistMetaKeyword={artistMetaKeyword}
                          setArtistMetaKeyword={setArtistMetaKeyword}
                          artistDescription={artistDescription}
                          artistNationaltiy={artistNationaltiy}
                          setArtistNationaltiy={setArtistNationaltiy}
                          setArtistDescription={setArtistDescription}
                          artistKnownFor={artistKnownFor}
                          setArtistKnownFor={setArtistKnownFor}
                          artistMetaDescription={artistMetaDescription}
                          setArtistMetaDescription={setArtistMetaDescription}
                          artistBornCity={artistBornCity}
                          setArtistBornCity={setArtistBornCity}
                          artistDeathCity={artistDeathCity}
                          setArtistDeathCity={setArtistDeathCity}
                          artistCustomUrl={artistCustomUrl}
                          setArtistCustomUrl={setArtistCustomUrl}
                          setEditorValue={setEditorValue}
                          editorValue={editorValue}
                          highlightsImage={highlightsImage}
                          setHighlightsImage={setHighlightsImage}
                          artistIsVerified={artistIsVerified}
                          setArtistIsVerified={setArtistIsVerified}
                          setArtistIsActive={setArtistIsActive}
                          artistIsActive={artistIsActive}
                          deathDate={deathDate}
                          setDeathDate={setDeathDate}
                          birthDate={birthDate}
                          setBirthDate={setBirthDate}
                          setArtistImage={setArtistImage}
                          artistImage={artistImage}
                          setLocalArtistImage={setLocalArtistImage}
                          localArtistImage={localArtistImage}
                          // mergeHighlights={mergeHighlights}
                          // setmergeHighlights={setmergeHighlights}
                        />
                      </SoftBox>
                    </SoftBox>
                  </Card>
                  <br />
                  <Card sx={{ height: "100%" }}>
                    <SoftBox p={2}>
                      <SoftBox>
                        <SoftTypography mb={2} variant="h5" fontWeight="bold">
                          Achievments
                        </SoftTypography>
                        <Grid container spacing={6}>
                          <Grid item xs={12} sm={6}>
                            <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                              <SoftTypography
                                component="label"
                                variant="caption"
                                fontWeight="bold"
                                textTransform="capitalize"
                              >
                                Achievement Year
                              </SoftTypography>
                            </SoftBox>
                            <SoftInput
                              type="number"
                              onChange={(e) => setArchievementYear(e.target.value)}
                              name={archievementYear}
                              value={archievementYear}
                              placeholder="add your achievement year"
                            />
                            <SoftBox mb={1} mt={3} ml={0.5} lineHeight={0} display="inline-block">
                              <SoftTypography
                                component="label"
                                variant="caption"
                                fontWeight="bold"
                                textTransform="capitalize"
                              >
                                Achievement Description
                              </SoftTypography>
                            </SoftBox>

                            <SoftInput
                              type="text"
                              onChange={(e) => setArchievementDesc(e.target.value)}
                              name={archievementDesc}
                              value={archievementDesc}
                              placeholder="add your achievement description"
                              multiline
                              rows={5}
                            />
                            <SoftButton
                              onClick={handleAchievements}
                              variant="gradient"
                              style={{ marginTop: "20px" }}
                              color="info"
                            >
                              Add Achievement
                            </SoftButton>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <SoftBox mb={1} mt={3} ml={0.5} lineHeight={0} display="inline-block">
                              <SoftTypography
                                component="label"
                                variant="caption"
                                fontWeight="bold"
                                textTransform="capitalize"
                              >
                                Achievements table
                              </SoftTypography>
                            </SoftBox>
                            <Table
                              columns={[
                                { name: "Year", align: "center", width: "10%" },
                                { name: "Description", align: "center" },
                                { name: "", align: "center", width: "5%" },
                              ]}
                              rows={artistArchievements?.map((achievement, index) => {
                                return {
                                  Year: achievement?.archievementYear
                                    ? achievement?.archievementYear
                                    : "",
                                  Description: achievement?.archievementDesc
                                    ? achievement?.archievementDesc
                                    : "",
                                  "": (
                                    <SoftBox
                                      style={{ cursor: "pointer" }}
                                      onClick={() => removeAchievement(index)}
                                      display="inline-block"
                                    >
                                      <Basket color="error" size="14px" />
                                    </SoftBox>
                                  ),
                                };
                              })}
                            />
                          </Grid>
                        </Grid>
                      </SoftBox>
                    </SoftBox>
                  </Card>
                  <br />
                  {/* <Grid mt={3} item xs={12} sm={12}> */}
                  <Card sx={{ height: "100%" }}>
                    <SoftBox p={2}>
                      <SoftBox>
                        <SoftTypography mb={2} variant="h5" fontWeight="bold">
                          Highlights
                        </SoftTypography>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <SoftBox mb={1} mt={3} ml={0.5} lineHeight={0} display="inline-block">
                              <SoftTypography
                                component="label"
                                variant="caption"
                                fontWeight="bold"
                                textTransform="capitalize"
                              >
                                Image
                              </SoftTypography>
                            </SoftBox>
                            <label
                              style={{
                                border: "1px solid black",
                                borderRadius: ".5rem",
                                cursor: "pointer",
                                width: "150px",
                                height: "150px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                              }}
                              className="avatar-box"
                            >
                              <input
                                type="file"
                                id="avatar_file"
                                name="avatar_file"
                                style={{ display: "none" }}
                                accept=".jpg,.png,.jpeg"
                                onChange={onChangeHighlightImage}
                                alt=""
                              />

                              <img
                                style={{
                                  display: "flex",
                                  alignContent: "center",
                                  borderRadius: ".5rem",
                                  width: "99%",
                                  height: "99%",
                                }}
                                src={Image && URL.createObjectURL(Image)}
                                alt=""
                              />
                            </label>
                            <SoftButton
                              onClick={handleHighlights}
                              variant="gradient"
                              size="30"
                              style={{ marginTop: "20px" }}
                              color="info"
                              disabled={Image ? false : true}
                            >
                              Add Highlight
                            </SoftButton>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <SoftBox mb={1} mt={3} ml={0.5} lineHeight={0} display="inline-block">
                              <SoftTypography
                                component="label"
                                variant="caption"
                                fontWeight="bold"
                                textTransform="capitalize"
                              >
                                Highlights table
                              </SoftTypography>
                            </SoftBox>
                            <Table
                              columns={[
                                { name: "Image", align: "left" },
                                { name: "", align: "center", width: "5%" },
                              ]}
                              rows={mergeHighlights?.map((highlight, index) => {
                                return {
                                  Image: (
                                    <SoftAvatar
                                      size="md"
                                      style={{
                                        background: "gray",
                                        width: "90px",
                                        height: "90px",
                                        borderRadius: ".5rem",
                                      }}
                                      src={
                                        highlight._id
                                          ? `${process.env.React_App_Base_Url}/${highlight.highlightsImage}`
                                          : URL.createObjectURL(highlight)
                                      }
                                      alt="Avatar"
                                    />
                                  ),

                                  "": (
                                    <SoftBox
                                      style={{ cursor: "pointer" }}
                                      onClick={() => removeHighlight(highlight, index)}
                                      display="inline-block"
                                    >
                                      <Basket color="error" size="18px" />
                                    </SoftBox>
                                  ),
                                };
                              })}
                            />
                          </Grid>
                        </Grid>
                      </SoftBox>
                    </SoftBox>
                  </Card>
                  {/* </Grid> */}
                  <SoftBox mt={3} width="100%" display="flex" justifyContent="center">
                    <SoftButton
                      color="info"
                      disabled={isSubmitting}
                      type="submit"
                      variant="gradient"
                    >
                      submit
                    </SoftButton>
                  </SoftBox>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </SoftBox>
      <SoftSnackbar
        color={alertMessage.type}
        icon="notifications"
        title={alertMessage.title}
        content={alertMessage.message}
        open={alertMessage.open}
        close={() => setAlertMessage({ ...alertMessage, open: false })}
      />
    </DashboardLayout>
  );
}

export default EditArtist;
