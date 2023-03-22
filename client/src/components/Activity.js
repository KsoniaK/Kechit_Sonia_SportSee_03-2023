import { useEffect, useState } from 'react';
import axios from 'axios';
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from "recharts";
import "../styles/activity.css"

function Activity(props) {
  // ----------------------- V1 --------------------------
  // const activity = props.activity
  // ----------------------- V3 --------------------------
  const [activity, setActivity] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:3000/user/12/activity`)
    .then((response) => {
      setActivity(response.data)
    })
  }, [])

  return (
    <div >
      <h1>Activity graph</h1>
      <p>{activity?.data.userId}</p>
    </div>
    // <>
    // <h1>Activity graph</h1>
    //   <BarChart width={730} height={250} data={activity}>
    //     <CartesianGrid strokeDasharray="3 3" />
    //     <XAxis dataKey="name" />
    //     <YAxis />
    //     <Tooltip />
    //     <Legend />
    //     <Bar dataKey="pv" fill="#8884d8" />
    //     <Bar dataKey="uv" fill="#82ca9d" />
    //   </BarChart>
    // </>
  );
}
export default Activity;