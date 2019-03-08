import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';
import Routes from './routes';

const Index = () => (
  <div className={styles.cb}>
    <Routes />
  </div>
);

ReactDOM.render(<Index />, document.getElementById('index'));
