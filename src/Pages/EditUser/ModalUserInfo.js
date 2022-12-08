import * as React from "react";

import Modal from "@mui/material/Modal";
import { Formik, Form } from "formik";
import SoftButton from "components/SoftButton";
import validations from "layouts/pages/users/new-user2/schemas/validations";
import initialValues from "layouts/pages/users/new-user2/schemas/initialValues";
import SoftSnackbar from "components/SoftSnackbar";
// import { updateUser } from "redux/userUpdateSlice";
// import userEditRole from "redux/userEditRole";
import { editRole } from "redux/userEditRole";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import SoftBox from "components/SoftBox";

import { useParams } from "react-router-dom";
import UserInfo from ".";

const style = {
  //   height: "400px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  margin: "0 auto",
  //   border: "2px solid #000",
  //   boxShadow: 24,
  //   p: 4,
};

export default function UserInfoModal({
  showModal,
  setShowModal,
  handleClose,
  open,
  //   closeUsersActiveMenu,
  userInfo,
  setUserInfo,
  id,
}) {
  //   const { id } = useParams();
  // console.log(userInfo.id);
  const [cookie] = useCookies();
  const dispatch = useDispatch();

  const [alertMessage, setAlertMessage] = React.useState({
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
      let editUserInformation = {
        email: userInfo.email,
        fullname: userInfo.fullname,
        contactNumber: userInfo.contactNumber,
      };
      const response = await dispatch(
        editRole({
          id: id,
          data: editUserInformation,
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

    setUserInfo({
      fullname: "",
      email: "",
      contactNumber: "",
    });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          setUserInfo({
            email: "",
            fullname: "",
            contactNumber: "",
          });
        }}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <>
          <SoftBox style={style}>
            <Grid item justifyContent="center" sx={{ height: "fint-content" }}>
              <Grid item xs={6} lg={2}>
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
                            <UserInfo userInfo={userInfo} setUserInfo={setUserInfo} />
                            <SoftBox
                              mt={2}
                              width="100%"
                              display="flex"
                              justifyContent="space-between"
                            >
                              <SoftButton
                                disabled={isSubmitting}
                                type="submit"
                                variant="gradient"
                                color="dark"
                                onClick={() => setShowModal(true)}
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
          <SoftSnackbar
            color={alertMessage.type}
            // style={{ position: "absolute", bottom: "0", right: "0", zIndex: "1000" }}
            icon="notifications"
            title={alertMessage.title}
            content={alertMessage.message}
            open={alertMessage.open}
            close={() => {
              setAlertMessage({ ...alertMessage, open: false });
            }}
          />
        </>
      </Modal>
    </div>
  );
}
