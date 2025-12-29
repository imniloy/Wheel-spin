# 🎰 Review Roulette

**Review Roulette** is a gamified customer feedback application that transforms traditional reviews into an engaging **Spin & Win** experience. Users submit a review, spin a roulette wheel, and instantly discover rewards like discounts or prizes—boosting participation and retention through fun and psychology-driven design.

---

## ✨ Key Highlights

- 🎮 **Gamified User Journey**  
  Seamless flow: **Landing → Review Submission → Spin Wheel → Result**

- 🎡 **Interactive Roulette Wheel**  
  Smooth SVG-based animations with realistic, physics-inspired deceleration.

- 🎨 **Psychological Color Theory**

  - **Teal (`#06D6A0`)** for wins → trust & positivity
  - **Red (`#EF476F`)** for losses → urgency & emotional impact

- 🎉 **Celebratory Effects**  
  Custom-built confetti animation system with lazy state initialization for optimal performance.

- 📱 **Fully Responsive Design**  
  Optimized for mobile, tablet, and desktop using **Tailwind CSS**.

- 🧩 **Modular Architecture**  
  Clean, reusable, and scalable component-based React structure.

---

## 🛠️ Tech Stack

| Category   | Technology                          |
| ---------- | ----------------------------------- |
| Frontend   | React.js (Vite)                     |
| Styling    | Tailwind CSS                        |
| Icons      | Lucide React                        |
| Animations | CSS Keyframes & SVG Transformations |

---

### Live Link

```
https://wheel-spin-developedby-niloy.netlify.app/
```

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/imniloy/Wheel-spin.git
cd Wheel-spin
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Development Server

```bash
npm run dev
```

### 4️⃣ Open in Browser

```
http://localhost:5173
```

---

## 📂 Project Structure

```
review-roulette/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images & global styles
│   ├── components/        # Reusable UI components
│   │   ├── Header.jsx     # Top navigation bar
│   │   ├── ProgressBar.jsx# Visual step tracker
│   │   ├── Confetti.jsx   # Particle animation system
│   │   └── WheelSVG.jsx   # SVG wheel logic & rendering
│   ├── views/             # Main application screens
│   │   ├── LandingView.jsx# Welcome screen
│   │   ├── ReviewView.jsx # Review input form
│   │   ├── GameView.jsx   # Roulette game container
│   │   └── ResultView.jsx # Win/Lose result display
│   ├── App.jsx            # Main application controller
│   ├── main.jsx           # Application entry point
│   └── index.css          # Tailwind CSS imports
├── index.html             # HTML template
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Project dependencies
```

---

## 📜 License & Credits

© **2025 Review Roulette Inc.**  
All rights reserved.

**Developed by:**  
👨‍💻 **Niloy Kumar Das**  
🌐 Website: https://www.imniloy.xyz

---

## ⚠️ Disclaimer

This project is a **functional prototype** built for demonstration and experimental purposes. It is not intended for production use without further enhancements.
