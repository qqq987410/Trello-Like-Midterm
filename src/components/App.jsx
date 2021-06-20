import styles from '../styles/App.module.scss';
import React, { useState } from 'react';
import AddLists from './AddList.jsx';
import History from './History.jsx';
import { stateContext } from '../utils/createContext.js';
// import { nanoid } from 'nanoid';

function App() {
  const [showPlusBtn, setShowPlusBtn] = useState(true);
  const [input, setInput] = useState('');
  const [historyLists, setHistoryLists] = useState([]);

  const contextValue = {
    showPlusBtn,
    setShowPlusBtn,
    input,
    setInput,
    historyLists,
    setHistoryLists,
  };

  return (
    <stateContext.Provider value={contextValue}>
      <div className={styles.App}>
        {historyLists.map((historyList, index) => (
          <History key={index} historyList={historyList} />
        ))}
        <AddLists />
      </div>
    </stateContext.Provider>
  );
}

export default App;
