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
// import checkout from "layouts/pages/users/new-user2/schemas/form";
import checkout from "../schemas/form";

const {
  formField: { fullname, position, bio, linkedin, instagram, twitter },
} = checkout;

const validations = [
  Yup.object().shape({
    [fullname.name]: Yup.string().required(fullname.errorMsg),
    [position.name]: Yup.string().required(position.errorMsg),
    [bio.name]: Yup.string().required(bio.errorMsg).min(6, bio.invalidMsg),
  }),
];

export default validations;
