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

import * as Yup from "yup";
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
    provenance,
  },
} = checkout;

const validations = [
  Yup.object().shape({
    [bgVideo.name]: Yup.string(),
    [uvVideo.name]: Yup.string(),
  }),
  Yup.object().shape({
    [artworkTitle.name]: Yup.string(),
    [price.name]: Yup.string(),
    [size.name]: Yup.string(),
    [signature.name]: Yup.string(),
    [authenticity.name]: Yup.string(),
    [medium.name]: Yup.string(),
    [provenance.name]: Yup.string(),
  }),
];

export default validations;
