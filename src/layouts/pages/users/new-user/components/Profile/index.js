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

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// NewUser page components
import FormField from "layouts/pages/users/new-user/components/FormField";

function Profile({ formData }) {
  const { formField, values } = formData;
  const { publicEmail, artistBiagraphy } = formField;
  const { publicEmail: publicEmailV, artistBiagraphy: artistBiagraphyV } = values;

  return (
    <SoftBox>
      <SoftTypography variant="h5" fontWeight="bold">
        Profile
      </SoftTypography>
      <SoftBox mt={1.625}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormField
              type={publicEmail.type}
              label={publicEmail.label}
              name={publicEmail.name}
              value={publicEmailV}
              placeholder={publicEmail.placeholder}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type={artistBiagraphy.type}
              label={artistBiagraphy.label}
              name={artistBiagraphy.name}
              value={artistBiagraphyV}
              placeholder={artistBiagraphy.placeholder}
              multiline
              rows={5}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

// typechecking props for Profile
Profile.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Profile;
