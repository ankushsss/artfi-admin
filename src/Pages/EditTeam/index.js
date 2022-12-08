// prop-type is a library for typechecking of props

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// NewUser page components
import FormField from "../TeamMember/components/FormField/index";
import form from "../TeamMember/schemas/form";
import { MenuItem, Select } from "@mui/material";
import SoftInput from "components/SoftInput";

function UserInfo({
  role,
  setRole,
  fullname,
  setFullname,
  position,
  setPosition,
  bio,
  setBio,
  image,
  setImage,
  linkedin,
  setLinkedin,
  instagram,
  setInstagram,
  twitter,
  setTwitter,
  replaceImage,
  setReplaceImage,
}) {
  const { formField } = form;
  return (
    <SoftBox>
      <SoftBox lineHeight={0}>
        <SoftTypography variant="h5" fontWeight="bold">
          Edit Team Member
        </SoftTypography>
      </SoftBox>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={formField.fullname.type}
              label={formField.fullname.label}
              name={formField.fullname.name}
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder={formField.fullname.placeholder}
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
              type={formField.position.type}
              label={formField.position.label}
              name={formField.position.name}
              onChange={(e) => setPosition(e.target.value)}
              value={position}
              placeholder={formField.position.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={formField.bio.type}
              label={formField.bio.label}
              name={formField.bio.name}
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              placeholder={formField.bio.placeholder}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={formField.linkedin.type}
              label={formField.linkedin.label}
              name={formField.linkedin.name}
              onChange={(e) => setLinkedin(e.target.value)}
              value={linkedin}
              placeholder={formField.linkedin.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={formField.instagram.type}
              label={formField.instagram.label}
              onChange={(e) => setInstagram(e.target.value)}
              name={formField.instagram.name}
              value={instagram}
              placeholder={formField.instagram.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={formField.twitter.type}
              label={formField.twitter.label}
              onChange={(e) => setTwitter(e.target.value)}
              name={formField.twitter.name}
              value={twitter}
              placeholder={formField.twitter.placeholder}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

export default UserInfo;
