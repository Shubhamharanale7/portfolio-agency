# Shubham Haranale — Portfolio Agency Website

Futuristic MVP development agency portfolio built with Next.js 14, Framer Motion, and Three.js.

## 🚀 Quick Deploy

### 1. Add Profile Image
Copy your profile image to `public/images/profile.jpg`

### 2. Install & Run Locally
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Deploy to Vercel

**Option A — Via GitHub (Recommended)**
1. Push this project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-agency.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Import from GitHub
4. Select your repo → Click Deploy ✅

**Option B — Via Vercel CLI**
```bash
npm i -g vercel
vercel
```

## 🛠 Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **3D Globe**: Custom Canvas API

## 📁 Project Structure
```
portfolio-agency/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx          ← 3D Globe + Particles
│   ├── Trust.tsx         ← Marquee banner
│   ├── Services.tsx      ← Glass cards
│   ├── Portfolio.tsx     ← Project cards
│   ├── Process.tsx       ← Timeline
│   ├── TechStack.tsx     ← Tech icons
│   ├── Testimonials.tsx  ← Client reviews
│   ├── Pricing.tsx       ← Pricing cards
│   ├── About.tsx         ← Founder profile
│   ├── BlogPreview.tsx   ← Blog cards
│   ├── Contact.tsx       ← Calendly + info
│   ├── Footer.tsx
│   └── CursorGlow.tsx    ← Animated cursor
├── public/
│   └── images/
│       └── profile.jpg   ← ADD YOUR PHOTO HERE
├── styles/
│   └── globals.css
└── package.json
```

## 🖼 Adding Your Profile Photo
Place your profile image at: `public/images/profile.jpg`

## ✏️ Customization
- Colors: Edit `styles/globals.css` CSS variables
- Content: Edit individual component files
- Projects: Update `components/Portfolio.tsx`
- Testimonials: Update `components/Testimonials.tsx`
