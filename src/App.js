import Dashboard from "Dashboard";
import Cover from "layouts/authentication/sign-in/cover";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "assets/theme";
import PublicRoutes from "PublicRoutes";
import { useCookies } from "react-cookie";

const App = () => {
  const [login, setLogin] = useState(false);
  const [cookie, setCookie, removeToken] = useCookies(["artfi_token"]);
  useEffect(() => {
    if (!cookie.artfi_token) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {login ? <Dashboard setLogin={setLogin} /> : <PublicRoutes setLogin={setLogin} />}
    </ThemeProvider>
  );
};

export default App;
