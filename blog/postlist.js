import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
       axios.get('http://localhost:3000/posts')
           .then(response => setPosts(response.data))
           .catch(error => console.error(error));
   }, []);

   return (
       <div>
           <h1>Blog Posts</h1>
           <ul>
               {posts.map(post => (
                   <li key={post._id}>
                       <h2>{post.title}</h2>
                       <p>{post.content}</p>
                   </li>
               ))}
           </ul>
       </div>
   );
};

export default PostList;
