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

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";
import SoftSnackbar from "components/SoftSnackbar";


// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import axios from "axios";

// Images
import curved9 from "assets/images/curved-images/curved9.jpg";
import {useCookies} from "react-cookie"
import SoftAlert from "components/SoftAlert";

// @mui material components
import Icon from "@mui/material/Icon";
import {login} from "redux/loginSlice";
import { useDispatch, useSelector } from 'react-redux';
import { Grid, MenuItem, Select } from "@mui/material";


function Cover(props) {
  const [rememberMe, setRememberMe] = useState(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [role, setRole] = useState("")
  const dispatch = useDispatch()
  const [cookie, setCookie] = useCookies(["artfi_token"]);
  const [alertMessage, setAlertMessage] = useState({
    open:false,
    type:"",
    message:"",
    title:""
  })

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const loginCall = () => {
    dispatch(login({user,role}))
      .then((response) => {
        // console.log(response.payload.user)          
        localStorage.setItem("email", response.payload.user.email);
        localStorage.setItem("name", response.payload.user.fullname);
        props.setLogin(true);
        setCookie("artfi_token", response.payload.token);
        setAlertMessage({
          open:true,
          message:"login success",
          type:"success",
          title:"Success",

      })
      })
      .catch((error) => {
        setAlertMessage({
          open:true,
          message:`${error}`,
          type:"error",
          title:"Error",

      })
      });
  };

  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <SoftBox component="form" role="form">
        <SoftBox mb={2} lineHeight={1.25}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </SoftBox>
        <SoftBox mb={2} lineHeight={1.25}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </SoftBox>
        
        <SoftBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
          <SoftTypography
            component="label"
            variant="caption"
            fontWeight="bold"
            textTransform="capitalize"
          >
            Role
          </SoftTypography>
        </SoftBox>
        
        <Select input={<SoftInput />}  value={role} onChange={(e)=>setRole(e.target.value)}>
          <MenuItem value="superadmin" >Super Admin</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="user">User</MenuItem>
        </Select>
      
      
        <SoftBox mt={4} mb={1}>
          <SoftButton onClick={() => loginCall()} variant="gradient" color="info" fullWidth>
            sign in
          </SoftButton>
        </SoftBox>
      </SoftBox>
      <SoftSnackbar
          color={alert.type}
          icon="notifications"
          title={alert.title}
          content={alert.messege}
          open={alert.show}
          close={()=>setAlert({...alert,show:false})}
        />
        <SoftSnackbar
        color={alertMessage.type}
        icon="notifications"
        title={alertMessage.title}
        content={alertMessage.message}
        open={alertMessage.open}
        close={()=>{setAlertMessage({...alertMessage,open:false})}}
        />
    </CoverLayout>

  );
}

export default Cover;
