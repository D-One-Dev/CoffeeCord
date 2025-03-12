import MessageFormatButton from "../MessageFormatButton/MessageFormatButton";
import styles from "./MessageInputPanel.module.scss";

export default function MessageInputPanel() {
  return (
    <div className={styles.MessageInputPanel}>
      <div className={styles.MessageText}>
        <input
          className={styles.MessageTextInput}
          type="text"
          placeholder="Write a message"
        />
      </div>
      <div className={styles.MessageOptions}>
        <div className={styles.TextStylingOptions}>
          <MessageFormatButton
            iconSrc="/MessageFormatBold.svg"
            altText="Message format bold"
          />
          <MessageFormatButton
            iconSrc="/MessageFormatItalic.svg"
            altText="Message format italic"
          />
          <MessageFormatButton
            iconSrc="/MessageFormatStrikethrough.svg"
            altText="Message format strikethrough"
          />
          <MessageFormatButton
            iconSrc="/MessageFormatLink.svg"
            altText="Message format link"
          />
          <MessageFormatButton
            iconSrc="/MessageFormatQuote.svg"
            altText="Message format quote"
          />
          <MessageFormatButton
            iconSrc="/MessageFormatFile.svg"
            altText="Message format file"
          />
        </div>
      </div>
    </div>
  );
}
