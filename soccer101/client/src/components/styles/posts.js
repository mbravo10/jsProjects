import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Posts = ({ posts }) => {
  const postsThrough = posts.map((post, ind) => (
    <Card border="primary" style={{ width: "25rem" }} key={ind}>
      <Card.Header>{post.title}</Card.Header>
      <Card.Body>
        <Card.Text>{post.content}</Card.Text>
      </Card.Body>
    </Card>
  ));

  return postsThrough;
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(Posts);
