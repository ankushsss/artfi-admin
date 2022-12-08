// prop-type is a library for typechecking of props

// @mui material components
import Grid from "@mui/material/Grid";
// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
// NewUser page components
import SoftEditor from "components/SoftEditor";
import SoftSelect from "components/SoftSelect";
import FormField from "layouts/pages/users/new-user/components/FormField/index";
import Switch from "@mui/material/Switch";
import form from "../../layouts/pages/users/new-user/schemas/form";

import SoftBadgeDot from "components/SoftBadgeDot";
import selectData from "../../layouts/pages/users/new-user/components/UserInfo/data/selectData";
import SoftAvatar from "components/SoftAvatar";
import DropZone from "../../layouts/pages/users/new-user/components/DropZone/Index";
import { useState } from "react";

function UserInfo({
  artistFirstName,
  setArtistFirstName,
  artistLastName,
  setArtistLastName,
  artistMetaTitle,
  setArtistMetaTitle,
  artistMetaKeyword,
  setArtistMetaKeyword,
  artistDescription,
  setArtistDescription,
  artistKnownFor,
  setArtistKnownFor,
  artistMetaDescription,
  setArtistMetaDescription,
  artistBornCity,
  setArtistBornCity,
  artistDeathCity,
  setArtistDeathCity,
  artistCustomUrl,
  setArtistCustomUrl,
  setEditorValue,
  editorValue,
  highlightsImage,
  setHighlightsImage,
  artistIsVerified,
  setArtistIsVerified,
  setArtistIsActive,
  artistIsActive,
  deathDate,
  setDeathDate,
  birthDate,
  setBirthDate,
  setArtistImage,
  artistImage,
  artistNationaltiy,
  setArtistNationaltiy,
  localArtistImage,
  setLocalArtistImage,
  localHighlights,
  setLocalHighlights,
}) {
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
      setLocalArtistImage(e.target.files[0]);
      setArtistImage(e.target.files[0]);
    }
  };
  const { formField } = form;
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
                src={
                  !localArtistImage
                    ? `${process.env.React_App_Base_Url}/${artistImage}`
                    : URL.createObjectURL(localArtistImage)
                }
                alt="Avatar"
              />
            </label>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FormField
              type={formField.artistFirstName.type}
              label={formField.artistFirstName.label}
              name={formField.artistFirstName.name}
              value={artistFirstName}
              onChange={(e) => setArtistFirstName(e.target.value)}
              placeholder={formField.artistFirstName.placeholder}
              // error={errors.artis tFirstName && touched.artistFirstName}
              // success={artistFirstNameV.length > 0 && !errors.artistFirstName}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={formField.artistLastName.type}
              label={formField.artistLastName.label}
              name={formField.artistLastName.name}
              value={artistLastName}
              onChange={(e) => setArtistLastName(e.target.value)}
              placeholder={formField.artistLastName.placeholder}
              // error={errors.artistLastName && touched.artistLastName}
              // success={artistLastNameV.length > 0 && !errors.artistLastName}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={formField.artistMetaTitle.tpye}
              name={formField.artistMetaTitle.name}
              label={formField.artistMetaTitle.label}
              value={artistMetaTitle}
              onChange={(e) => setArtistMetaTitle(e.target.value)}
              placeholder={formField.artistMetaTitle.placeholder}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FormField
              type={formField.artistMetaKeyword.tpye}
              label={formField.artistMetaKeyword.label}
              name={formField.artistMetaKeyword.name}
              onChange={(e) => setArtistMetaKeyword(e.target.value)}
              value={artistMetaKeyword}
              placeholder={formField.artistMetaKeyword.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={formField.artistKnownFor.tpye}
              label={formField.artistKnownFor.label}
              name={formField.artistKnownFor.name}
              onChange={(e) => setArtistKnownFor(e.target.value)}
              value={artistKnownFor}
              placeholder={formField.artistKnownFor.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={formField.artistNationaltiy.tpye}
              label={formField.artistNationaltiy.label}
              name={formField.artistNationaltiy.name}
              onChange={(e) => setArtistNationaltiy(e.target.value)}
              value={artistNationaltiy}
              placeholder={formField.artistNationaltiy.placeholder}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={formField.artistDescription.tpye}
              label={formField.artistDescription.label}
              name={formField.artistDescription.name}
              value={artistDescription}
              onChange={(e) => setArtistDescription(e.target.value)}
              placeholder={formField.artistDescription.placeholder}
              multiline
              rows={5}
            />
            <FormField
              type={formField.artistMetaDescription.tpye}
              label={formField.artistMetaDescription.label}
              name={formField.artistMetaDescription.name}
              value={artistMetaDescription}
              onChange={(e) => setArtistMetaDescription(e.target.value)}
              placeholder={formField.artistMetaDescription.placeholder}
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
              placeholder={formField.artistBiagraphy.placeholder}
              value={editorValue}
              onChange={setEditorValue}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <FormField
              type={formField.artistBornCity.type}
              label={formField.artistBornCity.label}
              name={formField.artistBornCity.name}
              value={artistBornCity}
              onChange={(e) => setArtistBornCity(e.target.value)}
              placeholder={formField.artistBornCity.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={formField.artistDeathCity.type}
              label={formField.artistDeathCity.label}
              name={formField.artistDeathCity.name}
              onChange={(e) => setArtistDeathCity(e.target.value)}
              value={artistDeathCity}
              placeholder={formField.artistDeathCity.placeholder}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormField
              type={formField.artistCustomUrl.type}
              label={formField.artistCustomUrl.label}
              name={formField.artistCustomUrl.name}
              value={artistCustomUrl}
              onChange={(e) => setArtistCustomUrl(e.target.value)}
              placeholder={formField.artistCustomUrl.placeholder}
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
          <Grid mt={2} item xs={12}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              upload your highlights
            </SoftTypography>
            <SoftBox display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
              <DropZone
                localHighlights={localHighlights}
                setLocalHighlights={setLocalHighlights}
                highlightsImage={highlightsImage}
                setHighlightsImage={setHighlightsImage}
              />
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

export default UserInfo;
