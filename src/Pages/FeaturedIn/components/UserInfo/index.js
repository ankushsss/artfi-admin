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
  const { formField, values, errors, touched, setImage } = formData;
  const { title, url } = formField;
  const { title: titleV, url: urlV } = values;

  return (
    <SoftBox>
      <SoftBox lineHeight={0}>
        <SoftTypography variant="h5" fontWeight="bold">
          Add Media Icon
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          Mandatory informations
        </SoftTypography>
      </SoftBox>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={title.type}
              label={title.label}
              name={title.name}
              value={titleV}
              placeholder={title.placeholder}
              error={errors.title && touched.title}
              success={titleV.length > 0 && !errors.title}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={url.type}
              label={url.label}
              name={url.name}
              value={urlV}
              placeholder={url.placeholder}
              error={errors.url && touched.url}
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
                Image
              </SoftTypography>
            </SoftBox>

            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
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
