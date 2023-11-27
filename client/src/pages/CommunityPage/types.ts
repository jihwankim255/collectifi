export interface PostsAttributes {
  id: number;
  user_id: number;
  title: string;
  content: string;
  likes: number;
  dislikes: number;
  created_at: Date;
  views: number;
  Post_comments: object[];
  User?: User;
}
export interface User {
  nickname: string;
  rank?: number;
}
export interface IRank {
  id: number;
  user_id: number;
  post_id: number;
  likes: number;
  ranking: number;
}
