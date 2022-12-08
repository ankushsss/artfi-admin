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

import checkout from "./form";

const {
  formField: {
    bgVideo,
    uvVideo,
    artworkTitle,
    fractionalized,
    price,
    size,
    signature,
    authenticity,
    medium,
    year,
    provenance,
    adUrl,
    description,
    aboutArtist,
    artworkdescription,
    explanationvideo,
  },
} = checkout;

const initialValues = {
  [bgVideo.name]: "",
  [uvVideo.name]: "",
  [artworkTitle.name]: "",
  [fractionalized.name]: "",
  [price.name]: "",
  [size.name]: "",
  [aboutArtist.name]: "",
  [signature.name]: "",
  [authenticity.name]: "",
  [provenance.name]: "",
  [medium.name]: "",
  [adUrl.name]: "",
  [artworkdescription.name]: "",
  [description.name]: "",
  [explanationvideo.name]: "",
  [year.name]: "",
};

export default initialValues;
