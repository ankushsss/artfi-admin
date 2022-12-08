// import checkout from "layouts/pages/users/new-user2/schemas/form";
import checkout from "./form";

const {
  formField: { mintVideoUrl },
} = checkout;

const initialValues = {
  [mintVideoUrl.name]: "",
};

export default initialValues;
