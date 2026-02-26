# LOCALI 2.0 — The Bielefeld Sync-Quest
## GitHub Pages Deployment Guide

### 📁 File Structure
```
/
├── index.html              ← Phase 1: The Digital Lobby (your QR poster links here)
├── css/
│   └── style.css
├── js/
│   └── locali.js
└── pages/
    ├── location1.html      ← Phase 2: Sparrenburg / Social Handshake
    ├── location2.html      ← Phase 3: Kaktus Restaurant / Merchant Hub
    ├── location3.html      ← Phase 4: Final Sync / Grand Prize
    └── admin.html          ← Organizer panel (internal use)
```

---

### 🚀 Deploy to GitHub Pages (5 minutes)

1. **Create a new GitHub repository** (e.g. `locali-quest`)
2. Upload all files maintaining the folder structure above
3. Go to **Settings → Pages**
4. Set Source to `main` branch, root folder `/`
5. Your site will be live at: `https://YOUR-USERNAME.github.io/locali-quest/`

---

### 📱 QR Codes to Generate

Use any free QR generator (e.g. qr-code-generator.com):

| QR Code | Links To | Placed At |
|---------|----------|-----------|
| **Poster QR** | `https://your-site/index.html` | University, City Center |
| **Location 1 QR** | `https://your-site/pages/location1.html` | Sparrenburg gate |
| **Location 2 QR** | `https://your-site/pages/location2.html` | Kaktus restaurant |
| **Location 3 QR** | `https://your-site/pages/location3.html` | Final location (Alter Markt) |

---

### 📸 Instagram Setup

1. Post a photo related to the quest on your LOCALI Instagram account
2. Copy the post URL (e.g. `https://www.instagram.com/p/ABC123DEF/`)
3. In `location1.html`, replace `REPLACE_WITH_YOUR_POST_ID` with your actual post URL

---

### 🔧 Optional: Two-Device Real Sync (JSONbin)

For the final location to truly detect when BOTH players scan simultaneously:

1. Sign up free at [jsonbin.io](https://jsonbin.io)
2. Create a new bin with initial content: `{}`
3. Copy your **Bin ID** and **Master API Key**
4. In `pages/location3.html`, find these lines and fill them in:
```javascript
const JSONBIN_BIN_ID  = 'YOUR_BIN_ID_HERE';
const JSONBIN_API_KEY = 'YOUR_API_KEY_HERE';
```

**Without JSONbin:** The organizer manually verifies by checking both players' screens + Instagram proof. This works perfectly for the pilot.

---

### ⏰ Game Window

The prize window is set to **14:00–18:00**. To change it, edit `js/locali.js`:
```javascript
WINDOW_START_HOUR: 14,
WINDOW_END_HOUR: 18,
```

---

### 🏆 On Game Day Checklist

- [ ] Instagram post is live; copy URL into location1.html
- [ ] All 4 QR codes printed and placed at locations
- [ ] Kaktus staff briefed on the 20% discount mechanic
- [ ] Organizer has `pages/admin.html` open on their phone
- [ ] €50 voucher/cash ready for winners
- [ ] Camera ready for winner photo (for pitch deck)
- [ ] Screenshot screenshots of winning Instagram thread as proof

---

### 💡 How the "No-Backend" Sync Works

The clever mechanic: players choose their own team word, making it a **human-enforced unique key**. The website only validates that both players entered the *same* word. The organizer manually verifies:
- Both phones show the same winner screen with the same team word
- Instagram DM proves they actually coordinated
- This is faster and more robust than any backend for a pilot event

---

*LOCALI 2.0 — Built for the jury. No server required.*
