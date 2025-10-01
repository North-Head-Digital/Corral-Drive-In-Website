# 🚀 Deployment Guide - Corral Drive-In Website

This guide covers multiple deployment options for the Corral Drive-In website.

## 📋 Pre-Deployment Checklist

- [ ] All files are in the correct directory structure
- [ ] Images are optimized and properly named
- [ ] Contact information is updated
- [ ] Menu items and prices are current
- [ ] Test the website locally first
- [ ] Verify all links work correctly

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended - Free)

**Steps:**
1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Corral Drive-In website"
   git branch -M main
   git remote add origin https://github.com/yourusername/corral-drive-in.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Save

3. **Access Your Site**
   - URL: `https://yourusername.github.io/corral-drive-in`
   - Custom domain can be added later

**Pros:** Free, automatic deployments, version control
**Cons:** Public repository (unless GitHub Pro)

### Option 2: Netlify (Free Tier)

**Steps:**
1. **Sign up** at [netlify.com](https://netlify.com)
2. **Connect GitHub** repository
3. **Configure build settings:**
   - Build command: (leave empty)
   - Publish directory: /
4. **Deploy**

**Pros:** Custom domains, form handling, serverless functions
**Cons:** Limited build minutes on free tier

### Option 3: Vercel (Free Tier)

**Steps:**
1. **Sign up** at [vercel.com](https://vercel.com)
2. **Import GitHub** repository
3. **Configure project:**
   - Framework Preset: Other
   - Root Directory: ./
4. **Deploy**

**Pros:** Fast global CDN, automatic HTTPS
**Cons:** Limited bandwidth on free tier

### Option 4: Traditional Web Hosting

**Steps:**
1. **Purchase hosting** (shared hosting works fine)
2. **Upload files** via FTP/SFTP
3. **Point domain** to hosting provider
4. **Test website**

**Popular providers:**
- Bluehost
- HostGator
- SiteGround
- DreamHost

## 🔧 Post-Deployment Setup

### 1. Custom Domain (Optional)

**For GitHub Pages:**
1. Add `CNAME` file to repository root:
   ```
   corraldrivein.com
   ```
2. Update DNS records with your domain provider
3. Enable HTTPS in GitHub Pages settings

**For Netlify:**
1. Go to Domain settings
2. Add custom domain
3. Update DNS records as instructed

### 2. Analytics Setup

**Google Analytics:**
```html
<!-- Add to <head> section of index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**Plausible Analytics (Privacy-focused):**
```html
<!-- Add to <head> section of index.html -->
<script defer data-domain="corraldrivein.com" src="https://plausible.io/js/script.js"></script>
```

### 3. SEO Optimization

**Submit to Search Engines:**
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

**Update sitemap.xml:**
- Change URLs to your actual domain
- Update lastmod dates

### 4. Social Media Integration

**Facebook Page:**
- Create Facebook page for restaurant
- Update social links in footer

**Instagram Integration:**
- Add Instagram feed (optional)
- Update social links

## 🔄 Updates and Maintenance

### Regular Updates Needed:
- [ ] Menu prices and items
- [ ] Gallery photos
- [ ] Contact information
- [ ] Business hours
- [ ] Special promotions

### How to Update:
1. **Edit files** locally
2. **Test changes** on local server
3. **Commit changes** to git
4. **Push to repository**
5. **Verify** live site updates

## 📊 Monitoring and Analytics

### Essential Metrics to Track:
- **Page views** and unique visitors
- **Popular pages** and menu items
- **Mobile vs desktop** usage
- **Geographic location** of visitors
- **Bounce rate** and time on site

### Tools:
- Google Analytics (free)
- Plausible Analytics (privacy-focused)
- Google Search Console
- PageSpeed Insights

## 🛠 Troubleshooting

### Common Issues:

**1. Images not loading:**
- Check file paths are correct
- Ensure images are uploaded
- Verify file permissions

**2. CSS not applying:**
- Check for typos in CSS file
- Verify Bootstrap CDN is loading
- Clear browser cache

**3. JavaScript errors:**
- Check browser console for errors
- Verify all JS files are loaded
- Test on different browsers

**4. Mobile responsiveness issues:**
- Test on actual devices
- Check viewport meta tag
- Verify CSS media queries

### Support Resources:
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [Leaflet.js Documentation](https://leafletjs.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 📞 Need Help?

If you encounter issues during deployment:

1. **Check the test.html** page for diagnostics
2. **Review browser console** for errors
3. **Verify all files** are uploaded correctly
4. **Test locally** before deploying

---

**🎉 Congratulations!** Your Corral Drive-In website should now be live and ready to welcome customers!
