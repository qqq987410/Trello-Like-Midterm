import styles from '../styles/AddLists.module.scss';
import { useContext } from 'react';
import { stateContext } from '../utils/createContext.js';
import { nanoid } from 'nanoid';

function AddLists() {
  const { input, showPlusBtn, setShowPlusBtn, setInput, setHistoryLists } = useContext(stateContext);

  const clickHandler = () => {
    setShowPlusBtn((prevState) => !prevState);
  };
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  const addListHandler = () => {
    if (input !== '') {
      const newTitle = { id: nanoid(), title: input, detail: [] };
      setHistoryLists((prevState) => [...prevState, newTitle]);
      setInput('');
    }
  };
  const cancelHandler = () => {
    setShowPlusBtn((prevState) => !prevState);
  };

  return (
    <div className={styles.outerContainer}>
      {showPlusBtn ? (
        <button className={styles.addLists} onClick={() => clickHandler()}>
          + Add a list
        </button>
      ) : (
        <div className={styles.innerContainer}>
          <input type="text" value={input} onChange={changeHandler} />
          <div className={styles.btnContainer}>
            <button className={styles.addList} onClick={() => addListHandler()}>
              Add List
            </button>
            <button className={styles.cancel} onClick={() => cancelHandler()}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddLists;
