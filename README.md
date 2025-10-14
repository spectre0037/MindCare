# 🌿 MindCare – Your Digital Mental Health Companion

## 🧠 Overview
**MindCare** is a mental health support platform designed to provide accessible emotional assistance, professional connections, and AI-driven wellness guidance to users worldwide.  
This project is developed as part of the **CS331 (Web Programming)** course at **Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI)**.

MindCare bridges the gap between users and mental health support through a friendly interface, real-time AI assistant, and professional psychologist recommendations — all within a smooth, interactive web experience.

---

## 💡 Key Features

### 🏠 **Homepage**
- Provides an introduction to the website’s purpose and features.  
- Includes a **Helpline Directory** where users can select their country to view **verified mental health helplines** (phone numbers and emails).  
- Built with accessibility and empathy at its core.

---

### 🤖 **AI Mental Health Assistant**
- An AI-powered assistant designed to help users manage stress, anxiety, and emotional challenges.  
- Powered by the **Gemini API** for intelligent and empathetic conversation generation.  
- Capable of:
  - Conducting **therapy-like conversations**
  - Offering **mood upliftment** sessions
  - Providing **coping strategies** for mental well-being  

---

### 👩‍⚕️ **Seek Professional Help**
- Users can search for **nearby mental health professionals or psychologists** based on their selected location.  
- Integrated with **Google Maps API** to track user location and display nearby specialists visually.  
- Displays relevant doctor profiles with specialization and contact details.  
- Includes a **“Book Appointment”** feature:
  - Sends an **automated email** to the doctor’s HR representative using **EmailJS API**.
  - The HR responds via email with **appointment details and confirmation**.  

---

### 🩺 **Doctors Panel**
- A secure section for **doctors and psychologists** to register on the platform.  
- Doctors can:
  - **Sign up / Log in** to their account.
  - Provide **credentials**, **specialization**, and **degree verification (photo upload)**.
  - Get **listed** in the “Seek Professional Help” section after admin verification.
- This section includes **backend functionality** using **Node.js** and handles form data securely.

---

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ **Next.js / React.js** – Framework for dynamic UI, routing, and component management.  
- 🎨 **Tailwind CSS** – For fast, responsive, and modern UI design.  
- 💅 **CSS** – For additional styling and layout control.  
- ✨ **GSAP** – For advanced animations and page transitions.  
- 💬 **Gemini API** – Provides conversational AI capabilities for the Mental Health Assistant.  
- 🗺️ **Google Maps API** – Used to track user location and display nearby professionals.  
- 📧 **EmailJS API** – Handles automated email sending for appointment requests and confirmations.  
- 🧩 **JavaScript (ES6+)** – Core programming language for both frontend and interactive features.

### **Backend**
- 🟢 **Node.js** – Handles backend server operations and APIs.  
- 🚏 **Express.js** – Lightweight backend framework for route handling and form submissions.  
- 🔐 **Nodemailer (optional)** – Can be used for additional backend email automation.  

---

## ⚙️ Installation & Setup

### **1. Clone the Repository**
```bash
git clone https://github.com/spetre0037/mindcare.git
cd mindcare

