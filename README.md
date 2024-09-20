
# 🏡 EasyStay - Online Accommodation Booking Platform

**EasyStay** is a full-stack web application designed for booking accommodations. Built with the latest web development technologies, it provides users with a seamless experience to book hotels, host properties, and manage their reservations, all in one place.


## 🌟 Features

- **Hotel Search & Booking**: Find accommodations by selecting location, dates, number of guests, rooms, and bathrooms.
- **Property Hosting**: Users can list their properties, including uploading images and managing bookings.
- **Authentication**: Secure signup/login with NextAuth, supporting Google and GitHub login options.
- **Categories**: Browse hotels by category, such as:
  - Beach, Modern, Camping, Arctic, Cave, Desert, Skiing, Lake, Islands, Pools, Countryside, Luxury.
- **Calendar & Reservation System**: Choose available dates to book hotels. Once reserved, those dates are blocked for other users.
- **Favorites**: Mark hotels as favorites and view them on a dedicated page.
- **Trips Page**: View your past and upcoming reservations.
- **Reservations Management**: Property owners can manage bookings made on their listings.
- **Interactive Maps**: Integrated map functionality to view hotel locations.


## 🛠️ Tech Stack

- **Frontend**: Next.js 13 (App Router), React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Prisma ORM)
- **Authentication**: NextAuth.js (Google, GitHub authentication)
- **Maps**: Integrated with Leaflet
- **Cloud Storage**: Cloudinary (for image uploads)

  
## ⚙️ Installation & Setup

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/anurag12sharma/Online-Accommodation-Booking-System.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Online-Accommodation-Booking-System
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:
   ```bash
   DATABASE_URL=<your_mongodb_connection_string>
   NEXTAUTH_SECRET=<your_nextauth_secret>
   GOOGLE_CLIENT_ID=<your_google_client_id>
   GOOGLE_CLIENT_SECRET=<your_google_client_secret>
   GITHUB_CLIENT_ID=<your_github_client_id>
   GITHUB_CLIENT_SECRET=<your_github_client_secret>
   CLOUDINARY_CLOUD_NAME=<your_cloudinary_name>
   CLOUDINARY_API_KEY=<your_cloudinary_api_key>
   CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Visit `http://localhost:3000` to view the application.


## 📸 Screenshots

### Home Page
<img width="1440" alt="Screenshot 2024-09-19 at 12 31 58 AM" src="https://github.com/user-attachments/assets/0d07ef64-a397-427b-bc49-96853b73054c">


### Hotel Search
<img width="1440" alt="Screenshot 2024-09-19 at 12 32 34 AM" src="https://github.com/user-attachments/assets/3243fbe5-ee31-46dc-85dc-2975d7976979">

### Booking Page
<img width="1440" alt="image" src="https://github.com/user-attachments/assets/b478b240-e37c-4a86-8d8e-2dcd0d0c89ed">
<img width="1440" alt="Screenshot 2024-09-19 at 12 34 43 AM" src="https://github.com/user-attachments/assets/b8db6d3a-35fb-40b6-9512-6abce46c7027">



## 🤝 Working Demo
YouTube Video - https://youtu.be/RW-JzIsxKxA?si=a_GImSSY3JimFzt5



## 🤝 Contributing

Contributions are welcome! If you want to improve the project, feel free to open an issue or a pull request.
