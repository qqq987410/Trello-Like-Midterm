import styles from '../styles/App.module.scss';
import { useState } from 'react';
import { stateContext } from '../utils/createContext.js';
import AddLists from './AddList.jsx';
import History from './History.jsx';

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
        {historyLists.map((history) => (
          <History key={history.id} history={history} />
        ))}
        <AddLists />
      </div>
    </stateContext.Provider>
  );
}

export default App;
