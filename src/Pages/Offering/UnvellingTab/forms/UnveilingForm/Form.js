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
import { createUnveiling } from "redux/createUnveilingSlice";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

function UnvellingForm({ CTA, setCTA }) {
  const dispatch = useDispatch();
  const [cookie] = useCookies();
  const { id } = useParams();

  const [startDate, setStartDate] = useState(dayjs("2022-01-01"));
  const [endDate, setEndDate] = useState(dayjs("2022-04-07"));
  const { formId, formField } = form;
  const currentValidation = validations[0];
  const [alertMessage, setAlertMessage] = useState({
    open: false,
    type: "",
    message: "",
    title: "",
  });
  const { data, status } = useSelector((state) => state.offer);
  initialValues.bgVideo = data?.unveilingDetails?.unvielingBackgroundVideoLink || "";
  initialValues.uvVideo = data?.unveilingDetails?.announcementVideoLink || "";
  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  const submitForm = async (values, actions) => {
    try {
      await sleep(1000);
      var form = new FormData();
      form.append("unvielingBackgroundVideoLink", values.bgVideo);
      form.append("announcementVideoLink", values.uvVideo);
      form.append("startDate", startDate);
      form.append("endDate", endDate);

      const response = await dispatch(
        createUnveiling({ form, token: cookie.artfi_token, id, buttonType: CTA })
      );

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
                          setStartDate={setStartDate}
                          startDate={startDate}
                          setEndDate={setEndDate}
                          endDate={endDate}
                          setCTA={setCTA}
                          CTA={CTA}
                          formData={{
                            values,
                            touched,
                            formField,
                            errors,
                          }}
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

export default UnvellingForm;
