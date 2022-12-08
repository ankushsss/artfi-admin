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

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import { useState } from "react";
// Settings page components
import FormField from "layouts/pages/account/components/FormField";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import axios from "axios";
import SoftSnackbar from "components/SoftSnackbar";
import { useCookies } from "react-cookie";
import header from "../config/header";
import api from "../config/api";

function ChangePassword() {
  const passwordRequirements = [
    "One special characters",
    "Min 6 characters",
    "One number (2 are recommended)",
    "Change it often",
  ];
  const [changeUserPassword, setUserPassword] = useState({
    currentPassword: "",
    newPassword: "",
    compairPassword: "",
  });
  const [alertMessage, setAlertMessage] = useState({
    open: false,
    type: "",
    message: "",
    title: "",
  });
  const [cookie] = useCookies("artfi_token");
  const updatePassword = () => {
    axios
      .post(api().changePassword, changeUserPassword, {
        headers: header(cookie.artfi_token).headerForJson,
      })
      .then((response) => {
        setAlertMessage({
          open: true,
          message: "Password Updated",
          type: "success",
          title: "Success",
        });
      })
      .catch((error) => {
        setAlertMessage({
          open: true,
          message: `${error}`,
          type: "error",
          title: "Error",
        });
      });
  };

  const renderPasswordRequirements = passwordRequirements.map((item, key) => {
    const itemKey = `element-${key}`;

    return (
      <SoftBox key={itemKey} component="li" color="text" fontSize="1.25rem" lineHeight={1}>
        <SoftTypography variant="button" color="text" fontWeight="regular" verticalAlign="middle">
          {item}
        </SoftTypography>
      </SoftBox>
    );
  });

  return (
    <DashboardLayout>
      <Card id="change-password" style={{ margin: "0 auto", width: "80%" }}>
        <SoftBox p={3}>
          <SoftTypography variant="h5">Change Password</SoftTypography>
        </SoftBox>
        <form>
          <SoftBox component="form" pb={3} px={10}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormField
                  label="current password"
                  placeholder="Current Password"
                  inputProps={{ type: "password", autoComplete: "" }}
                  value={changeUserPassword.currentPassword}
                  onChange={(e) => {
                    setUserPassword({ ...changeUserPassword, currentPassword: e.target.value });
                  }}
                  error={changeUserPassword.currentPassword == ""}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormField
                  label="new password"
                  placeholder="New Password"
                  inputProps={{ type: "password", autoComplete: "" }}
                  value={changeUserPassword.newPassword}
                  onChange={(e) => {
                    setUserPassword({ ...changeUserPassword, newPassword: e.target.value });
                  }}
                  error={changeUserPassword.newPassword == ""}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormField
                  label="confirm new password"
                  placeholder="Confirm Password"
                  inputProps={{ type: "password", autoComplete: "" }}
                  value={changeUserPassword.compairPassword}
                  onChange={(e) => {
                    setUserPassword({ ...changeUserPassword, compairPassword: e.target.value });
                  }}
                  error={changeUserPassword.compairPassword != changeUserPassword.newPassword}
                  required
                />
              </Grid>
            </Grid>
            <SoftBox mt={6} mb={1}>
              <SoftTypography variant="h5">Password requirements</SoftTypography>
            </SoftBox>
            <SoftBox mb={1}>
              <SoftTypography variant="body2" color="text">
                Please follow this guide for a strong password
              </SoftTypography>
            </SoftBox>
            <SoftBox
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
              flexWrap="wrap"
            >
              <SoftBox component="ul" m={0} pl={3.25} mb={{ xs: 8, sm: 0 }}>
                {renderPasswordRequirements}
              </SoftBox>
              <SoftBox ml="auto">
                <SoftButton onClick={updatePassword} variant="gradient" color="dark" size="small">
                  update password
                </SoftButton>
              </SoftBox>
            </SoftBox>
          </SoftBox>
        </form>
      </Card>
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

export default ChangePassword;
