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
  formId: "new-user-form",
  formField: {
    artistFirstName: {
      name: "artistFirstName",
      label: "first name",
      type: "text",
      placeholder: "eg. Micheal",
      errorMsg: "First name is required.",
    },
    artistLastName: {
      name: "artistLastName",
      label: "last name",
      type: "text",
      placeholder: "eg. Prior",
      errorMsg: "Last name is required.",
    },

    email: {
      name: "email",
      label: "email address",
      type: "email",
      placeholder: "eg. soft@dashboard.come",
      // errorMsg: "Email address is required.",
      // invalidMsg: "Your email address is invalid",
    },

    artistDescription: {
      name: "artistDescription",
      label: "artist Description",
      placeholder: "what most describes you?",
    },
    artistBiagraphy: {
      name: "artistBiagraphy",
      label: "artist Biography",
      placeholder: "Say a few words about who you are or what you're working on.",
    },
    artistMetaDescription: {
      name: "artistMetaDescription",
      label: "artist MetaDescription",
      placeholder: "Describe your self in a few words.",
    },

    artistKnownFor: {
      name: "artistKnownFor",
      label: "know for",
      type: "text",
      placeholder: "what is the most thing you are known for?",
    },
    artistNationaltiy: {
      name: "artistNationaltiy",
      label: "artist Nationaltiy",
      type: "text",
      placeholder: "what is your artistNationaltiy ?",
    },
    artistBornCity: {
      name: "artistartistBornCity",
      label: "born City",
      type: "text",
      placeholder: "which city were you born in?",
    },
    artistDeathCity: {
      name: "artistDeathCity",
      label: "death City",
      type: "text",
      placeholder: "which city did he die?",
    },
    artistMetaKeyword: {
      name: "artistMetaKeyword",
      label: "artist MetaKeyword",
      type: "text",
      placeholder: "Give some keywords that describe your self.",
    },
    artistMetaTitle: {
      name: "artistMetaTitle",
      label: "artist MetaTitle",
      type: "text",
      placeholder: "Give your self a title.",
    },
    artistCustomUrl: {
      name: "artistCustomUrl",
      label: "artist CustomUrl",
      type: "text",
      placeholder: "What is your custom url?",
    },
    achievementYear: {
      name: "achievementYear",
      label: "achievement year",
      type: "number",
      placeholder: "eg. Micheal",
      // errorMsg: "put your achievement year.",
    },
    achievementDescription: {
      name: "achievementDescription",
      label: "achievement description",
      type: "text",
      placeholder: "eg. Prior",
      // errorMsg: "put your achievement description.",
    },
  },
};

export default form;
