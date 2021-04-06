import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
const axios = require("axios");

export default function Home() {
  const [userInfo, setUserInfo] = useState([
    {
      bio: "",
      teams: [],
    },
  ]);

  useEffect(() => {
    async function renderUsers() {
      try {
        const res = await axios.get("http://localhost:5000/api/profile/");
        const { data } = res;
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    renderUsers();
  }, []);

  return (
    <>
      <h1> The current users singed up favorite teams</h1>
      <ul>
        <li>hi</li>
      </ul>
    </>
  );
}
