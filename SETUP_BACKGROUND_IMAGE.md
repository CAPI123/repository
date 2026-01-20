# Setting Up Background Image for Hero Section

## Steps to Add Your Pinterest Image

### 1. Download the Image
1. Go to the Pinterest link: https://pin.it/5WbW60bjr
2. Click on the image to open it in full size
3. Right-click on the image and select "Save image as..." or "Download image"
4. Save it with the name: `hero-background.jpg`

### 2. Add to Your Project
1. Copy the downloaded image to: `public/assets/img/hero-background.jpg`
   
   Or use this command:
   ```bash
   # Copy your downloaded image to the public folder
   copy "path\to\your\downloaded\image.jpg" "public\assets\img\hero-background.jpg"
   ```

### 3. Alternative: Use Direct URL (if available)
If you have a direct image URL, you can update `components/Hero.tsx`:

```tsx
backgroundImage: `url('YOUR_DIRECT_IMAGE_URL')`,
```

## Current Setup

The Hero component is now configured to use:
- Background image: `/assets/img/hero-background.jpg`
- SVG pattern overlay (subtle, can be removed)
- Gradient overlays for text readability

## Customization Options

### Option 1: Image Only (Remove SVG)
If you want just the image without the SVG pattern, edit `components/Hero.tsx` and remove or comment out:
```tsx
<HeroBackground />
```

### Option 2: Adjust Gradient Overlay
Modify the gradient opacity in `components/Hero.tsx`:
- Lower opacity = more visible image
- Higher opacity = more visible gradient/text

### Option 3: Change Image Position
Add CSS classes to the background div:
- `bg-center` - Center (default)
- `bg-top` - Top
- `bg-bottom` - Bottom
- `bg-left` - Left
- `bg-right` - Right

## Image Recommendations

For best results:
- **Resolution**: 1920x1080 or higher
- **Format**: JPG or PNG
- **File Size**: Under 500KB for faster loading
- **Aspect Ratio**: 16:9 or wider

## Testing

Once you've added the image:
1. Restart your dev server if it's running
2. Refresh your browser
3. The image should appear as the hero background

If the image doesn't appear:
- Check the file path is correct
- Ensure the file is in `public/assets/img/`
- Check browser console for 404 errors
- Verify the filename matches exactly: `hero-background.jpg`

