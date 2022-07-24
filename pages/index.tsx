import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Card from '../components/Card';
import { Member } from '../interfaces';
import { Sun, Moon } from 'lucide-react';

const Home: NextPage = () => {
  const [theme, setTheme] = useState('light');
  const members: Member[] = [
    {
      id: 1,
      image: '/annie.jpg',
      name: 'Annie Easley',
      role: 'Data Scientist',
    },
    {
      id: 2,
      image: '/jonathan.jpg',
      name: 'Jonathan Smith',
      role: 'UI/UX Designer',
    },
    {
      id: 3,
      image: '/adele.jpg',
      name: 'Adele Goldberg',
      role: 'Full Stack Developer',
    },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(theme);
  };

  return (
    <div>
      <Head>
        <title>Cards - Next TS App</title>
        <meta
          name="description"
          content="Cards with light and dark mode using Next/TS/Sass"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${theme} height`}>
        <button onClick={toggleTheme}>
          {theme === 'light' ? <Sun /> : <Moon />}
        </button>
        <div className="cards">
          {members?.map((member: Member) => (
            <Card theme={theme} member={member} key={member.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
