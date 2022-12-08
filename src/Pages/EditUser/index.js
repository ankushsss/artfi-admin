// prop-type is a library for typechecking of props

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// NewUser page components
import FormField from "layouts/pages/users/new-user2/components/FormField";
import form from "../../layouts/pages/users/new-user2/schemas/form";

function UserInfo({ fullname, userInfo, setUserInfo }) {
  // console.log("this component is mounted as well");

  const { formField } = form;
  return (
    <SoftBox>
      <SoftBox lineHeight={0}>
        <SoftTypography variant="h5" fontWeight="bold">
          Edit User
        </SoftTypography>
      </SoftBox>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={formField.fullname.type}
              label={formField.fullname.label}
              name={formField.fullname.name}
              value={userInfo.fullname}
              onChange={(e) => setUserInfo({ ...userInfo, fullname: e.target.value })}
              placeholder={formField.fullname.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={formField.email.type}
              label={formField.email.label}
              name={formField.email.name}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
              value={userInfo.email}
              placeholder={formField.email.placeholder}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={formField.contactNumber.type}
              label={formField.contactNumber.label}
              name={formField.contactNumber.name}
              value={userInfo.contactNumber}
              onChange={(e) => setUserInfo({ ...userInfo, contactNumber: e.target.value })}
              placeholder={formField.contactNumber.placeholder}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

export default UserInfo;
