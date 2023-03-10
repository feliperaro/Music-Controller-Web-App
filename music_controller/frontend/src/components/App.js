import React, { Component } from "react";
import { render } from "react-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
  
import CreateRoomPage from "./CreateRoomPage";
import HomePage from "./HomePage";
import RoomJoinPage from "./RoomJoinPage";

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/create">Create Room</Link>
                        </li>
                        <li>
                        <Link to="/join">Join Room</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route exact path="/" element={<HomePage />} /> 
                    <Route path="/create" element={<CreateRoomPage />} />
                    <Route path="/join" element={<RoomJoinPage />} />                        
                </Routes> 
            </div>
        </Router>
    );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
