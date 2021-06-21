import styles from '../styles/History.module.scss';
import Cards from './Cards.jsx';
import Footer from './Footer.jsx';

function History({ history }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{history.title}</div>
      <Cards id={history.id} />
      <Footer id={history.id} />
    </div>
  );
}

export default History;
