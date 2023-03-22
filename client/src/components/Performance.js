import { useEffect, useState } from 'react';
import axios from 'axios';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts";
import "../styles/performance.css"

function Performance() {
  // ----------------------- V1 --------------------------
  // const performance = props.performance
  // ----------------------- V3 --------------------------
  const [performance, setPerformance] = useState(null)

    useEffect(() => {
      axios.get(`http://localhost:3000/user/12/performance`)
      .then((response) => {
        setPerformance(response.data)
      })
    }, [])
  
  return (
    <div >
      <h1>Performence graph</h1>
      <p>{performance?.data.userId}</p>
    </div>
  //   <>
  //     <h1>Performence graph</h1>
  //     <RadarChart outerRadius={90} width={730} height={250} data={performance}>
  //       <PolarGrid />
  //       <PolarAngleAxis dataKey="subject" />
  //       <PolarRadiusAxis angle={30} domain={[0, 150]} />
  //       <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  //       <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
  //       <Legend />
  //     </RadarChart>
  // </>
  );
}

export default Performance;