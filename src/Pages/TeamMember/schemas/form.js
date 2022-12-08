const form = {
  formId: "new-team-form",
  formField: {
    fullname: {
      name: "fullname",
      label: "fullname",
      type: "text",
      placeholder: "eg. Micheal",
      // errorMsg: "fullname is required.",
    },
    position: {
      name: "position",
      label: "position",
      type: "text",
      placeholder: "position",
      // errorMsg: "fullname is required.",
    },
    bio: {
      name: "Bio",
      label: "Bio",
      type: "text",
      placeholder: "eg. Bio",
      errorMsg: "bio is required.",
      // invalidMsg: "bio is required.",
    },
    linkedin: {
      name: "linkedin",
      label: "linkedin",
      type: "text",
      placeholder: "http://",
    },
    instagram: {
      name: "instagram",
      label: "instagram",
      type: "text",
      placeholder: "http://",
    },
    twitter: {
      name: "twitter",
      label: "twitter",
      type: "text",
      placeholder: "http://",
    },
  },
};

export default form;
