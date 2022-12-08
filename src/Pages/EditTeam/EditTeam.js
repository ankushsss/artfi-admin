import { useEffect, useState } from "react";

// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import * as Yup from "yup";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import { useParams } from "react-router-dom";

// UserRole page components
import UserInfo from "./index";

// UserRole layout schemas for form and form feilds
// import validations from "../TeamMember/schemas/validations";
import initialValues from "../TeamMember/schemas/initialValues";
import SoftSnackbar from "components/SoftSnackbar";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { fetchTeamById } from "redux/teamGetByIdSlice";
import { updateTeam } from "redux/teamUpdateSlice";

//

function EditTeam() {
  const { id } = useParams();
  const [cookie] = useCookies();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTeam();
  }, []);
  // const { singleTeam, status } = useSelector((state) => state);
  // console.log(singleTeam, "singleTeam");
  const fetchTeam = async () => {
    const response = await dispatch(fetchTeamById({ token: cookie.artfi_token, id }));

    // console.log(response.payload.artist);
    setRole(response.payload.artist?.type);
    setFullname(response.payload.artist?.fullName);
    setPosition(response.payload.artist?.position);
    setBio(response.payload.artist?.bio);
    setImage(response.payload.artist?.image_upload);
    setLinkedin(response.payload.artist?.linkedinUrl);
    setInstagram(response.payload.artist?.instagramUrl);
    setTwitter(response.payload.artist?.twitterUrl);
  };

  const [role, setRole] = useState("");
  const [fullname, setFullname] = useState("");
  const [position, setPosition] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [replaceImage, setReplaceImage] = useState("");
  // const initialValues = {
  //     [fullname.name]: "",
  //     [position.name]: "",
  //     [bio.name]: "",
  //     [linkedin.name]: "",
  //     [instagram.name]: "",
  //     [twitter.name]: "",
  //   };

  const validations = Yup.object().shape({
    // [fullname]: Yup.string().required("fullname is required"),
    // [position]: Yup.string().required("position is required"),
    // [bio]: Yup.string().required("bio is required").min(6, "min charcters are 6"),
  });

  const [alertMessage, setAlertMessage] = useState({
    open: false,
    type: "",
    message: "",
    title: "",
  });

  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });

  const submitForm = async () => {
    try {
      await sleep(1000);

      let form = new FormData();
      form.append("_id", id);
      form.append("fullName", fullname);
      form.append("type", role);
      form.append("position", position);
      form.append("bio", bio);
      form.append("image_upload", image);
      form.append("linkedinUrl", linkedin);
      form.append("instagramUrl", instagram);
      form.append("twitterUrl", twitter);

      const response = await dispatch(
        updateTeam({
          form,
          token: cookie.artfi_token,
        })
      );
      // console.log(response);
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
    // actions.setSubmitting(false);
    // actions.resetForm();
  };
  // console.log(image, "edit team");

  const handleSubmit = (actions) => {
    submitForm(actions);
    // actions.setSubmitting(false);
  };

  return (
    <DashboardLayout>
      <SoftBox py={3} mb={20}>
        <Grid container justifyContent="center" sx={{ height: "100%" }}>
          <Grid item xs={12} lg={8}>
            <Formik
              initialValues={initialValues}
              validationSchema={validations}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form id="edit-user" autoComplete="off">
                  <Card sx={{ height: "100%" }}>
                    <SoftBox p={2}>
                      <SoftBox>
                        <UserInfo
                          role={role}
                          replaceImage={replaceImage}
                          setReplaceImage={setReplaceImage}
                          setRole={setRole}
                          fullname={fullname}
                          setFullname={setFullname}
                          position={position}
                          setPosition={setPosition}
                          bio={bio}
                          setBio={setBio}
                          image={image}
                          setImage={setImage}
                          linkedin={linkedin}
                          setLinkedin={setLinkedin}
                          instagram={instagram}
                          setInstagram={setInstagram}
                          twitter={twitter}
                          setTwitter={setTwitter}
                        />
                        <SoftBox mt={2} width="100%" display="flex" justifyContent="space-between">
                          <SoftButton
                            disabled={isSubmitting}
                            type="submit"
                            variant="gradient"
                            color="dark"
                          >
                            Submit
                          </SoftButton>
                        </SoftBox>
                      </SoftBox>
                    </SoftBox>
                  </Card>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
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

export default EditTeam;
