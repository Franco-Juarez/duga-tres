import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      category: matterResult.data.category,
      author: matterResult.data.category,
      image: matterResult.data.image || '/default-image.jpg',
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    image: matterResult.data.image || '/default-image.jpg',
    ...matterResult.data,
  };
}

export function getLatestPosts() {
  const allPostsData = getSortedPostsData();

  // Obtener los últimos 4 artículos ordenados por fecha (del más nuevo al más viejo)
  const latestPosts = allPostsData
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 4);

  return latestPosts;
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getPostsByCategory(category) {
  const allPostsData = getSortedPostsData();

  // Filtrar los artículos por categoría
  const filteredPosts = allPostsData.filter(post => post.category === category);

  return filteredPosts;
}

export function getPostsByCategoryPosts(category, currentPostId) {
  const allPostsData = getSortedPostsData();

  // Filtrar los artículos por categoría y excluir el post actual
  const filteredPosts = allPostsData.filter(post => post.category === category && post.id !== currentPostId);

  return filteredPosts;
}
