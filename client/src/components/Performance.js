import "../styles/performance.css"

function Performance(props) {
  // console.log(props.performance);
  const performance = props.performance

  return (
    <div >
      <h1>Performence graph</h1>
      <p>{performance?.data.userId}</p>
    </div>
  );
}

export default Performance;