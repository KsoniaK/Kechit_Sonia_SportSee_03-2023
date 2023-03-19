import "../styles/sessionsAverage.css"

function SessionsAverage(props) {
  // console.log(props.sessions);
  const sessions = props.sessions

  return (
    <div >
      <h1>Sessions average graph</h1>
      <p>{sessions?.data.userId}</p>
    </div>
  );
}

export default SessionsAverage;