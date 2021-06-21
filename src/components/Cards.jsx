import styles from '../styles/Cards.module.scss';
import { useContext } from 'react';
import { stateContext } from '../utils/createContext.js';

function Cards({ id }) {
  const { historyLists } = useContext(stateContext);
  const { detail } = historyLists.find((item) => item.id === id);

  return (
    <div className={styles.cardsContainer}>
      {detail.map((card) => {
        return (
          <div className={styles.card} key={card.id}>
            {card.content}
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
