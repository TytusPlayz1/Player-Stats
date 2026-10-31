const playerProfiles = {
  TytusPlayz1: {
    playtime: '428h 36m',
    sessions: '1,284',
    deaths: '24,342',
    kills: '78,406',
    rank: '#132',
    server: 'Mineverse',
    level: '781',
    wins: '353',
    xp: '7.8M'
  },
  Notch: {
    playtime: '914h 18m',
    sessions: '2,942',
    deaths: '44,211',
    kills: '142,207',
    rank: '#1',
    server: 'Skyforge',
    level: '842',
    wins: '412',
    xp: '8.9M'
  },
  Steve: {
    playtime: '548h 09m',
    sessions: '1,742',
    deaths: '26,990',
    kills: '89,830',
    rank: '#3',
    server: 'Warden Peak',
    level: '794',
    wins: '371',
    xp: '8.1M'
  }
};

const playerName = document.getElementById('player-name');
const playtime = document.getElementById('playtime');
const sessions = document.getElementById('sessions');
const deaths = document.getElementById('deaths');
const kills = document.getElementById('kills');
const playerInput = document.getElementById('player-input');
const searchForm = document.getElementById('player-search');

function updateProfile(username) {
  const cleanName = username.trim();
  const profile = playerProfiles[cleanName] || playerProfiles.TytusPlayz1;

  playerName.textContent = cleanName || 'TytusPlayz1';
  playtime.textContent = profile.playtime;
  sessions.textContent = profile.sessions;
  deaths.textContent = profile.deaths;
  kills.textContent = profile.kills;

  const leaderboardRows = document.querySelectorAll('tbody tr');
  const targetRow = Array.from(leaderboardRows).find((row) =>
    row.textContent.includes(cleanName || 'TytusPlayz1')
  );

  if (targetRow) {
    targetRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  updateProfile(playerInput.value || 'TytusPlayz1');
});

updateProfile(playerInput.value);













































