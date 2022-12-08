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
import dayjs from "dayjs";

// AddTeam page components
import UserInfo from "./components/UserInfo";

import validations from "./schemas/validations";
import form from "./schemas/form";
import initialValues from "./schemas/initialValues";

import SoftSnackbar from "components/SoftSnackbar";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { createAnnouncement } from "redux/createAnnouncementSlice";

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

function AddAnnouncement({ id }) {
  const { data, status } = useSelector((state) => state.offer);
  const annoucmentDetails = data.annoucmentDetails;
  const [startDate, setStartDate] = useState(dayjs(annoucmentDetails?.startDate));
  const [endDate, setEndDate] = useState(dayjs(annoucmentDetails?.endDate));
  const [announcementBtnType, setAnnouncementBtnType] = useState("waitlist");
  const [activeStep, setActiveStep] = useState(0);
  const [alertMessage, setAlertMessage] = useState({
    open: false,
    type: "",
    message: "",
    title: "",
  });
  console.log(annoucmentDetails);
  initialValues.backgroundUrl = annoucmentDetails?.backgroundCollabarationVideoLink || "";
  initialValues.announcementUrl = annoucmentDetails?.announcementVideoLink || "";

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
      form.append("backgroundCollabarationVideoLink", values.backgroundUrl);
      form.append("announcementVideoLink", values.announcementUrl);
      form.append("startDate", startDate);
      form.append("endDate", endDate);
      const response = await dispatch(
        createAnnouncement({ form, token: cookie.artfi_token, id, buttonType: announcementBtnType })
      );

      if (response.payload.status == 200) {
        setAlertMessage({
          open: true,
          message: `Announcement Added Successfully`,
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
  // console.log(image, "add team");

  const handleSubmit = (values, actions) => {
    // console.log(role);
    // if (isLastStep) {
    submitForm(values, actions);
    // } else {
    //   setActiveStep(activeStep + 1);
    //   actions.setTouched({});
    //   actions.setSubmitting(false);
    // }
  };

  return (
    <div>
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
                          announcementBtnType,
                          setAnnouncementBtnType,
                          setStartDate,
                          startDate,
                          setEndDate,
                          endDate,
                          annoucmentDetails,
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
    </div>
  );
}

export default AddAnnouncement;
