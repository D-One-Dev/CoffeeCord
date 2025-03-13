import styles from "./SendMessageButton.module.scss";

export default function SendMessageButton() {
  return (
    <button className={styles.SendMessageButton}>
      <img
        className={styles.SendMessageIcon}
        src="/SendIcon.svg"
        alt="Send message button"
      />
    </button>
  );
}
