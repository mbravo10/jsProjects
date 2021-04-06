import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
const axios = require("axios");

export default function Home() {
  const [userInfo, setUserInfo] = useState([]);
  const [loadedTeams, setLoadedTeams] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const userDataLoaded = userInfo.map((x, idx) => (
    <ListGroup.Item as="li" key={idx}>
      {x.bio}
    </ListGroup.Item>
  ));

  const userTeamLoaded = loadedTeams.map((x, idx) => (
    <ListGroup.Item as="li" key={idx}>
      {x}
    </ListGroup.Item>
  ));
  useEffect(() => {
    renderUsers();
  }, []);

  const renderUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/profile/");
    let resMap = res.data;
    let teams = res.data.map((x) => x.teams);
    setLoadedTeams([...loadedTeams, ...teams]);
    setUserInfo([...userInfo, ...resMap]);
    setIsLoaded(true);
  };

  return (
    <>
      <h1> The current users singed up favorite teams</h1>
      <ListGroup horizontal="sm">
        {isLoaded ? userDataLoaded : "Loading..."}
      </ListGroup>
      <ListGroup horizontal="sm">{isLoaded ? userTeamLoaded : "..."}</ListGroup>
    </>
  );
}
