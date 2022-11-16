let runned = -1;

setInterval(() => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  if (hour === 7 && minute === 0 && (second === 0 || second === 1)) {
    location.reload(); // 7시
  } else if (hour === 12 && minute === 0 && (second === 0 || second === 1)) {
    location.reload(); // 12시
  } else if (hour === 15 && minute === 0 && (second === 0 || second === 1)) {
    location.reload(); // 3시
  }
}, 1000);
