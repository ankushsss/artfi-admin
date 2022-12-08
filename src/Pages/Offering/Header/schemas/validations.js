import * as Yup from "yup";
// import checkout from "layouts/pages/users/new-user2/schemas/form";
import checkout from "./form";

const {
  formField: { artWorkName, price },
} = checkout;

const validations = [
  Yup.object().shape({
    [artWorkName.name]: Yup.string().required(artWorkName.errorMsg),
    // [price.name]: Yup.string().required(price.errorMsg),
  }),
];

export default validations;
