import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// NewUser page components
// import FormField from "layouts/pages/users/new-user2/components/FormField";
import FormField from "../FeaturedIn/components/FormField/index";
import SoftInput from "components/SoftInput";
import form from "../FeaturedIn/schemas/form";

function UserInfo({ userInfo, setUserInfo }) {
  const { formField } = form;
  return (
    <SoftBox>
      <SoftBox lineHeight={0}>
        <SoftTypography variant="h5" fontWeight="bold">
          Edit Media
        </SoftTypography>
      </SoftBox>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={formField.title.type}
              label={formField.title.label}
              name={formField.title.name}
              value={userInfo.title}
              onChange={(e) => setUserInfo({ ...userInfo, title: e.target.value })}
              placeholder={formField.title.placeholder}
              // error={errors.title && touched.title}
              // success={titleV.length > 0 && !errors.title}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={formField.url.type}
              label={formField.url.label}
              name={formField.url.name}
              onChange={(e) => setUserInfo({ ...userInfo, url: e.target.value })}
              value={userInfo.url}
              placeholder={formField.url.placeholder}
              // error={errors.url && touched.url}
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
            <input
              type="file"
              onChange={(e) => setUserInfo({ ...userInfo, image: e.target.files[0] })}
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
