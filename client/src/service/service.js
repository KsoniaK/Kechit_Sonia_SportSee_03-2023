import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(id){
  const [user, setUser] = useState(null)
  const [activity, setActivity] = useState(null)
  const [sessions, setSessions] = useState(null)
  const [performance, setPerformance] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios.get(id)
    .then((response) => {
      setUser(response.data)
      setActivity(response.data)
      setSessions(response.data)
      setPerformance(response.data)
    }).catch((err) => {
      setError(err);
    }).finally(() =>{
      setLoading(false)
    })
  }, [id])

  return{user, activity, sessions, performance, loading, error}
}
export default useFetch;


// ---------------------

// function useFetch(id){
//   const [user, setUser] = useState(null)
//   const [activity, setActivity] = useState([])
//   const [performance, setPerformance] = useState([])
//   const [sessions, setSessions] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     (async () => {
//       setError(false);
//       try {
//         const result = await axios.get(`http://localhost:3000/user/${id}`);
//         const result2 = await axios.get(
//           // `http://localhost:3000/user/${id}/average-sessions`
//         );
//         const result3 = await axios.get(
//           // `http://localhost:3000/user/${id}/activity`
//         );
//         const result4 = await axios.get(
//           // `http://localhost:3000/user/${id}/performance`
//         );
//         setUser(result.data);
//         setActivity(result3.data);
//         setPerformance(result2.data);
//         setSessions(result4.data);
//       } catch (error) {
//         setLoading(false);
//         setError(true);
//         // console.error('error true :', error);
//       }
//       setLoading(false);
//     })();
//   }, [id]);

//   return{user, activity, performance, sessions, loading, error}
// }
// export default useFetch;

// -------------------------

// function useFetch(id){
//   const [user, setUser] = useState(null)
//   // const [activity, setActivity] = useState(null)
//   // const [sessions, setSessions] = useState([])
//   // const [performance, setPerformance] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     setLoading(true)
//     // axios.get(id)
//     try{
//       const result = axios.get(`http://localhost:3000/user/${id}`);
//       // const result2 = axios.get(`http://localhost:3000/user/${id}/average-sessions`);
//       // const result3 = axios.get(`http://localhost:3000/user/${id}/activity`);
//       // const result4 = axios.get(`http://localhost:3000/user/${id}/performance`);
//       setUser(result.data)
//       // setActivity(result2.data)
//       // setSessions(result3.data)
//       // setPerformance(result4.data)
//     }catch(err){
//       setError(err);
//     }finally{
//       setLoading(false)
//     }
//   }, [id])

//   return{user, loading, error}
// }
// export default useFetch;