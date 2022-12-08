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
import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";

// @mui material components
import SoftInput from "components/SoftInput";
import Grid from "@mui/material/Grid";
import { ReactComponent as Edit } from "../../../../../../examples/Icons/edit.svg";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
// NewUser page components
import SoftEditor from "components/SoftEditor";
import SoftSelect from "components/SoftSelect";
import FormField from "layouts/pages/users/new-user/components/FormField";
import SoftDropzone from "components/SoftDropzone";
import Switch from "@mui/material/Switch";

import { useState } from "react";
import SoftBadgeDot from "components/SoftBadgeDot";
import selectData from "../UserInfo/data/selectData";
import SoftAvatar from "components/SoftAvatar";
import DropZone from "../DropZone/Index";
function UserInfo({
  artistIsVerified,
  setArtistIsVerified,
  artistIsActive,
  setArtistIsActive,
  deathDate,
  setDeathDate,
  birthDate,
  setBirthDate,
  formData,
  setArtistImage,
  artistImage,
  highlightsImage,
  setHighlightsImage,
  editorValue,
  setEditorValue,
}) {
  const { formField, values, errors, touched } = formData;
  const {
    artistFirstName,
    artistLastName,
    artistDescription,
    artistKnownFor,
    artistNationaltiy,
    artistBiagraphy,
    artistBornCity,
    artistDeathCity,
    artistMetaDescription,
    artistMetaKeyword,
    artistMetaTitle,
    artistCustomUrl,
  } = formField;
  const {
    artistFirstName: artistFirstNameV,
    artistLastName: artistLastNameV,
    artistDescription: artistDescriptionV,
    artistBiagraphy: artistBiagraphyV,
    artistMetaDescription: artistMetaDescriptionV,
    artistKnownFor: knoV,
    artistNationaltiy: artistNationaltiyV,
    artistBornCity: bornCV,
    artistDeathCity: deathCV,
    artistMetaKeyword: artistMetaKeywordV,
    artistMetaTitle: artistMetaTitleV,
    artistCustomUrl: artistCustomUrlV,
  } = values;

  const handleBirthMonth = (e) => {
    setBirthDate({ ...birthDate, month: e.value });
  };
  const handleBirthDay = (e) => {
    setBirthDate({ ...birthDate, day: e.value });
  };
  const handleBirthYear = (e) => {
    setBirthDate({ ...birthDate, year: e.value });
  };
  const handleDeathMonth = (e) => {
    setDeathDate({ ...deathDate, month: e.value });
  };
  const handleDeathDay = (e) => {
    setDeathDate({ ...deathDate, day: e.value });
  };
  const handleDeathYear = (e) => {
    setDeathDate({ ...deathDate, year: e.value });
  };
  const onChangeArtistImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setArtistImage(e.target.files[0]);
    }
  };

  // console.log("Verified", artistIsVerified);
  // console.log("deathDate", deathDate);

  return (
    <SoftBox>
      <SoftBox display="flex" justifyContent="space-between" lineHeight={0}>
        <SoftTypography variant="h5" fontWeight="bold">
          About Artist
        </SoftTypography>
        <SoftBadgeDot
          pt="0"
          p="0"
          pb="0"
          m="0"
          color={artistIsActive ? "success" : "error"}
          badgeContent=""
          size="lg"
        />
      </SoftBox>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <label
              style={{
                border: "1px solid black",
                borderRadius: "50%",
                width: "76px",
                height: "76px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
              className="avatar-box"
            >
              <input
                type="file"
                id="avatar_file"
                name="avatar_file"
                style={{ display: "none" }}
                accept=".jpg,.png,.jpeg"
                onChange={onChangeArtistImage}
                alt=""
              />

              <SoftAvatar
                size="xl"
                style={{ background: "#cccccc" }}
                src={artistImage && URL.createObjectURL(artistImage)}
                alt="Avatar"
              />
            </label>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FormField
              type={artistFirstName.type}
              label={artistFirstName.label}
              name={artistFirstName.name}
              value={artistFirstNameV}
              placeholder={artistFirstName.placeholder}
              error={errors.artistFirstName && touched.artistFirstName}
              success={artistFirstNameV.length > 0 && !errors.artistFirstName}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={artistLastName.type}
              label={artistLastName.label}
              name={artistLastName.name}
              value={artistLastNameV}
              placeholder={artistLastName.placeholder}
              error={errors.artistLastName && touched.artistLastName}
              success={artistLastNameV.length > 0 && !errors.artistLastName}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={artistMetaTitle.type}
              label={artistMetaTitle.label}
              name={artistMetaTitle.name}
              value={artistMetaTitleV}
              placeholder={artistMetaTitle.placeholder}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FormField
              type={artistMetaKeyword.type}
              label={artistMetaKeyword.label}
              name={artistMetaKeyword.name}
              value={artistMetaKeywordV}
              placeholder={artistMetaKeyword.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={artistKnownFor.type}
              label={artistKnownFor.label}
              name={artistKnownFor.name}
              value={knoV}
              placeholder={artistKnownFor.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={artistNationaltiy.type}
              label={artistNationaltiy.label}
              name={artistNationaltiy.name}
              value={artistNationaltiyV}
              placeholder={artistNationaltiy.placeholder}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={artistDescription.type}
              label={artistDescription.label}
              name={artistDescription.name}
              value={artistDescriptionV}
              placeholder={artistDescription.placeholder}
              multiline
              rows={5}
            />
            <FormField
              type={artistMetaDescription.type}
              label={artistMetaDescription.label}
              name={artistMetaDescription.name}
              value={artistMetaDescriptionV}
              placeholder={artistMetaDescription.placeholder}
              multiline
              rows={5}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SoftBox display="inline-block">
              <SoftTypography component="label" variant="caption" fontWeight="bold">
                Artist Biography
              </SoftTypography>
            </SoftBox>
            <SoftEditor
              className="bio-editor"
              placeholder={artistBiagraphy.placeholder}
              value={editorValue}
              onChange={setEditorValue}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FormField
              type={artistBornCity.type}
              label={artistBornCity.label}
              name={artistBornCity.name}
              value={bornCV}
              placeholder={artistBornCity.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={artistDeathCity.type}
              label={artistDeathCity.label}
              name={artistDeathCity.name}
              value={deathCV}
              placeholder={artistDeathCity.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={artistCustomUrl.type}
              label={artistCustomUrl.label}
              name={artistCustomUrl.name}
              value={artistCustomUrlV}
              placeholder={artistCustomUrl.placeholder}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <SoftBox display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
              <SoftBox mb={1} ml={0.5} display="inline-block">
                <SoftTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  birth date
                </SoftTypography>
              </SoftBox>
              <SoftSelect
                name="month"
                onChange={(e) => handleBirthMonth(e)}
                value={birthDate.month}
                placeholder={birthDate.month}
                options={selectData.birthDate}
              />
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SoftBox display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
              <SoftSelect
                name="day"
                onChange={(e) => handleBirthDay(e)}
                value={birthDate.day}
                placeholder={birthDate.day}
                options={selectData.days}
              />
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SoftBox display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
              <SoftSelect
                name="year"
                onChange={(e) => handleBirthYear(e)}
                value={birthDate.year}
                placeholder={birthDate.year}
                options={selectData.years}
              />
            </SoftBox>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <SoftBox display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
              <SoftBox mb={1} ml={0.5} display="inline-block">
                <SoftTypography
                  component="label"
                  variant="caption"
                  fontWeight="bold"
                  textTransform="capitalize"
                >
                  Death date
                </SoftTypography>
              </SoftBox>
              <SoftSelect
                name="month"
                onChange={(e) => handleDeathMonth(e)}
                value={deathDate.month}
                placeholder={deathDate.month}
                options={selectData.birthDate}
              />
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SoftBox display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
              <SoftSelect
                name="day"
                onChange={(e) => handleDeathDay(e)}
                value={deathDate.day}
                placeholder={deathDate.day}
                options={selectData.days}
              />
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={4}>
            <SoftBox display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
              <SoftSelect
                name="year"
                onChange={(e) => handleDeathYear(e)}
                value={deathDate.year}
                placeholder={deathDate.year}
                options={selectData.years}
              />
            </SoftBox>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {/* <Grid item xs={12}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              upload your highlights
            </SoftTypography>
            <SoftBox display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
              <SoftDropzone display="flex" flexWrap="wrap" options={{ addRemoveLinks: true }} />
            </SoftBox>
          </Grid> */}
          <Grid mt={2} item xs={12}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              upload your highlights
            </SoftTypography>
            <SoftBox display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
              <DropZone highlightsImage={highlightsImage} setHighlightsImage={setHighlightsImage} />
            </SoftBox>
          </Grid>
          <Grid
            justifyContent="space-between"
            display="flex"
            flexDirection="row"
            item
            mt={2}
            xs={12}
            sm={4}
          >
            <SoftTypography fontWeight="bold" fontSize="14px">
              Is Verified
            </SoftTypography>
            <Switch
              onChange={() => setArtistIsVerified(!artistIsVerified)}
              checked={artistIsVerified}
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
