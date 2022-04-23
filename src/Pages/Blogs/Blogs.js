import React from 'react';
import Blog from './Blog/Blog';
import './Blogs.css';

const blogs = () => {
  return (
    <div className='blogs'>
      <h2>Blogs</h2>
      <hr />
      <Blog></Blog>
    </div>
  );
};

export default blogs;