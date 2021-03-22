import { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';
import { Post } from '../../models/post';

interface PostDetailPageProps {
  post: Post;
}

const PostDetailPage: FC<PostDetailPageProps> = ({ post }) => {
  return <PostContent post={post} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const postData = getPostData(slug as string);

  return {
    props: { post: postData },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
