import { FC } from 'react';

import { Post } from '../../models/post';
import PostsGrid from './posts-grid';
import classes from './all-posts.module.css';

export interface AllPostsProps {
  posts: Post[];
}

const AllPosts: FC<AllPostsProps> = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
