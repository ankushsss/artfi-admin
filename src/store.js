import { configureStore } from "@reduxjs/toolkit";

import artistsReducer from "./redux/artistTableSlice";
import userRoleSlice from "redux/userRoleSlice";
import userGetSlice from "redux/userGetSlice";
import artistAddReducer from "redux/artistAddSlice";
import artistUpdateReducer from "redux/artistUpdateSlice";
import artistSingleSlice from "redux/artistSingleSlice";
import userGetByIdSlice from "redux/userGetByIdSlice";
import teamGetByIdSlice from "redux/teamGetByIdSlice";
import loginSlice from "redux/loginSlice";
import teamAddSlice from "redux/teamAddSlice";
import mediaAddSlice from "redux/mediaAddSlice";
import teamGetSlice from "redux/teamGetSlice";
import mediaGetSlice from "redux/mediaGetSlice";
import teamUpdateReducer from "redux/teamUpdateSlice";
import { mediaUpdateReducer } from "redux/mediaUpdateSlice";
import { teamDeleteReducer } from "redux/teamDeleteSlice";
import { mediaDeleteReducer } from "redux/mediaDeleteSlice";
import { artistDeleteReducer } from "redux/artistDeleteSlice";
import { userDeleteReducer } from "redux/userDeleteSlice";
import addOfferingHeader from "redux/addOfferingHeader";
import headerListSlice from "redux/headerListSlice";
import getOfferByIdSlice from "redux/getOfferById";
import createNewAnnouncement from "redux/createAnnouncementSlice";
import createUnveilingSlice from "redux/createUnveilingSlice";
import createWhitelistReducer from "redux/createWhitelistSlice";
import getWhitelistById from "redux/getWhitelistById";
import addDetailsReducer from "redux/addDetailsSlice";
import addNFTDesignReducer from "redux/addNFTDesignSlice";

import { addMintSlice } from "redux/addMintDataSlice";
import deleteOfferSlice from "redux/deleteOffering";
export const store = configureStore({
  reducer: {
    artists: artistsReducer,
    addArtist: artistAddReducer,
    updateArtist: artistUpdateReducer,
    updateTeam: teamUpdateReducer,
    singleArtist: artistSingleSlice,
    userList: userGetSlice,
    addUser: userRoleSlice,
    loginS: loginSlice,
    addTeam: teamAddSlice,
    addMedia: mediaAddSlice,
    fetchTeam: teamGetSlice,
    fetchMedia: mediaGetSlice,
    singleUser: userGetByIdSlice,
    updateMedia: mediaUpdateReducer,
    singleTeam: teamGetByIdSlice,
    deleteTeam: teamDeleteReducer,
    deleteMedia: mediaDeleteReducer,
    deleteArtist: artistDeleteReducer,
    deleteUser: userDeleteReducer,
    addHeader: addOfferingHeader,
    headerList: headerListSlice,
    offer: getOfferByIdSlice,
    announcement: createNewAnnouncement,
    addMint: addMintSlice,
    unveiling: createUnveilingSlice,
    createWhitelist: createWhitelistReducer,
    addDetailsPage: addDetailsReducer,
    postDesigns: addNFTDesignReducer,
    getWhitelist: getWhitelistById,
    deleteOffer: deleteOfferSlice,
  },
});
