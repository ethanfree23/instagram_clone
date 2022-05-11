import React from 'react'
import "./Post.css"
import Avatar from "@material-ui/core/Avatar";
import { useState, useEffect } from 'react';
import { db } from './firebase';

function Post({ postId, username, caption, imageURL }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      const unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {
      unsubscribe();
    }
  }, [postId]);

  const postComment = (event) => {

  }

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src=""
        />
        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageURL} />

      <h4 className="post__text"><strong>{username} </strong>{caption}</h4>

      <div className="post__comments">
        {comments.map((comment) => (
          <p>
            <strong>{comment.username} </strong> {comment.text}
          </p>
        ))}
      </div>

      <form className="post__commentBox">
        <input
          className="post__input"
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="post__button"
          disabled={!comment}
          type="submit"
          onClick={postComment}
        >
          Post
        </button>
      </form>
    </div>

  )
}

export default Post;