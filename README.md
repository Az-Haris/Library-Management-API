# 📚 Library Management API

A simple and structured Library Management System built with **Express**, **TypeScript**, and **MongoDB** using **Mongoose**. This API handles book records and borrowing logic with validation, filtering, and aggregation features.

---

## 🚀 Features

- 📖 Add, update, delete, and fetch books
- 🔍 Filter and sort books by genre, creation date, etc.
- 📦 Borrow books with availability checks
- 📊 Aggregated borrow summary using MongoDB pipeline
- ✅ Validation, business logic enforcement, and error handling
- 🔧 Uses Mongoose methods and middleware

---

## 🛠️ Tech Stack

- **Backend Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB + Mongoose
- **Tools**: Node.js, ts-node-dev

---

## 📁 Project Structure

src/
├── app/
│ └── controllers/
│       ├── book.controller.ts
│       └── borrow.controller.ts
│ ├── interfaces/
│       ├── book.interface.ts
│       └── borrow.interface.ts
│ ├── models/
│       ├── book.model.ts
│       └── borrow.model.ts
├── app.ts
├── server.ts

---

## 📦 Installation

```bash
git clone https://github.com/your-username/library-management-api.git
cd library-management-api
npm install

---

## ⚙️ Run the Project

### Dev Server

```bash
npm run dev