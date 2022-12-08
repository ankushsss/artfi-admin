import React from "react";

const api = () => {
  return {
    changePassword: `${
      process.env.React_App_Base_Url
    }/api/updatepassword?email=${localStorage.getItem("email")}`,
    adminRegistration: `${process.env.React_App_Base_Url}/api/register-admin`,
    superAdminRegistration: `${process.env.React_App_Base_Url}/api/register-superadmin`,
    userRegistration: `${process.env.React_App_Base_Url}/api/register-user`,
    createArtist: `${process.env.React_App_Base_Url}/api/artist/createartist/artist`,
    // createWhitelist: `${process.env.React_App_Base_Url}/api/whitelist/createwhitelist/whitelist`,
    //:type/:id

    getArtists: `${process.env.React_App_Base_Url}/api/artist/getallartist`,
    getUsers: `${process.env.React_App_Base_Url}/api/getallrole`,
    updateArtist: `${process.env.React_App_Base_Url}/api/artist/updateartist/artist`,
    addTeamMember: `${process.env.React_App_Base_Url}/api/team/createteam/team`,
    addMedia: `${process.env.React_App_Base_Url}/api/media/createmediapartner/media`,
    fetchTeamData: `${process.env.React_App_Base_Url}/api/team/getallteam`,
    fetchMediaData: `${process.env.React_App_Base_Url}/api/media/getallmediapartner`,
    superAdminLogin: `${process.env.React_App_Base_Url}/api/login-superadmin`,
    adminLogin: `${process.env.React_App_Base_Url}/api/login-admin`,
    userLogin: `${process.env.React_App_Base_Url}/api/login-user`,
    updateTeam: `${process.env.React_App_Base_Url}/api/team/updateteam/team`,
    addHeaderData: `${process.env.React_App_Base_Url}/api/offering/addheaderdata/offering`,
    fetchHeaderData: `${process.env.React_App_Base_Url}/api/offering/getallheader`,
  };
};
export const apiWithParams = (id) => {
  return {
    editUser: `${process.env.React_App_Base_Url}/api/updateuser/${id}`,
    getUserById: `${process.env.React_App_Base_Url}/api/getalluserbyid/${id}`,
    getSingleArtist: `${process.env.React_App_Base_Url}/api/artist/getartist/${id}`,
    updateUser: `${process.env.React_App_Base_Url}/api/updateuser/${id}`,
    getTeamById: `${process.env.React_App_Base_Url}/api/team/getteam/${id}`,
    updateMedia: `${process.env.React_App_Base_Url}/api/media/updatemediapartner/${id}`,
    getOfferById: `${process.env.React_App_Base_Url}/api/offering/getoffering/${id}`,
    addMint: `${process.env.React_App_Base_Url}/api/offering/addnewmint/${id}`,

    createWhitelist: `${process.env.React_App_Base_Url}/api/offering/addnewwhitelist/offering/${id}`,
    addDetailsPage: `${process.env.React_App_Base_Url}/api/offering/createdetailpage/offering/${id}`,
    addNFTDesign: `${process.env.React_App_Base_Url}/api/offering/postnftdesign/offering/${id}`,
    deleteTeam: `${process.env.React_App_Base_Url}/api/team/deleteteam/${id}`,
    deleteMedia: `${process.env.React_App_Base_Url}/api/media/deletemediapartner/${id}`,
    deleteArtist: `${process.env.React_App_Base_Url}/api/artist/deleteartist/${id}`,
    deleteUser: `${process.env.React_App_Base_Url}/api/deleteuser/${id}`,
  };
};
export const apiWithTwoParams = (id, buttonType) => {
  return {
    createAnnouncement: `${process.env.React_App_Base_Url}/api/offering/addnewannoucment/${id}/${buttonType}`,
    createUnveiling: `${process.env.React_App_Base_Url}/api/offering/addnewannoucmentwhitelist/${id}/${buttonType}`,

    deleteoffering: `${process.env.React_App_Base_Url}/api/offering/deleteoffering/${id}`,
  };
};
export default api;
