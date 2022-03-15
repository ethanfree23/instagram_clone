import React, { useState, useEffect } from 'react'
import './App.css';
import Post from './Post.js'
import { db } from './firebase'

function App() {
  const [posts, setPosts] = useState([
  ]);

  // useEffect => runs a piece of code based on a specific condition
  useEffect(() => {
    // "do this when the page loads, and not again... unless "posts" changes" is what useEffect is telling the computer
    db.collection('posts').onSnapshot(snapshot => {
      // every time a new psot is added, this code fires
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })))
    })
  }, [posts])

  return (
    <div className="app">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>I am a modal</h2>
        </Box>
      </Modal>
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt=""
        />
      </div>
      <h1>This is the start of something great! suck my ass! 😀</h1>
      {
        posts.map(({ id, post }) => (
          <Post
            key={id}
            username={post.username}
            caption={post.caption}
            imageURL={post.imageURL}
          />
        ))
      }

      {/* Posts */}

      {/* Footer */}
    </div>
  );
}

export default App;

// imageURL="https://media.gq.com/photos/59dfc6d9d61cb80476584e18/1:1/w_676,h_676,c_limit/guy-fieiri-flame.jpg"/>