import "./App.css";
import * as React from "react";

import Layout from "./components/layout/Layout";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import BuildingList from "./components/BuildingInformation/BuildingList";

import { Route, Switch } from "react-router-dom";
import WelcomeMessage from "./components/WelcomeMessage";
import LoginPage from "./modals/LoginPage";
import RegisterPage from "./modals/RegisterPage";

import useToken from "./store/loginStore";

const list = [1, 2, 3, 4];
const list2 = [3, 4];

const theme = createTheme({
  palette: {
    primary: {
      main: "#DC143C",
    },
  },
});

function App() {
  const { token, setToken } = useToken();

  const [laundryData, setData] = React.useState([]);

  const [timestampData, setTimestampData] = React.useState([])

  React.useEffect(() => {
    fetch("/laundry", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.splice(data.length - 1);
        setData(data);
        console.log(data);
      });
  }, []);

  React.useEffect(() => {
    fetch("/timestamp", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTimestampData(data);
        console.log(data);
      });
  }, []);

  const [openLogin, setOpenLogin] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);

  const [showFavorites, setShowFavorites] = React.useState(false);

  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };
  const handleClickRegister = () => {
    setOpenRegister(true);
  };
  const handleClose = () => {
    setOpenLogin(false);
    setOpenRegister(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout
        handleRegister={handleClickRegister}
        handleLogin={handleClickOpenLogin}
        loggedIn={token}
      >
        {openLogin && (
          <LoginPage
            loginOpen={openLogin}
            setToken={setToken}
            handleClose={handleClose}
          />
        )}
        {openRegister && (
          <RegisterPage 
            registerOpen={openRegister}
            setToken={setToken} 
            handleClose={handleClose} />
        )}
        <WelcomeMessage setFavorites={setShowFavorites} />
        <Switch>
          <Route path="/" exact={true}>
            {!showFavorites && <BuildingList data={laundryData} />}
            {showFavorites && <BuildingList data={laundryData} />}
          </Route>

          <Route path="/favorites"></Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
