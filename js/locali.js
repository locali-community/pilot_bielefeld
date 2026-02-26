// LOCALI shared utilities

const LOCALI = {
  // Storage keys
  KEYS: {
    TEAM_WORD: 'locali_team_word',
    PHASE: 'locali_phase',
    VOUCHER_REDEEMED: 'locali_voucher_redeemed',
    FINAL_SCAN_TIME: 'locali_final_scan_time',
    WINNER: 'locali_winner',
  },

  // Game window: 14:00 – 18:00
  WINDOW_START_HOUR: 14,
  WINDOW_END_HOUR: 18,

  // Time window for double-scan (seconds) — both players must scan within this
  SYNC_WINDOW_SECONDS: 90,

  set(key, value) {
    localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : String(value));
  },

  get(key) {
    return localStorage.getItem(key);
  },

  clear() {
    Object.values(this.KEYS).forEach(k => localStorage.removeItem(k));
  },

  isGameWindowOpen() {
    const now = new Date();
    const h = now.getHours();
    return h >= this.WINDOW_START_HOUR && h < this.WINDOW_END_HOUR;
  },

  timeUntilWindow() {
    const now = new Date();
    const target = new Date();
    target.setHours(this.WINDOW_START_HOUR, 0, 0, 0);
    if (now >= target) return 0;
    return Math.floor((target - now) / 1000);
  },

  formatCountdown(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  },

  // Generate a short unique submission ID
  genId() {
    return Date.now().toString(36).toUpperCase() + Math.random().toString(36).slice(2,5).toUpperCase();
  }
};
