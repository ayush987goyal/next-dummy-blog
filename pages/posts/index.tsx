import AllPosts from '../../components/posts/all-posts';
import { Post } from '../../models/post';

const DUMMY_POSTS: Post[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React framework for production - it makes building fillstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React framework for production - it makes building fillstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React framework for production - it makes building fillstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React framework for production - it makes building fillstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10',
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
