import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import HomePage from "./components/HomePage";
import CreateRoomPage from "./components/CreateRoomPage";
import RoomJoinPage from "./components/RoomJoinPage";


const Routes = () => {
   return (
        <BrowserRouter>
            <Route component = { HomePage }  path="/" exact />
            <Route component = { CreateRoomPage }  path="/create" />
            <Route component = { RoomJoinPage }  path="/join" />
        </BrowserRouter>
   )
}

export default Routes;