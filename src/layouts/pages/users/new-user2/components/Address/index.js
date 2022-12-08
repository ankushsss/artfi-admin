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

import { useState } from "react";

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";

// NewUser page components
import FormField from "layouts/pages/users/new-user2/components/FormField";

function Address({ formData }) {
  const [state, setState] = useState("...");
  const { formField, values, errors, touched } = formData;
  // const { state } = formField;
  // const {  state: stateV} = values;

  const handleSetState = (event) => setState(event.target.value);

  return (
    <SoftBox>
      <SoftTypography variant="h5" fontWeight="bold">
        Address
      </SoftTypography>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          
          
        </Grid>
        <Grid container spacing={3}>
         
          
          <Grid item xs={6} sm={3}>
            <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                State
              </SoftTypography>
            </SoftBox>
            <Select input={<SoftInput />} value={state} onChange={handleSetState}>
              <MenuItem value="...">...</MenuItem>
              <MenuItem value="10">Hello 10</MenuItem>
              <MenuItem value="11">Hello 11</MenuItem>
              <MenuItem value="12">Hello 12</MenuItem>
            </Select>
          </Grid>
          
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

// typechecking props for Address
Address.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Address;
