# 🏨 EasyStay - Online Accommodation Booking System
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)](https://mongodb.com)

> A modern, full-stack accommodation booking platform that simplifies property management and reservations with an intuitive user experience.

## 🎯 Problem • Solution • Impact

**🔴 Problem**
- Traditional booking systems are complex and lack modern user interfaces
- Property owners struggle with managing listings and reservations efficiently
- Users face difficulties finding and booking accommodations seamlessly

**💡 Solution**
- Intuitive web application with modern UI/UX design
- Comprehensive property management system for hosts
- Streamlined booking process with real-time availability

**📈 Impact**
- Reduces booking time by 70% with simplified user flow
- Increases property visibility with advanced search and filtering
- Enhances user satisfaction with responsive design and fast performance

## ✨ Features

### 🔐 Authentication & Security
- **Multi-provider OAuth** (Google, GitHub, Facebook)
- **Credential-based login** with secure password hashing
- **Protected routes** and role-based access control

### 🏠 Property Management
- **Property listings** with detailed information and amenities
- **Image upload** and management with Cloudinary integration
- **Dynamic pricing** and availability calendar
- **Location mapping** with interactive maps

### 📅 Booking System
- **Real-time availability** checking
- **Instant booking** confirmation
- **Reservation management** for hosts and guests
- **Payment integration** (Stripe ready)

### 🎨 User Experience
- **Responsive design** across all devices
- **Advanced search** and filtering options
- **Wishlist functionality** for saving favorite properties
- **Review and rating** system

## 📸 Screenshots

### Homepage & Search

> <img width="1940" height="1336" alt="image" src="https://github.com/user-attachments/assets/f2077818-10da-4956-bc23-5ef0d2fa5847" />


> <img width="1940" height="1336" alt="image" src="https://github.com/user-attachments/assets/fa8f1d31-258e-4596-9ffc-c59bf5bb0976" />


### Property Booking

> <img width="1940" height="1336" alt="image" src="https://github.com/user-attachments/assets/e43ff29a-2ea2-4ca0-b3a8-052d369cb17c" />


> <img width="1940" height="1336" alt="image" src="https://github.com/user-attachments/assets/1f7036c3-cb1b-4eb7-a719-bd73640a01c6" />


> <img width="1940" height="1336" alt="image" src="https://github.com/user-attachments/assets/6cb663c6-9871-4588-8d38-97f9cf29eceb" />



### Property Hosting

> <img width="1940" height="1336" alt="image" src="https://github.com/user-attachments/assets/b151eaf0-ad4d-4eed-9f00-46a282d62e53" />


> <img width="1940" height="1336" alt="image" src="https://github.com/user-attachments/assets/43f79663-535e-423f-8c03-b3de84b6b22e" />


> <img width="1940" height="1336" alt="image" src="https://github.com/user-attachments/assets/acf60b5c-6266-4a92-8872-75405efd7bfe" />


## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Modern component library
- **React Hook Form** - Form management

### Backend
- **Next.js API Routes** - Serverless functions
- **Prisma ORM** - Database toolkit
- **NextAuth.js** - Authentication solution
- **MongoDB** - NoSQL database

### Services & Tools
- **Cloudinary** - Image management
- **Vercel** - Deployment platform


## 🏗️ Architecture

```mermaid
graph TB
    subgraph "Frontend Layer"
        A[Next.js 14 App]
        B[React Components]
        C[Tailwind CSS]
        D[TypeScript]
    end
    
    subgraph "API Layer"
        E[Next.js API Routes]
        F[NextAuth.js]
        G[Prisma ORM]
    end
    
    subgraph "Data Layer"
        H[MongoDB Atlas]
        I[Cloudinary]
    end
    
    subgraph "External Services"
        J[OAuth Providers]
        K[Payment Gateway]
    end
    
    A --> E
    E --> G
    G --> H
    F --> J
    B --> I
    E --> I
    
    style A fill:#0070f3
    style H fill:#47A248
    style I fill:#3448C5
```


## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn package manager
- MongoDB database (local or Atlas)
- Cloudinary account

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/anurag12sharma/EasyStay-Online-Accomodation-Booking-System.git
cd EasyStay-Online-Accomodation-Booking-System/easy-stay
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Environment setup**
```bash
cp .env.example .env.local
```

4. **Configure environment variables**
```env
# Database
DATABASE_URL="mongodb+srv://..."

# NextAuth
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# OAuth Providers
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Cloudinary
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

5. **Database setup**
```bash
npx prisma generate
npx prisma db push
```

6. **Start development server**
```bash
npm run dev
# or
yarn dev
```

7. **Open your browser**
```
http://localhost:3000
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`npm run test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request


## ❓ FAQ

**Q: Can I use a different database?**
A: Currently optimised for MongoDB, but Prisma supports multiple databases. Check the [Database Migration Guide](docs/database-migration.md).

**Q: Is there a mobile app?**
A: Currently web-only, but the responsive design works great on mobile devices. Native apps are planned for future releases.


## 🙏 Acknowledgments

- **Next.js Team** for the amazing React framework
- **Vercel** for the excellent deployment platform
- **Prisma** for the powerful database toolkit
- **Tailwind CSS** for the utility-first CSS framework
- **MongoDB** for the flexible NoSQL database
- **Cloudinary** for seamless image management
- **Open Source Community** for inspiration and contributions

## 👨‍💻 About the Creator

**Anurag Sharma** - Full Stack Developer passionate about creating modern web applications that solve real-world problems.

- 💼 LinkedIn: [anurag12sharma](https://linkedin.com/in/anurag12sharma)
- 📧 Email: anurag2002sharma@gmail.com

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by [Anurag Sharma](https://github.com/anurag12sharma)

</div>
