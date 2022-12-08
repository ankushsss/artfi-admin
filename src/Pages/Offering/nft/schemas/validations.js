import * as Yup from "yup";
// import checkout from "layouts/pages/users/new-user2/schemas/form";
import checkout from "./form";

const {
  formField: { mintVideoUrl },
} = checkout;

const validations = [
  Yup.object().shape({
    [mintVideoUrl.name]: Yup.string().required(mintVideoUrl.errorMsg),
  }),
];

export default validations;
