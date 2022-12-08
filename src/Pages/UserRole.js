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
import Footer from "examples/Footer";

// UserRole page components
import UserInfo from "layouts/pages/users/new-user2/components/UserInfo";

// UserRole layout schemas for form and form feilds
import validations from "layouts/pages/users/new-user2/schemas/validations";
import form from "layouts/pages/users/new-user2/schemas/form";
import initialValues from "layouts/pages/users/new-user2/schemas/initialValues";
import SoftSnackbar from "components/SoftSnackbar";
import { useDispatch } from "react-redux";
import { registerUser } from "redux/userRoleSlice";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

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

function UserRole() {
  let navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
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
    await sleep(1000);

    values = { ...values, status };

    dispatch(registerUser({ values, token: cookie.artfi_token, role }))
      .then((res) => {
        setAlertMessage({
          open: true,
          message: `User Created Successfully`,
          type: "success",
          title: "Success",
        });
        navigate("/pages/userlist");
      })
      .catch((err) => {
        setAlertMessage({
          open: true,
          message: `${error}`,
          type: "error",
          title: "Error",
        });
      });

    actions.setSubmitting(false);
    actions.resetForm();
    setActiveStep(0);
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
  // console.log("user bug");

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
                          status,
                          setStatus,
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

export default UserRole;
