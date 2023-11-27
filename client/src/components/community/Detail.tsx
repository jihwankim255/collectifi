import React from 'react';
import PostPage from './Post';
import {PostProps} from './Post/types';

const DetailPage = ({setCurrentPage, setPosts, posts}: PostProps) => {
  return <PostPage setCurrentPage={setCurrentPage} setPosts={setPosts} posts={posts}></PostPage>;
};

export default DetailPage;
