# 🚀 Portfolio Website - much.ilbasuttaqwa

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-13+-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38bdf8)

## ✨ Tentang Proyek

Portfolio website modern dan responsif yang menampilkan perjalanan karir saya sebagai **IT Specialist** di CV Tiga Putra Perkasa. Website ini dibangun dengan teknologi terdepan dan desain yang menarik untuk memberikan pengalaman pengguna yang optimal.

## 🎯 Fitur Utama

- 🎨 **Desain Modern**: UI/UX yang clean dan profesional
- 📱 **Fully Responsive**: Optimal di semua perangkat
- 🌙 **Dark/Light Mode**: Toggle tema yang smooth
- ⚡ **Performance Optimized**: Loading cepat dengan Next.js
- 🎭 **Smooth Animations**: Animasi yang halus dengan Framer Motion
- 🔍 **SEO Friendly**: Optimasi untuk mesin pencari
- 📧 **Contact Form**: Form kontak yang terintegrasi
- 🌐 **Multilingual**: Mendukung Bahasa Indonesia

## 🛠️ Tech Stack

### Frontend
- **Next.js 13+** - React framework dengan App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form handling
- **React Icons** - Icon library

### Deployment
- **Vercel** - Hosting platform
- **GitHub** - Version control

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

```bash
# Clone repository
git clone https://github.com/ilbasuttaqwa/portfolio-website.git

# Masuk ke direktori
cd portfolio-website

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

## 📁 Struktur Proyek

```
portfolio-website/
├── app/                    # App Router (Next.js 13+)
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── about.tsx         # About section
│   ├── contact.tsx       # Contact section
│   ├── experience.tsx    # Experience section
│   ├── header.tsx        # Navigation header
│   ├── intro.tsx         # Hero section
│   ├── projects.tsx      # Projects showcase
│   └── skills.tsx        # Skills section
├── context/              # React contexts
├── lib/                  # Utilities & data
│   ├── data.ts          # Static data
│   ├── hooks.ts         # Custom hooks
│   └── types.ts         # TypeScript types
├── public/               # Static assets
└── actions/              # Server actions
```

## 🎨 Kustomisasi

### Warna & Tema
Edit file `tailwind.config.js` untuk mengubah skema warna:

```javascript
colors: {
  primary: {
    // Your primary colors
  },
  accent: {
    // Your accent colors
  }
}
```

### Data Personal
Update informasi personal di `lib/data.ts`:

```typescript
export const experiencesData = [
  // Your experiences
];

export const projectsData = [
  // Your projects
];

export const skillsData = [
  // Your skills
];
```

## 📊 Proyek Unggulan

### 🔐 Fingerprint Authentication System
Sistem autentikasi biometrik dengan teknologi machine learning untuk keamanan tingkat tinggi.

**Tech Stack**: Python, OpenCV, Machine Learning, SQLite

### 🏢 Sistem Manajemen Perusahaan
Aplikasi web komprehensif untuk mengelola operasional perusahaan.

**Tech Stack**: React, Next.js, MongoDB, Node.js

## 🌐 Deployment

### Deploy ke Vercel

1. Push code ke GitHub
2. Connect repository ke Vercel
3. Deploy otomatis akan berjalan

```bash
# Build production
npm run build

# Start production server
npm start
```

## 📈 Performance

- ⚡ **Lighthouse Score**: 95+
- 🚀 **First Contentful Paint**: < 1.5s
- 📱 **Mobile Friendly**: 100%
- ♿ **Accessibility**: 95+

## 🤝 Contributing

Kontribusi selalu diterima! Silakan:

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

Project ini menggunakan MIT License. Lihat file `LICENSE` untuk detail.

## 📞 Contact

**much.ilbasuttaqwa**
- 📧 Email: tbdream9@gmail.com
- 💼 LinkedIn: [Much Ilbasuttaqwa](https://www.linkedin.com/in/much-ilbasuttaqwa-65418830a/)
- 📱 WhatsApp: [083846249279](https://wa.me/6283846249279)

---

⭐ **Jika project ini membantu, jangan lupa berikan star!** ⭐

![Made with ❤️ by much.ilbasuttaqwa](https://img.shields.io/badge/Made%20with%20❤️%20by-much.ilbasuttaqwa-red)