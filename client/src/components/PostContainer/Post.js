import React, { useEffect, useState } from 'react';
import './post.css';
import profileImg from '../Images/Profile.png';
import likeIcon from '../Images/like.png';
import commentIcon from '../Images/speech-bubble.png';
import shareIcon from '../Images/share.png';
import moreOptions from '../Images/more.png';
import anotherLikeIcon from '../Images/setLike.png';
import axios from 'axios';

export default function Post({ post }) {
  const [like, setLike] = useState(likeIcon);
  const [count, setCount] = useState(post.like.length);
  const [Comments, setComments] = useState([]);
  const [commentWritting, setCommentWritting] = useState('');
  const [show, setShow] = useState(false);
  const [user, setUser] = useState([]);
  const accessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzNiZGE3ODVhZWVkMTMxNTUxMTljMCIsInVzZXJuYW1lIjoiVXNlciBPbmUiLCJpYXQiOjE2Njg2MDUzMjh9.I1HiBmFNpoqDmajuDp8jBSFrFx597SQQFT0R0yhzOc8';

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/user/post/${post.user}`,
          {
            headers: {
              token: accessToken,
            },
          }
        );
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [post.user]);

  const handleLike = () => {
    if (like === likeIcon) {
      setLike(anotherLikeIcon);
      setCount(count + 1);
    } else {
      setLike(likeIcon);
      setCount(count - 1);
    }
  };

  const addComment = () => {
    const comment = {
      id: '61fsbf23123123123123',
      username: 'Kevin',
      title: `${commentWritting}`,
    };
    setComments(Comments.concat(comment));
  };

  const handleComment = () => {
    addComment();
  };

  const handleShow = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div className="postContainer">
      <div className="subPostContainer">
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {user.profile === '' ? (
              <img src={profileImg} alt="profil" className="postImg" />
            ) : (
              <img src={user.profile} alt="profil" className="postImg" />
            )}
            <div>
              <p style={{ marginLeft: '5px', textAlign: 'start' }}>
                {user.username}
              </p>
              <p
                style={{
                  fontSize: '11px',
                  textAlign: 'start',
                  marginLeft: 5,
                  marginTop: -13,
                  color: '#aaa',
                }}
              >
                Suivi par Sofian
              </p>
            </div>
            <img src={moreOptions} alt="plus d'options" className="moreIcon" />
          </div>
          <p
            style={{
              textAlign: 'start',
              width: '96%',
              marginLeft: 10,
              marginTop: 0,
            }}
          >
            {post.title}
          </p>
          <img
            src={post.image}
            alt="illustration du post"
            className="postImages"
          />
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', marginLeft: '10px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={like}
                  alt="j'aime"
                  className="iconsForPost"
                  onClick={handleLike}
                />
                <p onClick={handleLike} style={{ marginLeft: '6px' }}>
                  {count} j'aime
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '20px',
                  cursor: 'pointer',
                }}
              >
                <img
                  src={commentIcon}
                  alt="commente"
                  className="iconsForPost"
                  onClick={handleShow}
                />
                <p onClick={handleShow} style={{ marginLeft: '5px' }}>
                  {post.comments.length} commentaires
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: 90,
                  cursor: 'pointer',
                }}
              >
                <img
                  style={{ marginLeft: '45px' }}
                  src={shareIcon}
                  alt="commente"
                  className="iconsForPost"
                />
                <p>Partage</p>
              </div>
            </div>
          </div>
          {show === true ? (
            <div style={{ padding: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={profileImg} alt="profil" className="postImg" />
                {/* <p style={{ marginLeft: '6px' }}>Kevin</p> */}
                <input
                  type="text"
                  className="commentInput"
                  placeholder="Commente ce post"
                  onChange={(e) => setCommentWritting(e.target.value)}
                />
                <button onClick={handleComment} className="addCommentBtn">
                  Post
                </button>
              </div>
              {Comments.map((item) => (
                <div key={item.id} style={{ alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={profileImg} alt="profil" className="postImg" />
                    <p
                      style={{ marginLeft: '6px', fontSize: 18, marginTop: 6 }}
                    >
                      {item.username}
                    </p>
                  </div>
                  <p
                    style={{
                      marginLeft: '57px',
                      textAlign: 'start',
                      marginTop: -16,
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      marginLeft: '57px',
                      textAlign: 'start',
                      marginTop: -10,
                      color: '#aaa',
                      fontSize: 11,
                    }}
                  >
                    Répondre
                  </p>
                </div>
              ))}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}
