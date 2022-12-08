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
import checkout from "../schemas/form"

const {
  formField: { title,url },
} = checkout;

const validations = [
  Yup.object().shape({
    [title.name]: Yup.string().required(title.errorMsg),
    [url.name]: Yup.string().required(url.errorMsg),
     })];

export default validations;
