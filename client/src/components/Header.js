import { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/header.css";

function Header(){
  const [user, setUser] = useState(null)

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:3000/user/12`)
      // console.log(response);
      setUser(response.data)
    })();
  }, []);

  const firstName = user?.data.userInfos.firstName

  return(
    <header>
      <h1>Bonjour {firstName}</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  )
}
export default Header;