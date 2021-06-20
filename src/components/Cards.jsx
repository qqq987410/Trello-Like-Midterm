import { useContext } from 'react';
import styles from '../styles/Cards.module.scss';
import { cardsContext } from '../utils/createContext.js';

function Cards() {
  const { cards } = useContext(cardsContext);

  return (
    <div className={styles.cardsContainer}>
      {cards.map((detail, index) => (
        <div className={styles.card} key={index}>
          {detail}
        </div>
      ))}
    </div>
  );
}

export default Cards;
