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

```bash
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
```

---

## 📦 Installation

```bash
git clone https://github.com/Az-Haris/Library-Management-API.git
cd library-management-api
npm install
```

---

## ⚙️ Run the Project

### Dev Server

```bash
npm run dev
```

---

## 📌 API Endpoints

1. Create Book

```bash
POST /api/books
```

2. Get All Books

```bash
GET /api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5
```

3. Get Book by ID

```bash
GET /api/books/:bookId
```

4. Update Book

```bash
PUT /api/books/:bookId
```

5. Delete Book

```bash
DELETE /api/books/:bookId
```

6. Borrow a Book

```bash
POST /api/borrow
```

7. Borrow Summary

```bash
GET /api/borrow
```

---

## 📤 Sample Request – Create Book

```bash
POST /api/books
{
  "title": "The Theory of Computation",
  "author": "Alimuzzaman Haris",
  "genre": "SCIENCE",
  "isbn": "9780553380165",
  "description": "An overview of computation fundamentals.",
  "copies": 5,
  "available": true
}
```

---

## 📤 Sample Request – Borrow Book

```bash
POST /api/borrow
{
  "book": "685c02a69b9d4d264a48c6e4",
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
}
```

---

## ❗ Error Response Format

```bash
{
  "message": "Validation failed",
  "success": false,
  "error": {
    "name": "ValidationError",
    ...
  }
}
```

---

## 👨‍💻 Author

- Name: MD Alimuzzaman Haris