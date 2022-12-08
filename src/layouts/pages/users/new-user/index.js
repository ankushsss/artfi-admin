import "./styles.css";
import { useState } from "react";
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
import UserInfo from "layouts/pages/users/new-user/components/UserInfo";

import validations from "layouts/pages/users/new-user/schemas/validations";
import form from "layouts/pages/users/new-user/schemas/form";
import initialValues from "layouts/pages/users/new-user/schemas/initialValues";
import SoftTypography from "components/SoftTypography";

import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { addArtist } from "redux/artistAddSlice";
import SoftSnackbar from "components/SoftSnackbar";
import { useNavigate } from "react-router-dom";

function NewUser() {
  // const dispatch = useDispatch();
  const [cookie] = useCookies("artfi_token");
  let navigate = useNavigate();

  const [archievementYear, setArchievementYear] = useState("");
  const [archievementDesc, setArchievementDesc] = useState("");
  const [artistImage, setArtistImage] = useState(null);
  const [highlightsImage, setHighlightsImage] = useState([]);
  const [artistArchievements, setArtistArchievements] = useState([]);
  const [artistIsVerified, setArtistIsVerified] = useState(false);
  const [artistIsActive, setArtistIsActive] = useState(false);
  const [editorValue, setEditorValue] = useState("");
  const dispatch = useDispatch();

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

  const { formId, formField } = form;
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
  const submitForm = async (values, actions) => {
    try {
      let form = new FormData();
      form.append("artistFirstName", values.artistFirstName);
      form.append("artistLastName", values.artistLastName);
      form.append("artistMetaTitle", values.artistMetaTitle);
      form.append("artistMetaKeyword", values.artistMetaKeyword);
      form.append("artistDescription", values.artistDescription);
      form.append("artistNationaltiy", values.artistNationaltiy);
      // form.append("artistBiagraphy", values.artistBiagraphy);
      form.append("artistMetaDescription", values.artistMetaDescription);
      form.append("artistKnownFor", values.artistKnownFor);
      form.append("artistartistBornCity", values.artistartistBornCity);
      form.append("artistDeathCity", values.artistDeathCity);
      form.append("artistCustomUrl", values.artistCustomUrl);
      form.append("artistArchievements", JSON.stringify(artistArchievements));
      form.append("artistImage", artistImage);
      // form.append("highlightsImage", JSON.stringify(highlightsImage));
      for (let i = 0; i < highlightsImage.length; i++) {
        form.append("highlightsImage", highlightsImage[i]);
      }
      form.append("artistBornYear", artistBornYear);
      form.append("artistBornMonth", artistBornMonth);
      form.append("artistBornDay", artistBornDay);
      form.append("artistDiedYear", artistDiedYear);
      form.append("artistDiedMonth", artistDiedMonth);
      form.append("artistDiedDay", artistDiedDay);
      form.append("artistBiagraphy", editorValue);
      const response = await dispatch(
        addArtist({
          form,
          token: cookie.artfi_token,
        })
      );
      const data = response.payload.message;
      if (response.payload.message == "Artist Created Successfully") {
        setAlertMessage({
          open: true,
          message: `${data}`,
          type: "success",
          title: "success",
        });
        actions.resetForm();
        navigate("/applications/artists-table");
        setArchievementYear("");
        setArchievementDesc("");
        setArtistArchievements([]);
        setBirthDate({
          year: "",
          month: "",
          day: "",
        });
        setDeathDate({
          year: "",
          month: "",
          day: "",
        });
        setEditorValue("");
      } else {
        setAlertMessage({
          open: true,
          message: `${response.payload.response.data.message}`,
          type: "warning",
          title: "warning",
        });
      }
    } catch (err) {
      console.log(err);
      setAlertMessage({
        open: true,
        message: `${err}`,
        type: "error",
        title: "Error",
      });
    }
    actions.setSubmitting(false);
  };

  const handleSubmit = (values, actions, artistArchievements) => {
    submitForm(values, actions);
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
    const newAchievements = artistArchievements.filter((item, i) => i !== index);
    setArtistArchievements(newAchievements);
  };
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
              {({ values, errors, touched, isSubmitting }) => (
                <Form id={formId} autoComplete="off">
                  <Card style={{ overflow: "unset" }} sx={{ height: "100%" }}>
                    <SoftBox p={2}>
                      <SoftBox>
                        <UserInfo
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
                          formData={{ values, touched, formField, errors }}
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
                              rows={artistArchievements.map((achievement, index) => {
                                return {
                                  Year: achievement.archievementYear
                                    ? achievement.archievementYear
                                    : "",
                                  Description: achievement.archievementDesc
                                    ? achievement.archievementDesc
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
          {/* <Grid mt={3} item xs={12} sm={12}>
            <Card sx={{ height: "100%" }}>
              <SoftBox p={2}>
                <SoftBox>
                  <SoftTypography mb={2} variant="h5" fontWeight="bold">
                    Highlights
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
                          Name
                        </SoftTypography>
                      </SoftBox>
                      <SoftInput
                        type="text"
                        onChange={(e) => setHighlightName(e.target.value)}
                        name={highlightName}
                        value={highlightName}
                        placeholder="add your highlight name"
                      />

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
                          onChange={onChangeAvatarFile}
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
                          src={HighlightImage && URL.createObjectURL(HighlightImage)}
                          alt=""
                        />
                      </label>
                      <SoftButton
                        onClick={handleHighlights}
                        variant="gradient"
                        size="30"
                        style={{ marginTop: "20px" }}
                        color="info"
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
                          { name: "Name", align: "left", width: "30%" },
                          { name: "Image", align: "left" },
                          { name: "", align: "center", width: "5%" },
                        ]}
                        rows={highlights.map((highlight, index) => {
                          return {
                            Name: highlight.name ? highlight.name : "",
                            Image: (
                              <SoftAvatar
                                size="md"
                                style={{ background: "gray" }}
                                src={highlight?.image && URL.createObjectURL(highlight.image)}
                                alt="Avatar"
                              />
                            ),
                            // highlight.image ? highlight.image : "",
                            "": (
                              <SoftBox
                                style={{ cursor: "pointer" }}
                                onClick={() => removeHighlight(index)}
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
          </Grid> */}
        </Grid>
        {/* <SoftBox mt={3} width="100%" display="flex" justifyContent="center">
          <SoftButton type="submit" variant="gradient" color="info">
            submit
          </SoftButton>
        </SoftBox> */}
      </SoftBox>
      <SoftSnackbar
        color={alertMessage.type}
        icon="notifications"
        title={alertMessage.title}
        content={alertMessage.message}
        open={alertMessage.open}
        close={() => {
          setAlertMessage({ ...alertMessage, open: false });
        }}
      />
    </DashboardLayout>
  );
}

export default NewUser;
