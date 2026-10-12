# 📱 MobileSync Pro — Mobile Shop Management System

A modern, professional **offline desktop application** for a Mobile Shop Management System.  
Built with **Electron, HTML5, CSS3 & JavaScript** — packaged as a standalone Windows desktop app with 100% offline support.

---

## 🖥️ Run as Desktop App

### Option 1: Direct Executable (Ready Now)
Double click to run the pre-built Windows desktop executable:
```
dist/win-unpacked/MobileSync Pro.exe
```
Or simply double-click `launch.bat`.

### Option 2: Run via NPM (Development Mode)
```bash
npm start
```

### Option 3: Build an Installer / Standalone Executable
```bash
# Package into dist/ folder
npm run pack

# Create installer (.exe) and portable package
npm run dist
```

---

## 🌐 Run as Web App (Optional)
You can still open `index.html` in any browser or run:
```bash
npx http-server . -p 3000 -o
```

---

## ✨ Features

### 📊 Dashboard
- Today's Sales, Purchases & Profit cards
- Sales overview chart (week/month toggle)
- Low stock alerts & recent transactions

### 📦 Inventory Management
- Mobile Phones with IMEI tracking (dual SIM support)
- Accessories (Chargers, Cables, TWS, Power Banks, Cases, Screen Protectors)
- Stock Adjustment (Add / Remove / Damaged / Correction)

### 🛒 Purchases
- New Purchase entry with IMEI fields
- Live purchase summary & invoice preview
- Full purchase history with status tracking

### 🧾 Sales / POS Billing
- Point-of-Sale interface with product search (by name, model, IMEI)
- Cart management with quantity editing
- Payment methods: Cash, UPI, Card, Credit
- Balance calculator & bill printing

### 👥 Customers & 🏭 Suppliers
- Full contact management
- Purchase history & pending payment tracking

### 💸 Expenses
- Category-wise expense tracking (Rent, Salary, Electricity, etc.)
- Monthly and yearly summaries

### 📊 Reports & Analytics
- Sales, Purchase, Stock, Profit & Payment reports
- 7 interactive charts (now bundled offline with local `chart.umd.min.js`)

### ⚙️ Settings
- Shop details & GST configuration
- Invoice customization
- 🎨 Light / Dark mode (with System preference detection)
- Backup & Restore UI

---

## 🛠️ Tech Stack
| Layer | Technology |
|---|---|
| Desktop Runtime | Electron 44 |
| Packaging | electron-builder |
| Structure | HTML5 (Semantic) |
| Styling | Vanilla CSS (Custom Properties) |
| Logic | Vanilla JavaScript (ES6+) |
| Charts | Chart.js 4.4 (Offline bundled) |
| Typography | Inter + JetBrains Mono |

---

## 📁 Project Structure
```
mobile-shop/
├── main.js                  # Electron desktop main process
├── index.html               # Full app structure & all 9 modules
├── styles.css               # Complete design system & theme tokens
├── app.js                   # Application state, navigation & UI logic
├── chart.umd.min.js         # Offline Chart.js library
├── launch.bat               # Windows double-click launcher
├── package.json             # App metadata & Electron build config
└── dist/
    └── win-unpacked/
        └── MobileSync Pro.exe  # Standalone Windows executable
```

---

## 📋 Modules
1. Dashboard
2. Inventory (Mobiles + Accessories + Stock Adjustment)
3. Purchases
4. Sales / Billing (POS)
5. Customers
6. Suppliers
7. Expenses
8. Reports
9. Settings

> ⚠️ This is a **demo/prototype UI** for client presentation.  
> No real database, backend, API, or payment integration is included.  
> All data is mock/dummy data for demonstration purposes.

---

## 📄 License
MIT — Free to use and modify.
