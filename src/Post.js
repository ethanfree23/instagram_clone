import React from 'react'
import "./Post.css"
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageURL }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src=""
          // src="https://www.marketing-mojo.com/wp-content/uploads/2013/02/Jack-Donaghy.jpg"
        />
        <h3>{username}</h3>


      </div>
      {/* header -> avatar + username */}

      <img
        className="post__image"
        src={imageURL}
      />
      {/* image */}

      <h4 className="post__text"><strong>{username}</strong>{caption}</h4>
      {/* username + caption */}
    </div>

  )
}

export default Post;