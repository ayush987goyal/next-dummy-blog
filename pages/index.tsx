import { FC } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Post } from '../models/post';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';

interface HomePageProps {
  posts: Post[];
}

const HomePage: FC<HomePageProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Imaple's Blog</title>
        <meta name="description" content="I post about programming" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: { posts: featuredPosts },
  };
};

export default HomePage;
