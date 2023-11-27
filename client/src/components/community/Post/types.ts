import {PostsAttributes} from '../../../pages/CommunityPage/index';

export interface PostProps {
  setCurrentPage: (value: number) => void;
  setPosts: (value: PostsAttributes[]) => void;
  posts: PostsAttributes[];
}

export interface Post {
  user_id: number;
  title: string;
  content: string;
  likes: number;
  dislikes: number;
  created_at: string;
  views: number;
  Post_comments: Post_comment[];
  User?: User;
}
export interface User {
  nickname: string;
  rank: number;
}

export interface Post_comment {
  id: number;
  user_id: number;
  post_id: number;
  content: string;
  likes: number;
  dislikes: number;
  created_at: Date;
  User: User;
  Post_comment_likeds: Post_comment_likeds[];
}
export interface Post_comment_likeds {
  user_id?: number;
}
