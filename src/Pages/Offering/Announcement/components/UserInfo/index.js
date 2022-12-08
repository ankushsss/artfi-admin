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
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

function UserInfo({ formData }) {
  const {
    formField,
    values,
    errors,
    touched,
    announcementBtnType,
    setAnnouncementBtnType,
    setStartDate,
    startDate,
    setEndDate,
    endDate,
    annoucmentDetails,
  } = formData;
  const { backgroundUrl, announcementUrl } = formField;

  const { backgroundUrl: backgroundUrlV, announcementUrl: announcementUrlV } = values;

  return (
    <SoftBox>
      <SoftBox lineHeight={0}>
        <SoftTypography variant="h5" fontWeight="bold">
          Add New Announcement
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          Mandatory informations
        </SoftTypography>
      </SoftBox>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                CTA
              </SoftTypography>
            </SoftBox>

            <Select
              input={<SoftInput />}
              value={announcementBtnType}
              onChange={(e) => setAnnouncementBtnType(e.target.value)}
            >
              <MenuItem value="waitlist">Waitlist</MenuItem>
              {/* <MenuItem value="whitelist">Whitelist</MenuItem> */}
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={backgroundUrl.type}
              label={backgroundUrl.label}
              name={backgroundUrl.name}
              value={backgroundUrlV}
              placeholder={backgroundUrl.placeholder}
              error={errors.backgroundUrl && touched.backgroundUrl}
              success={backgroundUrlV?.length > 0 && !errors.backgroundUrl}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={announcementUrl.type}
              label={announcementUrl.label}
              name={announcementUrl.name}
              value={announcementUrlV}
              placeholder={announcementUrl.placeholder}
              error={errors.announcementUrl && touched.announcementUrl}
              success={announcementUrlV?.length > 0 && !errors.announcementUrl}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <SoftBox mb={2.3} ml={0.5} lineHeight={0}>
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                Start Date
              </SoftTypography>
            </SoftBox>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                value={startDate}
                disablePast={true}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SoftBox mb={2.3} ml={0.5} lineHeight={0}>
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                End Date
              </SoftTypography>
            </SoftBox>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                value={endDate}
                disablePast={true}
                onChange={(newValue) => {
                  setEndDate(newValue);
                }}
              />
            </LocalizationProvider>
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
