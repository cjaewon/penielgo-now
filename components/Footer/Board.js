import styles from "./styles/Board.module.css";

export default function Board({ board }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>🌐 학교 홈페이지 공지사항</h3>
      { board.map(post => {
          return (
            <p key={post.title} className={styles.text}>{post.title.substr(0, 24)} ... - {post.author} ({post.date})</p>
          );
        })
      }
    </div>
  );
};