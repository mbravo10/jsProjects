import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";

function Teams({ authenticated }) {
  const [data, setData] = useState({});
  useEffect(() => {
    const getD = async () => {
      const res = await axios.get("/api/teams");
      setData({ ...res.data });
    };
    getD();
  }, []);

  const showTeams = data.map((x, idx) => (
    <ListGroup>
      <ListGroup.Item>{x.teams}</ListGroup.Item>
    </ListGroup>
  ));

  return authenticated ? showTeams : <h1>Login to see teams</h1>;
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Teams);
