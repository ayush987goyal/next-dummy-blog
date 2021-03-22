import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '../models/post';

const postsDirectory = path.join(process.cwd(), 'posts');

function getPostData(fileName: string) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, '');

  const postData = {
    slug: postSlug,
    content,
    ...data,
  };

  return postData as Post;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => getPostData(postFile));
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.isFeatured);
}
