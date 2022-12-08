// import checkout from "layouts/pages/users/new-user2/schemas/form";
import checkout from "./form";

const {
  formField: { artWorkName, price, tbaValue },
} = checkout;

const initialValues = {
  [artWorkName.name]: "",
  [price.name]: "",
  [tbaValue.name]: "",
};

export default initialValues;
