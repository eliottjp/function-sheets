# 📋 Function Sheet Generator

The **Function Sheet Generator** is a web-based tool designed to help event organizers and teams quickly generate structured function sheets from emails or manual form inputs. It extracts key event details, applies the appropriate template, and stores the function sheets for easy search, retrieval, and download.

---

## 🌟 Features

### 1️⃣ AI-Powered Email Extraction

- Copy-paste an event-related email.
- Uses **OpenAI** to extract details like:
  - **Event Name**
  - **Date & Time**
  - **Venue**
  - **Organizer Contact**
  - **Guest Count**
  - **Special Requests** (Catering, Equipment, etc.)
- Automatically populates a function sheet.

### 2️⃣ Manual Form Input

- If no email is available, enter details manually.
- Structured form with:
  - Event type selection (Wedding, Conference, etc.)
  - Date & Time pickers
  - Venue details
  - Guest list & special requests
- Applies **predefined templates** based on event type.

### 3️⃣ Predefined & Custom Templates

- Built-in templates for:
  - 🎉 Weddings
  - 🎤 Conferences
  - 🎶 Concerts
  - 🎂 Private Parties
  - 🏢 Corporate Events
- Create and manage **custom templates**.

### 4️⃣ Saving & Searching Function Sheets

- Store function sheets in **Firebase Firestore**.
- **Search & filter** by:
  - 📅 Date
  - 🎭 Event Type
  - 👤 Organizer Name
- No version history—just **simple storage & retrieval**.

### 5️⃣ Export as PDF / Word

- Download function sheets in a **professional format**.

### 6️⃣ Firebase Integration

- **Firestore** for database storage.
- **Firebase Hosting** for web deployment.
- **(Optional) Firebase Auth** for user authentication.

### 7️⃣ Fully Responsive UI

- **Works on desktop & mobile**.
- Clean, modern **UI with a smooth experience**.

---

## 🛠️ Tech Stack

| Feature            | Technology                    |
| ------------------ | ----------------------------- |
| **Frontend**       | HTML, CSS, JavaScript         |
| **AI Processing**  | OpenAI API                    |
| **Database**       | Firebase Firestore            |
| **Hosting**        | Firebase Hosting (or Netlify) |
| **File Storage**   | Firebase Storage (if needed)  |
| **Authentication** | _(Optional)_ Firebase Auth    |

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/YOUR-USERNAME/function-sheet-app.git
cd function-sheet-app
```
