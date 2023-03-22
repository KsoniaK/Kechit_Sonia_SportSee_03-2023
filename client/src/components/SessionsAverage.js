import { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/sessionsAverage.css"

function SessionsAverage() {
  // ----------------------- V1 --------------------------
  // const sessions = props.sessions
  // ----------------------- V3 --------------------------
  const [sessions, setSessions] = useState(null)

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:3000/user/12/average-sessions`)
      // console.log(response);
      setSessions(response.data)
    })();
  }, []);
    
  return (
    <div >
      <h1>Sessions average graph</h1>
      <p>{sessions?.data.sessions[0].day}</p>
    </div>
  );
}

export default SessionsAverage;