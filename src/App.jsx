import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ArticleSection from './components/ArticleSection.jsx';
import Footer from './components/Footer.jsx';

const articles = [
  {
    id: 1,
    category: 'Technology',
    title: 'Getting started with web development',
    description: 'Explore the building blocks of the web and learn how HTML, CSS and JavaScript work together.',
    author: 'DEV@Deakin team',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    category: 'Study tips',
    title: 'Make your study time more productive',
    description: 'Simple planning habits can help you break large assignments into manageable tasks.',
    author: 'Student community',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277aauto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    category: 'Community',
    title: 'Learning together through projects',
    description: 'Share what you build, learn from other students and get inspired by new ideas.',
    author: 'DEV@Deakin team',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80'
  }
];

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ArticleSection title="Featured Articles" articles={articles} />
        <ArticleSection title="Latest Articles" articles={[...articles].reverse()} />
      </main>
      <Footer />
    </>
  );
}