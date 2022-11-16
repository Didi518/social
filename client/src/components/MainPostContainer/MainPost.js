import React, { useEffect, useState } from 'react';
import './mainpost.css';
import ContentPost from '../ContentPostContainer/ContentPost';
import Post from '../PostContainer/Post';
import axios from 'axios';

export default function MainPost() {
  const accessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzNiZGE3ODVhZWVkMTMxNTUxMTljMCIsInVzZXJuYW1lIjoiVXNlciBPbmUiLCJpYXQiOjE2Njg2MDUzMjh9.I1HiBmFNpoqDmajuDp8jBSFrFx597SQQFT0R0yhzOc8';
  const [post, setPost] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/api/post/6373bda785aeed13155119c0`,
          {
            headers: {
              token: accessToken,
            },
          }
        );
        setPost(res.data);
      } catch (error) {}
    };
    getPosts();
  }, []);

  return (
    <div className="mainPostContainer">
      <ContentPost />
      {post.map((item) => (
        <Post post={item} key={item._id} />
      ))}
    </div>
  );
}
