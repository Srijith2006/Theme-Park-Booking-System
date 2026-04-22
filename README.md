# 🎡 Magical Kingdom — Theme Park Ticket Booking System

> A desktop application built with **Electron** for seamless theme park ticket booking — browse attractions, choose your visitors, and complete payment all in one place.

---

## 📌 About the Project

**Magical Kingdom** is a single-park ticket booking desktop application developed as a User Interface Design (UID) project. It provides a smooth, multi-step booking experience — from exploring rides and attractions to selecting ticket categories and completing payment — all wrapped in a visually rich, fantasy-themed interface.

The app is built using **Electron**, allowing it to run as a native desktop application on Windows, macOS, and Linux using standard web technologies (HTML, CSS, JavaScript).

---

## ✨ Features

- 🏰 **Home Page** — Immersive landing page with animated header and park overview
- 🎢 **Attractions Explorer** — Browse the park's main rides and attractions with images and descriptions
- 🎠 **Ride Categories** — Separate sections for Giant Rides, Kids' Rides, and Adult Rides
- 🗓️ **Booking Flow** — Step-by-step booking process with a visual progress bar
- 👨‍👩‍👧 **Visitor Selection** — Choose ticket quantities for Adults, Children, and other categories
- 💳 **Payment Page** — Secure-looking payment summary and checkout interface
- 🖥️ **Native Desktop Experience** — Full-screen Electron window with native menu bar (File, Edit, View, Help)
- 🖱️ **Context Menu** — Right-click menu with Home, Reload, DevTools, and clipboard actions

---

## 🗂️ Project Structure

```
Magical Kingdom/
│
├── index.html              # Home / landing page
├── attractions.html        # Main attractions listing
├── giant-rides.html        # Giant rides category page
├── kids.html               # Kids' rides category page
├── adults.html             # Adults' rides category page
├── booking.html            # Booking form with progress stepper
├── payment.html            # Payment & checkout page
│
├── Untitled-2.css          # Global stylesheet
├── main.js                 # Electron main process
├── package.json            # Project metadata & dependencies
│
└── assets/                 # Images used throughout the app
    ├── rollercoater.jpg
    ├── ferriswheel.webp
    ├── bumper car.jpg
    ├── waterpark.webp
    └── ... (and more)
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Desktop Runtime | [Electron](https://www.electronjs.org/) v28 |
| UI | HTML5, CSS3, JavaScript |
| Fonts | Google Fonts — Poppins |
| Icons | Font Awesome 5/6 |
| Build Tool | electron-packager |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone or download** the project folder.

2. **Navigate** into the project directory:
   ```bash
   cd "UID project code"
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the App

```bash
npm start
```

This will launch the **Magical Kingdom** desktop application in full-screen mode.

---

## 📦 Building / Packaging

To package the app into a distributable executable using `electron-packager`:

```bash
npx electron-packager . MagicalKingdom --platform=win32 --arch=x64 --out=dist/
```

Replace `--platform=win32` with `darwin` (macOS) or `linux` as needed.

---

## 🖼️ Screenshots

| Page | Description |
|---|---|
| Home | Animated header with park branding and navigation |
| Attractions | Grid layout of rides with images and details |
| Booking | Multi-step form with date, visitor count selection |
| Payment | Order summary and payment form |

---

## 🎯 Scope & Limitations

- This application is designed for a **single theme park** (Magical Kingdom) only.
- It is a **front-end prototype** — no backend server or database is connected.
- Payment processing is **simulated** and does not handle real transactions.
- Booking data is **not persisted** between sessions.

---

## 👨‍💻 Author

Developed as part of a **User Interface Design (UID)** academic project.

---

## 📄 License

This project is licensed under the **MIT License**.

---

> *"Where every visit becomes a magical memory."* 🌟
