import { useEffect, useState } from "react";
import axios from "axios";

// ------------------------- V1 ------------------------
// function useFetch(id){
//   const [user, setUser] = useState(null)
//   const [activity, setActivity] = useState(null)
//   const [sessions, setSessions] = useState(null)
//   const [performance, setPerformance] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     setLoading(true)
//     axios.get(id)
//     .then((response) => {
//       setUser(response.data)
//       setActivity(response.data)
//       setSessions(response.data)
//       setPerformance(response.data)
//     }).catch((err) => {
//       setError(err);
//     }).finally(() =>{
//       setLoading(false)
//     })
//   }, [id])

//   return {user, activity, sessions, performance, loading, error}
// }
// export default useFetch;

// ------------------------- V2 ------------------------
// const useFetch = (id) => {
//   const [user, setUser] = useState([]);
//   const [activity, setActivity] = useState([]);
//   const [sessions, setSessions] = useState([]);
//   const [performance, setPerformance] = useState([]);

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(true);

//   useEffect(() => {
//     (async () => {
//       setError(false);
//       try{
//         // const result = await axios.get(`http://localhost:3000/user/${id}`);
//         const result = await axios.get(`http://localhost:3000/user/12`);
//         // const result2 = await axios.get(`http://localhost:3000/user/${id}/average-sessions`);
//         const result2 = await axios.get(`http://localhost:3000/user/12/average-sessions`);
//         // const result3 = await axios.get(`http://localhost:3000/user/${id}/activity`);
//         const result3 = await axios.get(`http://localhost:3000/user/12/activity`);
//         // const result4 = await axios.get(`http://localhost:3000/user/${id}/performance`);
//         const result4 = await axios.get(`http://localhost:3000/user/12/performance`);
//         setUser(result.data);
//         setActivity(result2.data);
//         setSessions(result3.data);
//         setPerformance(result4.data);
//       }catch(err){
//         setLoading(false);
//         setError(err);
//         console.log('error true :' , err);
//       }
//         setLoading(false);
//       })();
//   }, [id])

//   return [user, activity, sessions, performance, loading, error];
// }
// export default useFetch;