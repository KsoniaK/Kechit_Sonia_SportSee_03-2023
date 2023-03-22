import React, {useState, useEffect} from "react";
// import axios from "axios";
import { Routes, Route, Navigate } from "react-router-dom";
// import useFetch from "./service/service";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import "../src/App.css";

function App() {
  // ----------------------- V1 --------------------------
  // // const {user, loading, error} = useFetch(`http://localhost:3000/user/${userId}`);
  // const {user, loading, error} = useFetch(`http://localhost:3000/user/12}`);
  // // const {activity} = useFetch(`http://localhost:3000/user/${userId}/activity`);
  // const {activity} = useFetch(`http://localhost:3000/user/12/activity`);
  // // const {sessions} = useFetch(`http://localhost:3000/user/${userId}/average-sessions`);
  // const {sessions} = useFetch(`http://localhost:3000/user/12/average-sessions`);
  // // const {performance} = useFetch(`http://localhost:3000/user/${userId}/performance`);
  // const {performance} = useFetch(`http://localhost:3000/user/12/performance`);

  // if(loading) return <h1>LOADING ...</h1>
  // if(error) console.log(error);

  // ----------------------- V2 --------------------------
  // const {user, activity, sessions, performance, loading, error} = useFetch();
  // console.log(user);

  // if(loading) return <h1>LOADING ...</h1>
  // if(error) console.log(error);

  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Dashboard />} />
        <Route path="/*" element={<Navigate to="/404" replace />} />
        <Route path="/404" excat={true} element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

  // ----------------------- V1 --------------------------
// return (
//   <>
//   <Nav />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/user/:id" element={<Dashboard user={user} activity={activity} sessions={sessions} performance={performance} />} />
//       <Route path="/*" element={<Navigate to="/404" replace />} />
//       <Route path="/404" excat={true} element={<Error />} />
//     </Routes>
//   </>
// );
// }
// export default App;

