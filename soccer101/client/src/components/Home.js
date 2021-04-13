import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { loadPosts } from "../actions/auth";
import "./styles.css";

const Posts = ({ posts }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);
  const teams = posts.map((post) => post.teams.toString() + " ");
  const source =
    "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=";
  const postsThrough = posts.map((post, ind) => (
    <>
      <Card border="primary" style={{ width: "25rem" }} key={ind}>
        <Card.Header>
          <Image
            roundedCircle
            className="photo"
            src={source + post.user.name}
            style={{ marginRight: "5px" }}
          />
          {post.user.name}
        </Card.Header>

        <Card.Body>
          <Card.Text>{post.bio}</Card.Text>
          <Card.Text>My favorite teams: {teams[ind]}</Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  ));

  return postsThrough;
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { loadPosts })(Posts);
