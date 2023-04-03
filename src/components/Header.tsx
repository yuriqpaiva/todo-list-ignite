import styles from './Header.module.css';

import rocketImg from '../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketImg} alt="" />
      <h1>
        <span>to</span>
        <span>do</span>
      </h1>
    </header>
  );
}
