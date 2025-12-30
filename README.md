# Straystream

Personal portfolio and blog built with Astro + Keystatic, deployed on Cloudflare Pages.

## Stack

- **Frontend**: Astro (static HTML, minimal JS)
- **CMS**: Keystatic (rich text editor, file-based content)
- **Styling**: Tailwind CSS
- **Hosting**: Cloudflare Pages

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit:
- Site: http://localhost:4321
- Admin: http://localhost:4321/keystatic

## Content Management

### Adding a Blog Post

1. Go to `/keystatic`
2. Click "Blog Posts" → "Create"
3. Fill in title, excerpt, date, content
4. Check "Published" when ready
5. Save

### Adding a Project

1. Go to `/keystatic`
2. Click "Projects" → "Create"
3. Fill in details, add tech stack
4. Check "Featured" to show on home page
5. Save

### Editing Pages

Home and About pages are editable via Keystatic singletons.

## Deployment

### Option 1: Cloudflare Pages (Recommended)

1. Push to GitHub
2. Go to Cloudflare Dashboard → Pages
3. Create new project → Connect to Git
4. Configure build:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: 18+

5. For Keystatic in production (GitHub mode):
   - Update `keystatic.config.ts` to use GitHub storage
   - Add environment variables after first `/keystatic` visit
   - See [Keystatic GitHub Mode docs](https://keystatic.com/docs/github-mode)

### Option 2: Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build
npm run build

# Deploy
wrangler pages deploy dist
```

## Project Structure

```
├── src/
│   ├── components/      # Astro components
│   ├── content/         # Keystatic content (posts, projects, pages)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   └── styles/          # Global CSS
├── public/              # Static assets
├── keystatic.config.ts  # CMS configuration
├── astro.config.mjs     # Astro configuration
└── tailwind.config.mjs  # Tailwind configuration
```

## Keystatic Collections

### Blog Posts
- title, slug
- excerpt
- publishedDate
- coverImage
- isPublished
- content (rich text)

### Projects
- title, slug
- tagline
- techStack (array)
- projectLink, repoLink
- coverImage
- featured
- description (rich text)

### Singletons
- **Home**: headline, subheadline, CTA
- **About**: title, subtitle, content
- **Settings**: site name, description, social links

## Performance Notes

- All pages are statically generated
- Images served from `/public` (use Cloudflare's image optimization in dashboard)
- No client-side JavaScript except for Keystatic admin
- Tailwind CSS is purged in production
- Sitemap auto-generated at `/sitemap-index.xml`

## Customization

### Changing the Color Scheme

Edit `tailwind.config.mjs` → `theme.extend.colors.neutral`

### Adding New Collections

1. Add collection to `keystatic.config.ts`
2. Add schema to `src/content/config.ts`
3. Create pages in `src/pages/`

### Custom Domain

1. In Cloudflare Pages → Custom domains
2. Add your domain
3. Update `site` in `astro.config.mjs`
4. Update `robots.txt` sitemap URL
