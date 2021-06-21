import styles from '../styles/Footer.module.scss';
import { useState, useContext } from 'react';
import { stateContext } from '../utils/createContext';
import { nanoid } from 'nanoid';

function Footer({ id }) {
  const [isShowInputWrapper, setIsShowInputWrapper] = useState(false);
  const [detailInput, setDetailInput] = useState('');
  const { historyLists, setHistoryLists } = useContext(stateContext);

  const changeHandler = (e) => {
    setDetailInput(e.target.value);
  };
  const addACardHandler = () => {
    setIsShowInputWrapper((prevState) => !prevState);
  };
  const addCardHandler = () => {
    if (detailInput !== '') {
      const newHistoryLists = historyLists.map((historyObj) => {
        if (historyObj.id === id) {
          historyObj.detail.push({ id: nanoid(), content: detailInput });
        }
        return historyObj;
      });
      setHistoryLists(newHistoryLists);
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
