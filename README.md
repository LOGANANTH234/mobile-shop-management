# 📱 MobileSync Pro — Mobile Shop Management System

A modern, professional **offline desktop application UI** for a Mobile Shop Management System.  
Built with pure **HTML, CSS & JavaScript** — no frameworks, no backend, no database.

## 🚀 Live Demo
> Open index.html directly in your browser or serve with any static server.

`ash
npx http-server . -p 3000 -o
`

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
- 7 interactive Chart.js charts

### ⚙️ Settings
- Shop details & GST configuration
- Invoice customization
- 🎨 Light / Dark mode (with System preference detection)
- Backup & Restore UI

## 🎨 Design
- Dark & Light theme with smooth transitions
- Animated sidebar navigation
- Toast notifications
- Native <dialog> modals
- Fully responsive desktop layout

## 🛠️ Tech Stack
| Layer | Technology |
|---|---|
| Structure | HTML5 (Semantic) |
| Styling | Vanilla CSS (Custom Properties) |
| Logic | Vanilla JavaScript (ES6+) |
| Charts | Chart.js 4.4 |
| Fonts | Inter + JetBrains Mono (Google Fonts) |

## 📁 Project Structure
`
mobile-shop/
├── index.html    # Full app structure & all 9 modules
├── styles.css    # Complete design system & theme tokens
└── app.js        # Mock data, navigation, charts & interactions
`

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

## 📄 License
MIT — Free to use and modify.
