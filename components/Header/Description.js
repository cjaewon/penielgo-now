import styles from "./styles/Description.module.css";

export default function Description({ text }) {
  return (
    <div>
      <p className={styles.text}>{text}</p>    
    </div>
  )
}