import { useEffect, useState } from "react";
import { ListGroup, Image, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import axios from "axios";

function Teams({ authenticated }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getD = async () => {
      const res = await axios.get("/api/teams");
      setData([...res.data.teams]);
    };
    getD();
  }, []);

  const goThrough = data.map((x, idx) => (
    <ListGroup.Item key={idx}>
      <Image className="photo" src={x.crestUrl} /> {x.name}
    </ListGroup.Item>
  ));
  /*const showTeams = data.teams.map((x, idx) => (
    <ListGroup>
      <ListGroup.Item>{x}</ListGroup.Item>
    </ListGroup>
  ));*/

  return authenticated ? (
    <>
      <Row>
        <Col sm={3}>
          <ListGroup> {goThrough}</ListGroup>
        </Col>
      </Row>
    </>
  ) : (
    <h1>Login to see teams</h1>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Teams);
