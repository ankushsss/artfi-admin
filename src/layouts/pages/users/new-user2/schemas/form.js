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

const form = {
  formId: "new-user2-form",
  formField: {
    fullname: {
      name: "fullname",
      label: "fullname",
      type: "text",
      placeholder: "eg. Micheal",
      // errorMsg: "fullname is required.",
    },
    role: {
      name: "role",
      label: "role",
      type: "text",
      placeholder: "admin",
    },
    contactNumber: {
      name: "contactNumber",
      label: "contactNumber",
      type: "number",
      placeholder: "000900000",
    },
    email: {
      name: "email",
      label: "email address",
      type: "email",
      placeholder: "eg. soft@dashboard.come",
      // errorMsg: "Email address is required.",
      // invalidMsg: "Your email address is invalid",
    },
    password: {
      name: "password",
      label: "password",
      type: "password",
      placeholder: "******",
      // errorMsg: "Password is required.",
      // invalidMsg: "Your password should be more than 6 characters.",
    },
    repeatPassword: {
      name: "repeatPassword",
      label: "repeat password",
      type: "password",
      placeholder: "******",
      // errorMsg: "Password is required.",
      // invalidMsg: "Your password doesn't match.",
    },
  },
};

export default form;
