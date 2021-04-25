import { CardDeck, Card, Button } from "react-bootstrap";
import { useEffect } from "react";
import { loadDiscussions } from "../actions/auth";
import { connect, useDispatch } from "react-redux";

function Forum({ posts, isAuthenticated }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDiscussions());
  }, [dispatch]);
  const post = posts.map((x) => (
    <Card>
      <Card.Header>{x.name}</Card.Header> {x.text}{" "}
      <Card.Footer>
        <Button variant="danger" size="sm">
          {" "}
          Delete post
        </Button>
        <Button variant="info" size="sm">
          {" "}
          Like{" "}
        </Button>
      </Card.Footer>
    </Card>
  ));
  return isAuthenticated ? (
    <>
      <CardDeck>{post}</CardDeck>
    </>
  ) : (
    <h1> Login to see discussions... </h1>
  );
}

const mapStateToProps = (state) => ({
  posts: state.posts,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loadDiscussions })(Forum);
