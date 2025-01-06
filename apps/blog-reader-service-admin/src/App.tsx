import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CacheEntryList } from "./cacheEntry/CacheEntryList";
import { CacheEntryCreate } from "./cacheEntry/CacheEntryCreate";
import { CacheEntryEdit } from "./cacheEntry/CacheEntryEdit";
import { CacheEntryShow } from "./cacheEntry/CacheEntryShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"BlogReaderService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CacheEntry"
          list={CacheEntryList}
          edit={CacheEntryEdit}
          create={CacheEntryCreate}
          show={CacheEntryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
