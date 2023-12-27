import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import TitleContainer from '../components/TitleContainer';
import { getSortedPostsData } from '../lib/posts';
import Slider from '../components/Slider';

//icons
import styles from "../styles/navBar.module.css";
import Society from "../components/svg/society";
import Economy from "../components/svg/economy";
import Work from "../components/svg/work";
import Imagine from "../components/svg/imagine";
import Future from "../components/svg/future";
import Thunder from "../components/svg/thunder";
import { useState } from 'react';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {

  const [selectedCategory, setSelectedCategory] = useState('últimos');

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  const filterPostsByCategory = (selectedCategory) => {
    if (selectedCategory.toLowerCase() === 'últimos') {
      return allPostsData
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3);
    } else {
      return selectedCategory
        ? allPostsData.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase())
        : allPostsData;
    }
  };

  const filteredPosts = filterPostsByCategory(selectedCategory);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <TitleContainer />
      <nav className={styles.filterNav}>
        <ul>
          <li>
            <Thunder
            color={selectedCategory === 'últimos' ? "#2D7676" : '#020408'}
            />
            <button 
            className={selectedCategory === 'últimos' ? styles.activeBtn : ''}
            key={"default"}
            onClick={() => handleButtonClick("últimos")}
            >Últimos</button>
          </li>
          <li>
            <Society
            color={selectedCategory === 'sociedad' ? "#2D7676" : '#020408'}
            />
            <button
            className={selectedCategory === 'sociedad' ? styles.activeBtn : ''} 
            key={"Sociedad"}
            onClick={() => handleButtonClick("sociedad")}
            >Sociedad</button>
          </li>
          <li>
            <Economy
            color={selectedCategory === 'economia' ? "#2D7676" : '#020408'}
            />
            <button 
            className={selectedCategory === 'economia' ? styles.activeBtn : ''} 
            key={"Economía"}
            onClick={() => handleButtonClick("economia")}
            >Economía</button>
          </li>
          <li>
            <Work
            color={selectedCategory === 'trabajo' ? "#2D7676" : '#020408'}
            />
            <button 
            className={selectedCategory === 'trabajo' ? styles.activeBtn : ''} 
            key={"Trabajo"}
            onClick={() => handleButtonClick("trabajo")}
            >Trabajo</button>
          </li>
          <li>
            <Future
            color={selectedCategory === 'futuro' ? "#2D7676" : '#020408'}
            />
            <button 
            className={selectedCategory === 'futuro' ? styles.activeBtn : ''} 
            key={"Futuro"}
            onClick={() => handleButtonClick("futuro")}
            >Futuro</button>
          </li>
          <li>
            <Imagine
            color={selectedCategory === 'imaginación política' ? "#2D7676" : '#020408'}
            />
            <button 
            className={selectedCategory === 'imaginación política' ? styles.activeBtn : ''} 
            key={"Imaginación política"}
            onClick={() => handleButtonClick("imaginación política")}
            >Imaginación política</button>
          </li>
        </ul>
      </nav>
      <Slider 
      postData={filteredPosts}
      />
    </Layout>
  );
}