import styles from "../styles/main.module.scss";
export default function MainWindow() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__logo}></div>
      <div className={styles.wrapper__button}>
        <button>
          <span>Try to scratch </span>
          <span>and find</span> 
          <span>YOUR 500$</span>
        </button>
      </div>
    </div>
  );
}
