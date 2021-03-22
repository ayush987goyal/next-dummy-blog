import { FC } from 'react';
import ReactMarkdown from 'react-markdown';

import { Post } from '../../../models/post';
import PostHeader from './post-header';
import classes from './post-content.module.css';

export interface PostContentProps {
  post: Post;
}

const PostContent: FC<PostContentProps> = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
