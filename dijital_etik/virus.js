const btn = document.getElementById('startBtn');
const progress = document.getElementById('progress');
const alarm = document.getElementById('alarm');

function goFullScreen() {
  const el = document.documentElement;
  if (el.requestFullscreen) el.requestFullscreen();
  else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  else if (el.msRequestFullscreen) el.msRequestFullscreen();
}

btn.addEventListener('click', () => {

  // 🖥 Tam ekran
  goFullScreen();

  // 🔊 SES — ANINDA
  alarm.currentTime = 0;
  alarm.volume = 0.4;
  alarm.play().catch(() => {});

  // UI
  btn.disabled = true;
  btn.textContent = 'Kritik Tehdit Bulundu';
  progress.style.display = 'block';

  // ➡️ Orta sayfaya geç
  setTimeout(() => {
    window.location.href = 'middle.html';
  }, 9000);
});
