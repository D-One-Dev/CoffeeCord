import MessageInputPanel from "../MessageInputPanel/MessageInputPanel";
import styles from "./ChatPanel.module.scss";

export default function ChatPanel() {
  return (
    <div className={styles.ChatPanel}>
      <MessageInputPanel />
    </div>
  );
}
