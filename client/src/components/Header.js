import "../styles/header.css";

function Header(props){
  const user = props.user
  const firstName = user?.data.userInfos.firstName
  return(
    <header>
      <h1>Bonjour {firstName}</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  )
}
export default Header;