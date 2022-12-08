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
import checkout from "layouts/pages/users/new-user2/schemas/form";

const {
  formField: { fullname, email, password, repeatPassword },
} = checkout;

const validations = [
  // Yup.object().shape({
  //   [fullname.name]: Yup.string().required(fullname.errorMsg),
  //   [email.name]: Yup.string().required(email.errorMsg).email(email.invalidMsg),
  //   [password.name]: Yup.string().required(password.errorMsg).min(6, password.invalidMsg),
  //   [password.name]: Yup.string().required(password.errorMsg).min(6, password.invalidMsg),
  //   [repeatPassword.name]: Yup.string()
  //     .required(repeatPassword.errorMsg)
  //     .oneOf([Yup.ref("password"), null], repeatPassword.invalidMsg),
  // })
];

export default validations;
