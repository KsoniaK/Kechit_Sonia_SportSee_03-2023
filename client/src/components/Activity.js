import "../styles/activity.css"

function Activity(props) {
  // console.log(props.activity);
  const activity = props.activity

  return (
    <div >
      <h1>Activity graph</h1>
      <p>{activity?.data.userId}</p>
    </div>
  );
}

export default Activity;