// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import { useState } from "react";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

// NewUser page components
import FormField from "../FormField";
import { MenuItem, Select } from "@mui/material";
import SoftInput from "components/SoftInput";

function UserInfo({ formData, setStartDate, startDate, setEndDate, endDate, setCTA, CTA }) {
  const { formField, values, errors, touched } = formData;
  const { bgVideo, uvVideo } = formField;
  const { bgVideo: bgVideoV, uvVideo: uvVideoV } = values;
  // console.log(uvVideoV, "uvVideoV");
  return (
    <SoftBox>
      <SoftBox lineHeight={0}>
        <SoftTypography variant="h5" fontWeight="bold">
          Unvilling
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          Mandatory informations
        </SoftTypography>
      </SoftBox>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={bgVideo.type}
              label={bgVideo.label}
              name={bgVideo.name}
              value={bgVideoV}
              placeholder={bgVideo.placeholder}
              error={errors.bgVideo && touched.bgVideo}
              success={bgVideoV?.length > 0 && !errors.bgVideo}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={uvVideo.type}
              label={uvVideo.label}
              name={uvVideo.name}
              value={uvVideoV}
              placeholder={uvVideo.placeholder}
              error={errors.uvVideo && touched.uvVideo}
              success={uvVideoV?.length > 0 && !errors.uvVideo}
            />
          </Grid>
        </Grid>
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
            <Select value={CTA} onChange={(e) => setCTA(e.target.value)} input={<SoftInput />}>
              <MenuItem value="waitlist">Waitlist</MenuItem>
              <MenuItem value="whitelist">Whitelist</MenuItem>
            </Select>
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
                disablePast={true}
                value={startDate}
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
                disablePast={true}
                value={endDate}
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
