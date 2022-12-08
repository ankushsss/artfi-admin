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

import UserInfo from "./index";
import { updateMedia } from "redux/mediaUpdateSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  margin: "0 auto",
};

export default function MediaInfoModal({ handleClose, open, mediaInfo, setMediaInfo, id }) {
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
      await sleep(1000);
      let form = new FormData();
      form.append("mediatitle", mediaInfo.title);
      form.append("mediaurl", mediaInfo.url);
      form.append("image_upload", mediaInfo.image);

      const response = await dispatch(updateMedia({ form, token: cookie.artfi_token, id }));

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
  };

  const handleSubmit = () => {
    submitForm();

    // setMediaInfo({
    //   title: "",
    //   url: "",
    //   image: "",
    // });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          setMediaInfo({
            title: "",
            url: "",
            image: "",
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
                            <UserInfo userInfo={mediaInfo} setUserInfo={setMediaInfo} />
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
