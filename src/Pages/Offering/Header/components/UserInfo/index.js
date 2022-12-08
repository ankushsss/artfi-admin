// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { useDispatch, useSelector } from "react-redux";

// NewUser page components
import FormField from "../FormField";
import { MenuItem, Select } from "@mui/material";

import SoftInput from "components/SoftInput";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { fetchArtists } from "redux/artistTableSlice";

function UserInfo({ formData }) {
  const [artistList, setArtistList] = useState([]);
  const dispatch = useDispatch();
  const [cookie] = useCookies("artfi_token");
  useEffect(() => {
    getArtist();
  }, []);

  const getArtist = async () => {
    const response = await dispatch(fetchArtists(cookie.artfi_token));
    setArtistList(response.payload.list);
  };
  const { formField, values, errors, touched, setImage, artistId, setArtistId } = formData;
  const { artWorkName, price } = formField;
  const { artWorkName: artWorkNameV, price: priceV } = values;
  // const { data, status } = useSelector((state) => state.offer);
  // console.log(data), "from inside header inputs";
  return (
    <SoftBox>
      <SoftBox lineHeight={0}>
        <SoftTypography variant="h5" fontWeight="bold">
          Add Header
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
                Artist
              </SoftTypography>
            </SoftBox>

            <Select
              input={<SoftInput />}
              value={artistId}
              onChange={(e) => setArtistId(e.target.value)}
            >
              {artistList.map((artist) => {
                return (
                  <MenuItem key={artist._id} value={artist._id}>
                    {artist.artistFirstName} {artist.artistLastName}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={artWorkName.type}
              label={artWorkName.label}
              name={artWorkName.name}
              value={artWorkNameV}
              placeholder={artWorkName.placeholder}
              error={errors.artWorkName && touched.artWorkName}
              success={artWorkNameV?.length > 0 && !errors.artWorkName}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
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
          {/* <Grid item xs={12} sm={4}>
            <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                IS TBA
              </SoftTypography>
            </SoftBox>

            <Select input={<SoftInput />} value={isTBA} onChange={(e) => setIsTBA(e.target.value)}>
              <MenuItem value={true}>TBA</MenuItem>
              <MenuItem value={false}>Price</MenuItem>
            </Select>
          </Grid> */}
          <Grid xs={12} mt={3} ml={2} sm={3}>
            <FormField
              type={price.type}
              label={price.label}
              name={price.name}
              disabled={true}
              value="To Be Announced"
              placeholder={price.placeholder}
            />
            {/* {isTBA ? (
              <FormField
                type={tbaValue.type}
                label={tbaValue.label}
                name={tbaValue.name}
                value={tbaValueV}
                placeholder={tbaValue.placeholder}
              />
            ) : (
              <FormField
                type={price.type}
                label={price.label}
                name={price.name}
                value={priceV}
                placeholder={price.placeholder}
              />
            )} */}
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
