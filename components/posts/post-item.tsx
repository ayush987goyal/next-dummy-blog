import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Post } from '../../models/post';
import classes from './post-item.module.css';

export interface PostItemProps {
  post: Post;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  const { title, image, excerpt, date, slug } = post;

  const imagePath = `/images/posts/${slug}/${image}`;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>

          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
