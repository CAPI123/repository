# Eugine Obiero - Portfolio Website

A modern, premium portfolio website built with Next.js, React, Tailwind CSS, and Framer Motion. Designed to showcase expertise, build credibility, and convert visitors into clients.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with premium aesthetics
- **Dark Mode**: Beautiful dark theme optimized for readability
- **Smooth Animations**: Framer Motion powered animations and micro-interactions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading times and optimized assets
- **SEO Friendly**: Built with Next.js for optimal SEO
- **Accessible**: WCAG compliant design patterns

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **TypeScript**: Full type safety
- **Image Optimization**: Next.js Image component

## 📦 Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page component
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── Projects.tsx      # Projects showcase
│   ├── Services.tsx     # Services offered
│   ├── Testimonials.tsx  # Client testimonials
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer component
└── public/
    └── assets/          # Images and static assets
```

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.js` to customize the color scheme:
- Primary colors: `primary` (blue shades)
- Accent colors: `accent` (indigo/purple gradient)

### Content
Update component files in `components/` to modify:
- Personal information
- Projects
- Skills
- Services
- Testimonials

### Images
Place your images in `public/assets/img/` and update image paths in components.

## 📧 Contact Form Integration

The contact form is currently set up with a placeholder submission handler. To integrate with a real email service:

1. **EmailJS** (Recommended for quick setup):
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Update the form handler in `components/Contact.tsx`

2. **Formspree**:
   - Sign up at [Formspree](https://formspree.io/)
   - Update the form action URL

3. **Custom API**:
   - Create an API route in `app/api/contact/route.ts`
   - Update the form submission handler

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms
- **Netlify**: Connect your GitHub repo
- **AWS Amplify**: Follow AWS deployment guide
- **Docker**: Use the included Dockerfile (if added)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- Design inspiration from modern SaaS and agency websites
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

Built with ❤️ by Eugine Obiero

