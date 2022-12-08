import { useState } from "react";
// formik components
import { Formik, Form } from "formik";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
// Soft UI Dashboard PRO React example components
// NewUser page components
import UserInfo from "./index";
// NewUser layout schemas for form and form feilds
import validations from "../../schemas/validations";
import form from "../../schemas/form";
import initialValues from "../../schemas/initialValues";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { createWhitelist } from "redux/createWhitelistSlice";
import { addDetailsPage } from "redux/addDetailsSlice";
import { useParams } from "react-router-dom";

function AddDetailsForm({}) {
  const dispatch = useDispatch();
  const [cookie] = useCookies();
  const { id } = useParams();
  const [bgCover, setBgCover] = useState("");
  const { data, status } = useSelector((state) => state.offer) || "";
  initialValues.artworkTitle = data?.headerDetails?.Title || "";
  initialValues.fractionalized = data?.whitelistDetails?.FractionNumber || "";
  initialValues.authenticity = data?.whitelistDetails?.authencity || "";
  initialValues.medium = data?.whitelistDetails?.medium || "";
  initialValues.artworkdescription = data?.addDetails?.artWorkDescription || "";
  initialValues.explanationvideo = data?.addDetails?.explanationVideoLink || "";
  // setBgCover(data?.addDetails?.backgroundCoverPhoto);
  initialValues.adUrl = data?.addDetails?.playNowButtonVideoLink || "";
  initialValues.aboutArtist = data?.addDetails?.aboutArtist || "";
  const { formId, formField } = form;
  const currentValidation = validations[2];
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

  const submitForm = async (values, actions) => {
    try {
      await sleep(1000);
      var form = new FormData();
      form.append("image_upload", bgCover);
      form.append("artWorkDescription", values.artworkdescription);
      form.append("explanationVideoLink", values.explanationvideo);
      form.append("playNowButtonVideoLink", values.adUrl);
      form.append("aboutArtist", values.aboutArtist);
      const response = await dispatch(addDetailsPage({ form, token: cookie.artfi_token, id }));
      setAlertMessage({
        open: true,
        message: `Unveling Added Successfully`,
        type: "success",
        title: "Success",
      });

      actions.setSubmitting(false);
      // actions.resetForm();

      setActiveStep(0);
    } catch (err) {
      setAlertMessage({
        open: true,
        message: `${err}`,
        type: "error",
        title: "Error",
      });
    }
  };

  const handleSubmit = (values, actions) => {
    submitForm(values, actions);
    actions.setTouched({});
    actions.setSubmitting(false);
  };

  return (
    <div>
      <SoftBox py={3}>
        <Grid container justifyContent="center" sx={{ height: "100%" }}>
          <Grid item xs={12} lg={12}>
            <Formik
              initialValues={initialValues}
              validationSchema={currentValidation}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, isSubmitting }) => (
                <Form id={formId} autoComplete="off">
                  <Card sx={{ height: "100%" }}>
                    <SoftBox p={2}>
                      <SoftBox>
                        <UserInfo
                          formData={{
                            values,
                            touched,
                            formField,
                            errors,
                          }}
                          setBgCover={setBgCover}
                        />
                        <SoftBox mt={2} width="100%" display="flex" justifyContent="space-between">
                          <div />
                          <SoftButton
                            disabled={isSubmitting}
                            type="submit"
                            variant="gradient"
                            color="dark"
                          >
                            send
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
    </div>
  );
}

export default AddDetailsForm;
