import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function Home() {
  const [teams, setTeams] = useState([]);
  const [userName, setUserName] = useState([]);
  const [userBio, setUserBio] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/profile")
      .then((res) => res.json())
      .then((res) => {
        res.forEach((item) => {
          setTeams((info) => info.concat(item.teams));
        });
      })
      .catch((err) => err);
  }, []);

  return (
    <>
      <h1> The current user singed up favorite teams</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Teams</th>
            <th>Bio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          {teams.map((x) => (
            <tr> {x} </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
