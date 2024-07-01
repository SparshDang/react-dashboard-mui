import React from "react";
import style from './BaseScene.module.css';
import { Outlet } from "react-router-dom";

import TopBar from "./global/TopBar";
import SideBar from './global/SideBar';

import { colorModeContext, useMode } from "../themes";

import { CssBaseline, ThemeProvider } from "@mui/material";


export default function BaseScene() {
  const [theme,colorMode] = useMode();

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={style.app}>
        <SideBar/>
          <main className={style.content}>
            <TopBar />
            <Outlet/>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}
