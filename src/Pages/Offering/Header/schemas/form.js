const form = {
  formId: "new-team-form",
  formField: {
    artWorkName: {
      name: "artWorkName",
      label: "Art Work Name",
      type: "text",
      placeholder: "eg. Micheal",
      errorMsg: "name is required.",
    },
    price: {
      name: "price",
      label: "price",
      type: "text",
      placeholder: "price..",
      errorMsg: "price is required.",
      // invalidMsg: "bio is required.",
    },
    tbaValue: {
      name: "tbaValue",
      label: "TBA Value",
      type: "text",
      placeholder: "tbaValue..",
      errorMsg: "tbaValue is required.",
      // invalidMsg: "bio is required.",
    },
  },
};

export default form;
