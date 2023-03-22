import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import Activity from "../components/Activity";
import Performance from "../components/Performance";
import SessionsAverage from "../components/SessionsAverage";
import Infos from '../components/Infos';
import "../styles/dashboard.css"

function Dashboard() {
  // ----------------------- V1 --------------------------
  // const user = props.user
  // const activity = props.activity
  // const sessions = props.sessions
  // const performance = props.performance

  // ----------------------- ID URL ----------------------
  // // Correspondance ID
  // // On isole l'id de l'URL
  // const {id} = useParams();
  // console.log(id);
  // const userId = Array(user.data);
  // console.log(userId);

  // // Comparaison : id du propriétaire qui correspond à l'id présent dans l'URL
  // const idFiltred = userId.find((u) => u.id === Number(id));

  // // Dans le cas où l'id dans l'URL est incorrect / modifié
  // if(!idFiltred){
  //   return <Navigate to="/404" />
  // }

  // ----------------------- V3 --------------------------
  // const [user, setUser] = useState(null)
  // const [activity, setActivity] = useState(null)
  // const [sessions, setSessions] = useState(null)
  // const [performance, setPerformance] = useState(null)

  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(true);

  // useEffect(() => {
  //   (async () => {
  //     setError(false);
  //     try{
  //       const result = await axios.get(`http://localhost:3000/user/12`);
  //       const result2 = await axios.get(`http://localhost:3000/user/12/average-sessions`);
  //       const result3 = await axios.get(`http://localhost:3000/user/12/activity`);
  //       const result4 = await axios.get(`http://localhost:3000/user/12/performance`);
  //       setUser(result.data);
  //       setActivity(result2.data);
  //       setSessions(result3.data);
  //       setPerformance(result4.data);
  //     }catch(err){
  //       setLoading(false);
  //       setError(err);
  //       console.log('error true :' , err);
  //     }
  //       setLoading(false);
  //     })();
  // }, [])

  // if(loading) return <h1>LOADING ...</h1>
  // if(error) console.log(error);

  return (
    <main className='main'>
      <Header />
      <Activity />
      <SessionsAverage />
      <Performance />
      <Infos />
    </main>
  );
}

export default Dashboard;

// ----------------------- V1 --------------------------
//   return (
//     <main className='main'>
//       <Header user={user}/>
//       <Activity activity={activity} />
//       <SessionsAverage sessions={sessions} />
//       <Performance performance={performance} />
//       <Infos />
//     </main>
//   );
// }

// export default Dashboard;