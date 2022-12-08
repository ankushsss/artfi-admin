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
// import FormField from "layouts/pages/users/new-user2/components/FormField";
import FormField from "../FormField";
import { MenuItem, Select } from "@mui/material";
import SoftInput from "components/SoftInput";

function UserInfo({ formData }) {
  const { formField, values, errors, touched, setRole, role, setImage } = formData;
  const { fullname, position, bio, linkedin, instagram, twitter } = formField;
  const {
    fullname: fullNameV,
    position: positionV,
    bio: bioV,
    linkedin: linkedinV,
    instagram: instagramV,
    twitter: twitterV,
  } = values;

  return (
    <SoftBox>
      <SoftBox lineHeight={0}>
        <SoftTypography variant="h5" fontWeight="bold">
          Team Member Registration
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          Mandatory informations
        </SoftTypography>
      </SoftBox>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={fullname.type}
              label={fullname.label}
              name={fullname.name}
              value={fullNameV}
              placeholder={fullname.placeholder}
              error={errors.fullname && touched.fullname}
              success={fullNameV.length > 0 && !errors.fullname}
            />
          </Grid>
          <Grid item xs={10} sm={3}>
            <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                Role
              </SoftTypography>
            </SoftBox>

            <Select input={<SoftInput />} value={role} onChange={(e) => setRole(e.target.value)}>
              <MenuItem value="...">...</MenuItem>
              <MenuItem value="coreTeam">Core Team</MenuItem>
              <MenuItem value="patrons">Patrons</MenuItem>
              <MenuItem value="advisors">Advisors</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={10} sm={3}>
            <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                Image
              </SoftTypography>
            </SoftBox>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={position.type}
              label={position.label}
              name={position.name}
              value={positionV}
              placeholder={position.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={bio.type}
              label={bio.label}
              name={bio.name}
              value={bioV}
              placeholder={bio.placeholder}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={linkedin.type}
              label={linkedin.label}
              name={linkedin.name}
              value={linkedinV}
              placeholder={linkedin.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={instagram.type}
              label={instagram.label}
              name={instagram.name}
              value={instagramV}
              placeholder={instagram.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={twitter.type}
              label={twitter.label}
              name={twitter.name}
              value={twitterV}
              placeholder={twitter.placeholder}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

// typechecking props for UserInfo
UserInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default UserInfo;
