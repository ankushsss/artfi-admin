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

import checkout from "layouts/pages/users/new-user2/schemas/form";

const {
  formField: {
    fullname,
    email,
    contactNumber,
    password,
    repeatPassword, 
  },
} = checkout;

const initialValues = {
  [fullname.name]: "",
  [email.name]: "",
  [contactNumber.name]:"",
  [password.name]: "",
  [repeatPassword.name]: "",
};

export default initialValues;
