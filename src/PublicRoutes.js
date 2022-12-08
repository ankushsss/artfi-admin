import Cover from 'layouts/authentication/sign-in/cover'
import SingupCover from 'layouts/authentication/sign-up/cover'
import React from 'react'
import PropTypes from "prop-types"
import { Navigate, Route, Routes } from 'react-router-dom'
import ChangePassword from 'Pages/ChangePassword'


const PublicRoutes = ({setLogin}) => {
  return (
    <div>
      <Routes >
        <Route exact path="/" element={<div style={{overflow:"hidden"}}><Cover setLogin={setLogin}/></div>}/>
        <Route exact path="/Signup" element={<SingupCover/>}/>
        
        <Route exact path="/Changepassword" element={<ChangePassword/>}/>
         <Route path="*" element={<div style={{overflow:"hidden"}}><Cover setLogin={setLogin}/></div>}/>
      </Routes>
    </div>
  )
}


export default PublicRoutes


