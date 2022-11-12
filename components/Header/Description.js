import styles from "./styles/Description.module.css";

export default function Description({ text }) {
  return (
    <p className={styles.text}>{text}</p>    
  )
}

// 🔄 {generatedTime}에 갱신됨 | 제작 최재원