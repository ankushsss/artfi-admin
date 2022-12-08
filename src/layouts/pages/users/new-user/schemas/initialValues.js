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

import checkout from "layouts/pages/users/new-user/schemas/form";

const {
  formField: {
    artistFirstName,
    artistLastName,
    artistMetaTitle,
    artistMetaKeyword,
    artistDescription,
    artistBiagraphy,
    artistMetaDescription,
    artistKnownFor,
    artistNationaltiy,
    artistBornCity,
    artistDeathCity,
    artistCustomUrl,
  },
} = checkout;

const initialValues = {
  [artistFirstName.name]: "",
  [artistLastName.name]: "",
  [artistMetaTitle.name]: "",
  [artistMetaKeyword.name]: "",
  [artistBiagraphy.name]: "",
  [artistDescription.name]: "",
  [artistMetaDescription.name]: "",
  [artistKnownFor.name]: "",
  [artistNationaltiy.name]: "",
  [artistBornCity.name]: "",
  [artistDeathCity.name]: "",
  [artistCustomUrl.name]: "",
};

export default initialValues;
