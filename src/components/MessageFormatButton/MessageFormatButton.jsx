import styles from "./MessageFormatButton.module.scss";

export default function MessageFormatButton({ iconSrc, altText }) {
  return (
    <button className={styles.MessageFormatButton}>
      <img src={iconSrc} alt={altText} />
    </button>
  );
}
