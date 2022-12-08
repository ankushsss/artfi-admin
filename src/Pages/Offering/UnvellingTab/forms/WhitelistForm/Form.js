import { useState } from "react";
// formik components
import { Formik, Form } from "formik";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";

import UserInfo from "./index";
// NewUser layout schemas for form and form feilds
import validations from "../../schemas/validations";
import form from "../../schemas/form";
import initialValues from "../../schemas/initialValues";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { createWhitelist } from "redux/createWhitelistSlice";
import { useParams } from "react-router-dom";

function WhitelistForm({}) {
  const [factSheet, setFactSheet] = useState("");
  const { id } = useParams();
  const { data, status } = useSelector((state) => state.offer);
  initialValues.artworkTitle = data?.headerDetails?.Title || "";
  initialValues.fractionalized = data?.whitelistDetails?.FractionNumber || "";
  initialValues.authenticity = data?.whitelistDetails?.authencity || "";
  initialValues.medium = data?.whitelistDetails?.medium || "";
  initialValues.size = data?.whitelistDetails?.originalSize || "";
  initialValues.price = data?.whitelistDetails?.price || "";
  initialValues.provenance = data?.whitelistDetails?.provenence || "";
  initialValues.signature = data?.whitelistDetails?.signature || "";
  initialValues.year = data?.whitelistDetails?.year || "";
  initialValues.description = data?.whitelistDetails?.description || "";

  const startDate = data?.unveilingDetails?.startDate;
  const endDate = data?.unveilingDetails?.endDate;
  const artistId = data?.headerDetails?.artistId || "";

  const dispatch = useDispatch();
  const [cookie] = useCookies();
  const [artWorkImage, setArtWorkImage] = useState("");
  const { formId, formField } = form;
  const currentValidation = validations[1];
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
      form.append("Title", values.artworkTitle);
      form.append("artistId", artistId);
      form.append("startDate", startDate);
      form.append("endDate", endDate);
      form.append("authencity", values.authenticity);
      form.append("description", values.description);
      form.append("originalSize", values.size);
      form.append("medium", values.medium);
      form.append("year", values.year);
      form.append("provenence", values.provenance);
      form.append("signature", values.signature);
      form.append("FractionNumber", values.fractionalized);
      form.append("imageOfArtWork", artWorkImage);
      // form.append("image_upload", artWorkImage);
      form.append("factSheet", factSheet);
      const response = await dispatch(createWhitelist({ form, token: cookie.artfi_token, id }));

      setAlertMessage({
        open: true,
        message: `Unveling Added Successfully`,
        type: "success",
        title: "Success",
      });

      actions.setSubmitting(false);
      // actions.resetForm();
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
                          setFactSheet={setFactSheet}
                          setArtWorkImage={setArtWorkImage}
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

export default WhitelistForm;
