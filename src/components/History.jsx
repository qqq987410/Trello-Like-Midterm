import { useState } from 'react';
import styles from '../styles/History.module.scss';
import Cards from '../components/Cards.jsx';
import Footer from '../components/Footer.jsx';
import { cardsContext } from '../utils/createContext.js';

function History({ historyList }) {
  const [cards, setCards] = useState([]);
  const value = { cards, setCards };

  return (
    <cardsContext.Provider value={value}>
      <div className={styles.container}>
        <div className={styles.title}>{historyList.title}</div>
        <Cards />
        <Footer />
      </div>
    </cardsContext.Provider>
  );
}

export default History;
