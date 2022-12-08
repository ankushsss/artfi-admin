// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { useDispatch } from "react-redux";

// NewUser page components
import FormField from "../FormField";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { fetchArtists } from "redux/artistTableSlice";
import { MenuItem, Select } from "@mui/material";
import SoftInput from "components/SoftInput";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Switch demo" } };

function UserInfo({ formData }) {
  const dispatch = useDispatch();
  const [cookie] = useCookies("artfi_token");
  const [date, setDate] = useState(dayjs("2022-04-07"));

  const {
    formField,
    values,
    errors,
    setStartDate,
    startDate,
    setEndDate,
    endDate,
    isMint,
    setIsMint,
  } = formData;
  const { mintVideoUrl } = formField;
  const { mintVideoUrl: mintVideoUrlV } = values;
  return (
    <SoftBox>
      <SoftBox lineHeight={0}>
        <SoftTypography variant="h5" fontWeight="bold">
          Add Mint
        </SoftTypography>
        <SoftTypography variant="button" fontWeight="regular" color="text">
          Mandatory informations
        </SoftTypography>
      </SoftBox>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={mintVideoUrl.type}
              label={mintVideoUrl.label}
              name={mintVideoUrl.name}
              value={mintVideoUrlV}
              placeholder={mintVideoUrl.placeholder}
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
          <Grid item xs={12} sm={6}>
            <SoftTypography
              component="label"
              variant="caption"
              fontWeight="bold"
              textTransform="capitalize"
            >
              Start Mint
            </SoftTypography>
            <br />
            <Switch value={isMint} onChange={(e) => setIsMint(!isMint)} />
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
