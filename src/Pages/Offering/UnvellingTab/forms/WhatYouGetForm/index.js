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
import FormField from "../FormField";

function Profile({ formData, setArtistSignature, setNFTDesign }) {
  const { formField, values } = formData;

  return (
    <SoftBox>
      <SoftTypography variant="h5" fontWeight="bold">
        Profile
      </SoftTypography>
      <SoftBox mt={1.625}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <SoftBox mb={2.3} ml={0.5} lineHeight={0}>
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                Upload Artist Signature
              </SoftTypography>
            </SoftBox>
            <input onChange={(e) => setArtistSignature(e.target.files[0])} type="file" />
          </Grid>
        </Grid>
      </SoftBox>

      <SoftBox mt={1.625}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <SoftBox mb={2.3} ml={0.5} lineHeight={0}>
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                Upload Nft Design
              </SoftTypography>
            </SoftBox>
            <input onChange={(e) => setNFTDesign(e.target.files[0])} type="file" multiple />
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
