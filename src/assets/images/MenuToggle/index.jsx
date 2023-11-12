import styles from "./MenuToggle.module.scss";

export function MenuToggle(props) {
  return (
    <>
      <input
        id={styles.menuToggle}
        type="checkbox"
        onClick={props.handleToggle}
      />
      <label className={styles.menuButtonContainer} htmlFor={styles.menuToggle}>
        <div className={styles.menuButton}></div>
      </label>
    </>
  );
}
