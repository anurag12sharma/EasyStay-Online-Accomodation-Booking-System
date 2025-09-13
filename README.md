```markdown
# EasyStay - Online Accommodation Booking System

A modern, full-stack web application built with Next.js 14, React, Tailwind CSS, Prisma, and MongoDB.

## Features
- User authentication (OAuth + credentials)
- Property listings and reservations
- Image upload with Cloudinary
- Responsive design
- MongoDB integration

## Prerequisites
- Node.js 18+ 
- MongoDB database (local or Atlas)
- Cloudinary account for image uploads

## Setup Instructions

1. **Clone the repository**
```
git clone https://github.com/anurag12sharma/EasyStay-Online-Accomodation-Booking-System.git
cd EasyStay-Online-Accomodation-Booking-System/easy-stay
```

2. **Install dependencies**
```
npm install
```

3. **Environment Configuration**
```
cp .env.example .env.local
# Fill in your environment variables
```

4. **Database Setup**
```
npx prisma db push
```

5. **Run Development Server**
```
npm run dev
```

## Environment Variables
See `.env.example` for required environment variables.

```