import { useEffect, useState } from "react";

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
import { useParams } from "react-router-dom";

// UserRole page components
import UserInfo from "./index";

// UserRole layout schemas for form and form feilds
import validations from "layouts/pages/users/new-user2/schemas/validations";
import initialValues from "layouts/pages/users/new-user2/schemas/initialValues";
import SoftSnackbar from "components/SoftSnackbar";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { fetchUserById } from "redux/userGetByIdSlice";

//

function EditUser() {
  const { id } = useParams();
  const [cookie] = useCookies();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await dispatch(fetchUserById({ token: cookie.artfi_token, id }));
    // console.log(response.payload?.data, "edit user");
    setFullname(response.payload?.data?.fullname);
    setContactNumber(response.payload?.data?.contactNumber);
    setEmail(response.payload?.data?.email);
  };

  const [fullname, setFullname] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");

  const [alertMessage, setAlertMessage] = useState({
    open: false,
    type: "",
    message: "",
    title: "",
  });
  const currentValidation = validations[0];

  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });

  const submitForm = async () => {
    try {
      let form = new FormData();
      // form.append("_id", id);
      form.append("email", email);
      form.append("fullname", fullname);
      form.append("contactNumber", contactNumber);

      const response = await dispatch(
        updateUser({
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

      // console.log(data, "data");
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

  const handleSubmit = (values, actions) => {
    submitForm(values, actions);
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
              {({ isSubmitting }) => (
                <Form id="edit-user" autoComplete="off">
                  <Card sx={{ height: "100%" }}>
                    <SoftBox p={2}>
                      <SoftBox>
                        <UserInfo
                          fullname={fullname}
                          setFullname={setFullname}
                          contactNumber={contactNumber}
                          setContactNumber={setContactNumber}
                          email={email}
                          setEmail={setEmail}
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

export default EditUser;
