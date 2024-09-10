const audioPlayer = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("play-pause");
const seekBar = document.getElementById("seek-bar");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

// Функція для форматування часу (в секундах) у формат MM:SS
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Оновлення кнопки відтворення та паузи
playPauseBtn.addEventListener("click", function () {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = "Pause";
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = "Play";
  }
});

// Оновлення прогресу аудіо та відображення поточного часу
audioPlayer.addEventListener("timeupdate", function () {
  const value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  seekBar.value = value;

  // Оновлюємо поточний час
  currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
});

// Оновлення тривалості треку після завантаження метаданих
audioPlayer.addEventListener("loadedmetadata", function () {
  if (!isNaN(audioPlayer.duration)) {
    durationEl.textContent = formatTime(audioPlayer.duration);
  } else {
    durationEl.textContent = "00:00"; // Випадок, коли метадані не завантажені
  }
});

// Перемотування аудіо через seek bar
seekBar.addEventListener("input", function () {
  const time = (seekBar.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = time;
});
