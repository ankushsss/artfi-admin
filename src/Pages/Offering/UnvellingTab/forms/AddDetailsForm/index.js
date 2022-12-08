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
import { useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// NewUser page components
import FormField from "../FormField";

function Socials({ formData, setBgCover }) {
  const [state, setState] = useState("...");
  const { formField, values, errors, touched } = formData;
  const {
    artworkTitle,
    fractionalized,
    adUrl,
    price,
    size,
    explanationvideo,
    signature,
    authenticity,
    medium,
    description,
    artworkdescription,
    aboutArtist,
    provenance,
    year,
  } = formField;
  const {
    artworkTitle: artworkTitleV,
    fractionalized: fractionalizedV,
    price: priceV,
    size: sizeV,
    explanationvideo: explanationvideoV,
    signature: signatureV,
    authenticity: authenticityV,
    medium: mediumV,
    description: descriptionV,
    adUrl: adUrlV,
    aboutArtist: aboutArtistV,
    artworkdescription: artworkdescriptionV,
    year: yearV,
    provenance: provenanceV,
  } = values;
  const handleSetState = (event) => setState(event.target.value);
  return (
    <SoftBox>
      <SoftTypography variant="h5" fontWeight="bold">
        Add Details
      </SoftTypography>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <FormField
              type={artworkTitle.type}
              label={artworkTitle.label}
              name={artworkTitle.name}
              value={artworkTitleV}
              placeholder={artworkTitle.placeholder}
              error={errors.artworkTitle && touched.artworkTitle}
              success={artworkTitleV?.length > 0 && !errors.artworkTitle}
              disabled={true}
            />
          </Grid>

          <Grid item xs={6}>
            <SoftBox>
              <FormField
                type={adUrl.type}
                label={adUrl.label}
                name={adUrl.name}
                value={adUrlV}
                placeholder={adUrl.placeholder}
              />
            </SoftBox>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={size.type}
              label={size.label}
              name={size.name}
              value={sizeV}
              placeholder={size.placeholder}
              error={errors.size && touched.size}
              disabled={true}
              success={sizeV?.length > 0 && !errors.size}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={explanationvideo.type}
              label={explanationvideo.label}
              name={explanationvideo.name}
              value={explanationvideoV}
              placeholder={explanationvideo.placeholder}
              // error={errors.explanationvideo && touched.explanationvideo}
              // success={explanationvideoV.length > 0 && !errors.explanationvideo}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={signature.type}
              label={signature.label}
              name={signature.name}
              value={signatureV}
              placeholder={signature.placeholder}
              error={errors.signature && touched.signature}
              disabled={true}
              success={signatureV?.length > 0 && !errors.signature}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormField
              type={year.type}
              label={year.label}
              name={year.name}
              value={yearV}
              placeholder={year.placeholder}
              error={errors.year && touched.year}
              disabled={true}
              success={yearV?.length > 0 && !errors.year}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormField
              type={authenticity.type}
              label={authenticity.label}
              name={authenticity.name}
              value={authenticityV}
              placeholder={authenticity.placeholder}
              error={errors.authenticity && touched.authenticity}
              disabled={true}
              success={authenticityV?.length > 0 && !errors.authenticity}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={medium.type}
              label={medium.label}
              name={medium.name}
              value={mediumV}
              placeholder={medium.placeholder}
              error={errors.medium && touched.medium}
              disabled={true}
              success={mediumV?.length > 0 && !errors.medium}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <FormField
              type={provenance.type}
              label={provenance.label}
              name={provenance.name}
              value={provenanceV}
              placeholder={provenance.placeholder}
              error={errors.provenance && touched.provenance}
              disabled={true}
              success={provenanceV?.length > 0 && !errors.provenance}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <SoftBox mt={2} mb={1} ml={0.5} lineHeight={0}>
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                Background cover
              </SoftTypography>
            </SoftBox>
            <input onChange={(e) => setBgCover(e.target.files[0])} type="file" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={artworkdescription.type}
              label={artworkdescription.label}
              name={artworkdescription.name}
              value={artworkdescriptionV}
              placeholder={artworkdescription.placeholder}
              multiline
              rows={5}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={aboutArtist.type}
              label={aboutArtist.label}
              name={aboutArtist.name}
              value={aboutArtistV}
              placeholder={aboutArtist.placeholder}
              multiline
              rows={5}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

// typechecking props for Socials
Socials.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Socials;
