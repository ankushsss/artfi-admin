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
import initialValues from "../../schemas/initialValues";
// NewUser page components
import FormField from "../FormField";
import { ConnectingAirportsOutlined, ConstructionOutlined } from "@mui/icons-material";

function Address({ formData, setFactSheet, setArtWorkImage }) {
  const [state, setState] = useState("...");
  const { formField, values, errors, touched } = formData;
  const {
    artworkTitle,
    fractionalized,
    price,
    size,
    signature,
    authenticity,
    medium,
    description,
    year,
    provenance,
  } = formField;

  const {
    artworkTitle: artworkTitleV,
    fractionalized: fractionalizedV,
    price: priceV,
    size: sizeV,
    signature: signatureV,
    authenticity: authenticityV,
    medium: mediumV,
    description: descriptionV,
    year: yearV,
    provenance: provenanceV,
  } = values;
  const handleSetState = (event) => setState(event.target.value);
  return (
    <SoftBox>
      <SoftTypography variant="h5" fontWeight="bold">
        Whitelist
      </SoftTypography>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormField
              type={artworkTitle.type}
              label={artworkTitle.label}
              name={artworkTitle.name}
              value={artworkTitleV}
              placeholder={artworkTitle.placeholder}
              error={errors.artworkTitle && touched.artworkTitle}
              success={artworkTitleV?.length > 0 && !errors.artworkTitle}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <SoftBox>
              <FormField
                type={fractionalized.type}
                label={fractionalized.label}
                name={fractionalized.name}
                value={fractionalizedV}
                placeholder={fractionalized.placeholder}
              />
            </SoftBox>
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <FormField
              type={price.type}
              label={price.label}
              name={price.name}
              value={priceV}
              placeholder={price.placeholder}
              error={errors.price && touched.price}
              success={priceV?.length > 0 && !errors.price}
            />
          </Grid> */}
          <Grid item xs={6} sm={3}>
            <FormField
              type={size.type}
              label={size.label}
              name={size.name}
              value={sizeV}
              placeholder={size.placeholder}
              error={errors.size && touched.size}
              success={sizeV?.length > 0 && !errors.size}
            />
          </Grid>
          <Grid
            item
            display="flex"
            height="fit-content"
            flexDirection="column"
            justifyContent="space-between"
            xs={6}
            sm={3}
          >
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                Image of Artwork
              </SoftTypography>
            </SoftBox>
            <input onChange={(e) => setArtWorkImage(e.target.files[0])} type="file" />
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
              success={signatureV?.length > 0 && !errors.signature}
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
              success={authenticityV?.length > 0 && !errors.authenticity}
            />
          </Grid>
          <Grid
            item
            display="flex"
            height="fit-content"
            flexDirection="column"
            justifyContent="space-between"
            xs={6}
            sm={3}
          >
            <SoftBox mb={1} ml={0.5}>
              <SoftTypography
                component="label"
                variant="caption"
                fontWeight="bold"
                textTransform="capitalize"
              >
                Fact Sheet
              </SoftTypography>
            </SoftBox>
            <input onChange={(e) => setFactSheet(e.target.files[0])} type="file" />
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
              success={mediumV?.length > 0 && !errors.medium}
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
              success={yearV?.length > 0 && !errors.year}
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
              success={provenanceV?.length > 0 && !errors.provenance}
            />
          </Grid>
          <Grid item xs={12}>
            <FormField
              type={description.type}
              label={description.label}
              name={description.name}
              value={descriptionV}
              placeholder={description.placeholder}
              multiline
              rows={5}
            />
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
