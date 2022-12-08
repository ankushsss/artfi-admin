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

import { useEffect, useState } from "react";

// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";

// Soft UI Dashboard PRO React example components

// AddTeam page components
import UserInfo from "./components/UserInfo";

import validations from "./schemas/validations";
import form from "./schemas/form";
import initialValues from "./schemas/initialValues";

import SoftSnackbar from "components/SoftSnackbar";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { addTeam } from "redux/teamAddSlice";
// import addMintDataSlice from "redux/addMintDataSlice";
import { addMintSliceData } from "redux/addMintDataSlice";
import dayjs from 'dayjs';
import { useParams } from "react-router-dom";
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

function AddMint({ role, setRole, setIsTBA, isTBA, setArtist, Artist }) {
  const [activeStep, setActiveStep] = useState(0);
  const [image, setImage] = useState("");
 const {id}=useParams()
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
  const [isMint, setIsMint] = useState(false)
 const [startDate, setStartDate] = useState(dayjs('2022-04-07'))
 const [endDate, setEndDate] = useState(dayjs('2022-04-07'))


  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  const handleBack = () => setActiveStep(activeStep - 1);
  const submitForm = async (values, actions) => {
    try {
      await sleep(1000);
  console.log(values)
      let mintData = {
        "backgroundVideoLink": values.url,
        "mintautoButton": isMint,
        "startDate":startDate,
        "endate":endDate
      }
      

    
      const response = await dispatch(addMintSliceData({id, mintData, token: cookie.artfi_token }));


        setAlertMessage({
          open: true,
          message: `mint Created Successfully`,
          type: "success",
          title: "Success",
        });
  
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
    console.log(role);
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
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
                          setStartDate,startDate,setEndDate,endDate,isMint,setIsMint
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

export default AddMint;
