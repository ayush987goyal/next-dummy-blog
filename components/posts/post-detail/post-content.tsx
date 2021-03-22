import { FC } from 'react';

import { Post } from '../../../models/post';
import PostHeader from './post-header';
import classes from './post-content.module.css';

const DUMMY_POST: Post = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting Started With NextJS',
  image: 'getting-started-nextjs.png',
  excerpt:
    'NextJS is the React framework for production - it makes building fillstack React apps and sites a breeze and ships with built-in SSR.',
  date: '2022-02-10',
  content: '# This is a first post',
};

export interface PostContentProps {}

const PostContent: FC<PostContentProps> = ({}) => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
};

export default PostContent;
