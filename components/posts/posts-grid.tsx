import { FC } from 'react';

import { Post } from '../../models/post';
import PostItem from './post-item';
import classes from './posts-grid.module.css';

export interface PostsGridProps {
  posts: Post[];
}

const PostsGrid: FC<PostsGridProps> = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
