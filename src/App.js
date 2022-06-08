import "./App.css";
import DashBoard from "./DashBoard";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Users from "./Users";
import CreateUser  from "./CreateUser";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import CreateProfile from "./CreateProfile";

import ViewProfile from "./ViewProfile";
import EditProfile from "./EditProfile";

function App() {
  return (
    <>
    <BrowserRouter>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />
            <div className="container-fluid">
              <Routes>
                <Route path="/Dashboard" element={<DashBoard />} />

                <Route path="/Users" element={<Users />} />
                <Route path="/Create-user" element={<CreateUser />} />
                <Route path="/user/:id" element={<ViewUser />} />
                <Route path="/edit-user/:id" element={<EditUser />} />

                <Route path="/Profile" element={<Profile />} />
                <Route path="/create-profile" element={<CreateProfile />} />
                <Route path="/profile/:id" element={<ViewProfile />} />

                <Route path="/edit-profile/:id" element={<EditProfile />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
