import { useState, useContext } from 'react';
import styles from '../styles/Footer.module.scss';
import { cardsContext } from '../utils/createContext';

function Footer() {
  const [isShowInputWrapper, setIsShowInputWrapper] = useState(false);
  const [detailInput, setDetailInput] = useState('');
  const { cards, setCards } = useContext(cardsContext);

  const changeHandler = (e) => {
    setDetailInput(e.target.value);
  };
  const addACardHandler = () => {
    setIsShowInputWrapper((prevState) => !prevState);
  };
  const addCardHandler = () => {
    if (detailInput !== '') {
      setCards([...cards, detailInput]);
      setDetailInput('');
    }
  };
  const cancelHandler = () => {
    setDetailInput('');
    setIsShowInputWrapper((prevState) => !prevState);
  };

  return (
    <div className={styles.footer}>
      {isShowInputWrapper ? (
        <>
          <input type="text" value={detailInput} onChange={changeHandler} />
          <div className={styles.btnContainer}>
            <button className={styles.addCard} onClick={() => addCardHandler()}>
              Add card
            </button>
            <button className={styles.cancel} onClick={() => cancelHandler()}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        <button className={styles.addCardBtn} onClick={() => addACardHandler()}>
          Add a card
        </button>
      )}
    </div>
  );
}
export default Footer;
