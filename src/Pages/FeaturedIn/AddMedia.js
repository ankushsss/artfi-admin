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
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// AddMedia page components
import UserInfo from "./components/UserInfo";

import validations from "./schemas/validations";
import form from "./schemas/form";
import initialValues from "./schemas/initialValues";

import SoftSnackbar from "components/SoftSnackbar";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { addMediaData } from "redux/mediaAddSlice";

function getSteps() {
  return [""];
}

function getStepContent(stepIndex, formData) {
  switch (stepIndex) {
    case 0:
      return <UserInfo formData={formData} />;
    default:
      return null;
  }
}

function AddMedia() {
  const [activeStep, setActiveStep] = useState(0);
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [alertMessage, setAlertMessage] = useState({
    open: false,
    type: "",
    message: "",
    title: "",
  });
  const [cookie] = useCookies();
  const dispatch = useDispatch();
  const steps = getSteps();
  const { formId, formField } = form;
  const currentValidation = validations[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  const handleBack = () => setActiveStep(activeStep - 1);

  const submitForm = async (values, actions) => {
    try {
      await sleep(1000);
      var form = new FormData();
      form.append("mediatitle", values.title);
      form.append("mediaurl", values.url);
      form.append("image_upload", image);
      const response = await dispatch(addMediaData({ form, token: cookie.artfi_token }));

      if (response.payload.status == 200) {
        setAlertMessage({
          open: true,
          message: `Media Created Successfully`,
          type: "success",
          title: "Success",
        });
      } else {
        if (response.payload.response.status) {
          if (response.payload.response.status == 404) {
            setAlertMessage({
              open: true,
              message: `404 not found`,
              type: "error",
              title: "Error",
            });
          } else {
            setAlertMessage({
              open: true,
              message: `${response.payload.response.data.message}`,
              type: "error",
              title: "Error",
            });
          }
        }
      }

      actions.setSubmitting(false);
      actions.resetForm();

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
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };
  return (
    <DashboardLayout>
      <SoftBox py={3} mb={20}>
        <Grid container justifyContent="center" sx={{ height: "100%" }}>
          <Grid item xs={12} lg={8}>
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
                        {getStepContent(activeStep, {
                          values,
                          touched,
                          formField,
                          errors,
                          role,
                          setRole,
                          setImage,
                        })}
                        <SoftBox mt={2} width="100%" display="flex" justifyContent="space-between">
                          {activeStep === 0 ? (
                            <SoftBox />
                          ) : (
                            <SoftButton variant="gradient" color="light" onClick={handleBack}>
                              back
                            </SoftButton>
                          )}
                          <SoftButton
                            disabled={isSubmitting}
                            type="submit"
                            variant="gradient"
                            color="dark"
                          >
                            {isLastStep ? "Register" : "next"}
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

export default AddMedia;
