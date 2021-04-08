import { useEffect, useState } from "react";
import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadPosts } from "../actions/auth";

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

Posts.PropTypes = {
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { loadPosts })(Posts);
