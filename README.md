# 🌍 Global Groove -Music Beyond Borders

**Global Groove** is a frontend-only web application that explores **music culture across countries** using Spotify data.  

---

## ✨ Features

### 🌐 Interactive World Map
- Clickable SVG-based world map
- Hover and glow effects for visual feedback
- Navigate to country-specific music pages
- No external map libraries used

### 🎵 Country Music Pages
- Displays popular artists from the selected country
- Shows frequently occurring genres based on artist data
- Responsive grid layout with hover animations

### 👤 Artist Detail Pages
- Artist information and highlighted genre tags
- Top tracks displayed as cards
- Direct links to open tracks in Spotify
- Add artists to favourites

### ❤️ Favourites
- Save favourite artists
- Remove artists from favourites
- Data persistence using `localStorage`
- Clean, curated visual layout

### 🎨 UI & UX
- Dark theme inspired by modern music platforms
- Subtle glow, hover, and micro-interactions
- Smooth page transition animations
- Responsive design for different screen sizes

---

## 🛠️ Tech Stack

- **React** (Vite)
- **React Router**
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Spotify Web API**
---

## 📁 Project Structure
```
global-groove/
├── public/ # Static assets
├── src/
│ ├── assets/ # Images, icons, and other static files
│ ├── components/ # Reusable React components
│ │ ├── navbar.jsx # Navigation bar
│ │ └── worldmap.jsx # Interactive SVG world map
│ ├── pages/ # Page components (routes)
│ │ ├── artist.jsx # Artist detail page
│ │ ├── country.jsx # Country music page
│ │ ├── favourites.jsx # Favourites page
│ │ └── home.jsx # Home page with world map
│ ├── services/
│ │ └── spotify.js # Spotify API integration
│ ├── styles/ # Global and component styles
│ │ ├── index.css # Global styles
│ │ └── map.css # World map styles
│ ├── App.jsx # Main app component
│ └── main.jsx # Entry point
├── eslint.config.js # ESLint configuration
├── vite.config.js # Vite configuration
├── package.json # Dependencies and scripts
└── index.html # HTML template
```
---

## 🔑 Spotify API Usage

This project uses the **Spotify Web API** to fetch:
- Artists by country
- Artist details
- Top tracks
- Genres

Authentication is handled using the **Client Credentials Flow**.  
API logic is isolated inside `services/spotify.js`.

---

## 🚀 Running the Project Locally

1. Clone the repository  
git clone https://github.com/your-username/global-groove.git
2. Install dependencies  
npm install
3. Start the development server  
npm run dev
4. Open in browser  
http://localhost:5173

## 👩‍💻 Author

Vaidehi Goel
Computer Science Engineering Student

This project was built to showcase frontend development skills, including UI design, React fundamentals, API integration, and thoughtful UX design.

## 📝 License
This project is for educational purposes only.