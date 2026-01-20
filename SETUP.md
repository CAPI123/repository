# Setup Instructions

## Quick Start

1. **Install dependencies**:
```bash
npm install
```

2. **Copy images to public folder**:
```bash
npm run setup-images
```
This will automatically copy all images from `assets/img/` to `public/assets/img/` where Next.js can serve them.

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## Image Paths

The portfolio uses images from your existing `assets/img/` folder. Make sure these images are accessible:

- `profile.jpg` - Your profile picture
- `production.jpg` - McDave Productions project
- `tech.jpg` - TechStrips project
- `journalism.jpg` - Amaica Media project
- `pos.jpg` - POS System project
- `mara.jpg` - Testimonial image
- `testimonials/testimonials-2.jpg` - Testimonial image
- `testimonials/testimonials-5.jpg` - Testimonial image

## Contact Form Setup

The contact form currently shows a success message. To enable real email functionality:

### Option 1: EmailJS (Easiest)
1. Sign up at https://www.emailjs.com/
2. Create a service and template
3. Update `components/Contact.tsx` with your EmailJS credentials

### Option 2: API Route
Create `app/api/contact/route.ts` and handle form submissions server-side.

## Customization

- **Colors**: Edit `tailwind.config.js`
- **Content**: Update component files in `components/`
- **Metadata**: Edit `app/layout.tsx` for SEO

## Deployment

The easiest way to deploy is using Vercel:

1. Push code to GitHub
2. Import on Vercel
3. Deploy automatically

Your site will be live at `yourname.vercel.app`

