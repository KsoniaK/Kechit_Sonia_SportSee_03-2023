// import {useState, useEffect} from "react"
// import axios from "axios"
// import { Navigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
import Activity from "../components/Activity";
import Performance from "../components/Performance";
import SessionsAverage from "../components/SessionsAverage";
import "../styles/dashboard.css"

function Dashboard(props) {
  const user = props.user
  // const userData = props.user.data
  // console.log(userData);
  const activity = props.activity
  const sessions = props.sessions
  const performance = props.performance

  // // On isole l'id de l'URL
  // const { id } = useParams();
  // // Comparaison : id du sportif qui correspond à l'id présent dans l'URL
  // const userIdFiltred = userData.find((user) => user.id === id);
  // // Dans le cas où l'id dans l'URL est incorrect / modifié
  // if(!userIdFiltred){
  //   return <Navigate to="/404" />
  // }

  // -----------------------------
  // const {user, loading, error} = useFetch(`http://localhost:3000/user/${id}`);
  // const {user, loading, error} = useFetch(`http://localhost:3000/user/12`);
  // -----------------------------

  // ---------------------------
  // const [user, setUser] = useState(null)
  // const userDatas = user.data.id
  // console.log(userDatas);

  // useEffect(() => {
  //   axios.get(`http://localhost:3000/user/12`)
  //   .then((response) => {
  //     setUser(response.data)
  //   })
  // }, [])
  // ---------------------------

  return (
    <div>
      <h1>USER</h1>
      <p>{user?.data.id}</p>
      <Activity activity={activity} />
      <Performance performance={performance} />
      <SessionsAverage sessions={sessions} />
    </div>
  );
}

export default Dashboard;