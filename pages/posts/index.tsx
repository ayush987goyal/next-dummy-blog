import { FC } from 'react';
import { GetStaticProps } from 'next';

import { Post } from '../../models/post';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

interface AllPostsPageProps {
  posts: Post[];
}

const AllPostsPage: FC<AllPostsPageProps> = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: { posts: allPosts },
  };
};

export default AllPostsPage;
