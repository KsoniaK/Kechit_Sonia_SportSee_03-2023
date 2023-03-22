import { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "../styles/activity.css"

function Activity() {
  // console.log(props.activity);
  // const data = props.activity
  // ----------------------- V1 --------------------------
  // const activity = props.activity
  // const calories = props.activity.data.sessions[0].day;
  // console.log(calories);
  // ----------------------- V3 --------------------------
  // const [activity, setActivity] = useState(null)

  // useEffect(() => {
  //   axios.get(`http://localhost:3000/user/12/activity`)
  //   .then((response) => {
  //     console.log(response);
  //     setActivity(response.data)
  //   })
  // }, [])

  // ----------------------- V3 async --------------------------
  const [activity, setActivity] = useState(null)

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:3000/user/12/activity`)
      // console.log(response);
      setActivity(response.data)
    })();
  }, []);

  return (
    <>
      <h1>Activity graph</h1>
      <p>{activity?.data.userId}</p>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={activity}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis />
          <Tooltip />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
export default Activity;


// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// function Activity() {
//     return (
//       <ResponsiveContainer width="100%" aspect={3}>
//         <BarChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="pv" fill="#8884d8" />
//           <Bar dataKey="uv" fill="#82ca9d" />
//         </BarChart>
//       </ResponsiveContainer>
//     );
// }
// export default Activity;



// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from "recharts";
// import "../styles/activity.css"

// function Activity(props) {
//   // ----------------------- V1 --------------------------
//   const activity = props.activity
//   // ----------------------- V3 --------------------------
//   // const [activity, setActivity] = useState(null)

//   // useEffect(() => {
//   //   axios.get(`http://localhost:3000/user/12/activity`)
//   //   .then((response) => {
//   //     setActivity(response.data)
//   //   })
//   // }, [])

//   return (
//     <div >
//       <h1>Activity graph</h1>
//       <p>{activity?.data.userId}</p>
//     </div>
//     // <>
//     // <h1>Activity graph</h1>
//     //   <BarChart width={730} height={250} data={activity}>
//     //     <CartesianGrid strokeDasharray="3 3" />
//     //     <XAxis dataKey="name" />
//     //     <YAxis />
//     //     <Tooltip />
//     //     <Legend />
//     //     <Bar dataKey="pv" fill="#8884d8" />
//     //     <Bar dataKey="uv" fill="#82ca9d" />
//     //   </BarChart>
//     // </>
//   );
// }
// export default Activity;

