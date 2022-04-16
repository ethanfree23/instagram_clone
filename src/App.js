import React, { useState, useEffect } from 'react'
import './App.css';
import Post from './Post.js'
import { db, auth } from './firebase'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Input from '@material-ui/core/Input';
import { Button } from '@mui/material';



function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  const [username, setUsername] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

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
  }, [posts]);

  const signUp = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .catch((error) => alert(error.message))
  }
  return (
    <div className="app">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                className="app_headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
                alt=""
              />
            </center>
            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.bubbles)}
            />
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.bubbles)}
            />
            <Input
              placeholder="password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.bubbles)}
            />
          </form>
          <Button onClick={signUp}>Sign Up</Button>
        </div>
      </Modal>
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt=""
        />
      </div>
      <Button onClick={() => setOpen(true)}>SignUp</Button>

      <h1>This is the start of something great!😀</h1>
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

      {/* Footer */}
    </div>
  );
}

export default App;

// imageURL="https://media.gq.com/photos/59dfc6d9d61cb80476584e18/1:1/w_676,h_676,c_limit/guy-fieiri-flame.jpg"/>