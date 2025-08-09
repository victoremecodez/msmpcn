# Mary Slessor Memorial Presbyterian Cathedral

This is the official website for the Mary Slessor Memorial Presbyterian Cathedral, a modern, responsive, and spiritually uplifting web application built with React, Vite, and TypeScript. The site is designed to serve the church community in Port Harcourt, Nigeria, and beyond.

## ✨ Features

*   **Modern Homepage:** A welcoming hero section, service times, ministry information, latest sermons, and a livestream placeholder.
*   **Detailed Pages:** Dedicated sections for About Us, Our Beliefs, Mission & Vision, Sermons, Events, Gallery, and more.
*   **Interactive Components:** Sermon carousels, testimonials sliders, and an interactive FAQ section.
*   **User Authentication:** Secure login and signup for church members.
*   **Member Dashboard:** A personalized portal for members to manage their profile, view bookmarked sermons, track donations, and engage with the community.
*   **Admin Panel:** A comprehensive backend for administrators to manage website content, including sermons, events, and site settings.
*   **Responsive Design:** Fully responsive and accessible on all devices, from desktops to mobile phones.

## 🚀 Tech Stack

*   **Frontend:** [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Deployment:** [Firebase Hosting](https://firebase.google.com/docs/hosting)

## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or later)
*   npm

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/mary-slessor-cathedral.git
    cd mary-slessor-cathedral
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Run the development server:**
    The site will be available at `http://localhost:5173`.
    ```sh
    npm run dev
    ```

## 📦 Build and Deployment

### Building for Production

To create a production-ready build of the application, run the following command. The optimized files will be generated in the `dist/` directory.

```sh
npm run build
```

### Deploying to Firebase

This project is configured for easy deployment to Firebase Hosting.

1.  **Login to Firebase:**
    ```sh
    firebase login
    ```

2.  **Deploy the application:**
    This script will first build the project and then deploy the contents of the `dist` folder.
    ```sh
    npm run deploy
    ```
