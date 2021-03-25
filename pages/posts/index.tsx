import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Post } from '../../models/post';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

interface AllPostsPageProps {
  posts: Post[];
}

const AllPostsPage: FC<AllPostsPageProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All posts</title>
        <meta name="description" content="A list of all posts" />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: { posts: allPosts },
  };
};

export default AllPostsPage;
