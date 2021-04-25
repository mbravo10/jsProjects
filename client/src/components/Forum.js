import { CardDeck, Card } from "react-bootstrap";
import { useEffect } from "react";
import { loadDiscussions } from "../actions/auth";
import { connect, useDispatch } from "react-redux";

function Forum({ posts, isAuthenticated }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDiscussions());
  }, [dispatch]);
  const post = posts.map((x) => <Card> {x.text} </Card>);
  return (
    <>
      <CardDeck>{post}</CardDeck>
    </>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loadDiscussions })(Forum);
