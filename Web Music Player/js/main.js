const btnPlay = document.querySelector("#btn-play");
const btnPlayIcon = document.querySelector("#btn-play-ico");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const musicName = document.querySelector("#music-name");
const musicAuthor = document.querySelector("#music-info");
const playerCurrentTime = document.querySelector("#player-time");
const playerDuration = document.querySelector("#player-duration");
const playerProgress = document.querySelector("#progress-bar");
const audioPlayer = document.querySelector("#music-player");

let currentMusic = 0;

const musics = [
  {
    name: "Dandelions",
    author: "Ruth B.",
    path: "https://prince-jagani.github.io/HTML-Examples/Web%20Music%20Player/songs/Ruth_B_-_Dandelions.mp3",
  },
  {
    name: "Closer",
    author: "Chainsmokers, Halsey",
    path: "https://prince-jagani.github.io/HTML-Examples/Web%20Music%20Player/songs/The_Chainsmokers_-_Closer.mp3",
  },
  {
    name: "Levitating",
    author: "Dua Lipa",
    path: "https://prince-jagani.github.io/HTML-Examples/Web%20Music%20Player/songs/Dua_Lipa_-_Levitating.mp3",
  },
  {
    name: "How You Like That",
    author: "BLACKPINK",
    path: "https://prince-jagani.github.io/HTML-Examples/Web%20Music%20Player/songs/BLACKPINK_-_How_You_Like_That.mp3",
  },
  {
    name: "2002",
    author: "Anne-Marie",
    path: "https://prince-jagani.github.io/HTML-Examples/Web%20Music%20Player/songs/Anne-Marie_-_2002.mp3",
  },
  {
    name: "Animals",
    author: "Martin Garrix",
    path: "https://prince-jagani.github.io/HTML-Examples/Web%20Music%20Player/songs/Martin_Garrix_-_Animals_Official_V_(getmp3.pro).mp3",
  },
];

btnPlay.addEventListener("click", () => togglePlayMusic());
btnPrev.addEventListener("click", () => changeMusic(false));
btnNext.addEventListener("click", () => changeMusic());
audioPlayer.addEventListener("timeupdate", () => timeUpdate());

const togglePlayMusic = () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    btnPlayIcon.classList.replace("bi-play-fill", "bi-pause-fill");
  } else {
    audioPlayer.pause();
    btnPlayIcon.classList.replace("bi-pause-fill", "bi-play-fill");
  }
};

const changeMusic = (next = true) => {
  if (next && currentMusic < musics.length - 1) {
    currentMusic++;
    
  } else if (!next && currentMusic > 0) {
    currentMusic--;
  }
  else if (next && currentMusic == musics.length -1) {
    currentMusic = 0;
  }else if (!next && currentMusic == 0) {
    currentMusic = musics.length - 1;
  } else {
    return;
  }

  updatePlayer();
  togglePlayMusic();
};

const updatePlayer = () => {
  const music = musics[currentMusic];

  musicName.innerHTML = music.name;
  musicAuthor.innerHTML = music.author;
  audioPlayer.src = music.path;
};

const timeUpdate = () => {
  const { currentTime, duration } = audioPlayer;

  if (isNaN(duration)) return;

  playerDuration.innerHTML = formatSecondsToMinutes(duration);
  playerCurrentTime.innerHTML = formatSecondsToMinutes(currentTime);
  playerProgress.max = duration;
  playerProgress.value = currentTime;
};

const formatSecondsToMinutes = (seconds) => {
  return new Date(seconds * 1000).toISOString().slice(14, 19);
};

window.onload = () => {
  updatePlayer();
};
