# AARNAIT AI — SEO Action Plan
## Get to Google Page 1 🚀

---

## 🔴 CRITICAL: Your Site is NOT Indexed by Google

I searched `site:aarnaitai.com` and `"aarnaitai.com"` — **zero results**. Google doesn't even know your site exists. This is the #1 problem to fix immediately.

---

## PHASE 1: IMMEDIATE (Do Today — 30 minutes)

### ✅ 1. Upload SEO Files to Cloudflare Pages

Upload these 3 files to your Cloudflare Pages root (alongside index.html):

| File | Purpose |
|------|---------|
| `robots.txt` | Tells Google what to crawl |
| `sitemap.xml` | Lists all your pages for Google |
| `og-image.png` | Social sharing image (create below) |

### ✅ 2. Replace Head Tags in index.html

Open your `index.html` and replace everything between `<head>` and the opening `<style>` tag with the content from `SEO_HEAD_TAGS.html`. Keep your existing `<style>` block intact.

**What changed:**
- Title: "AARNAIT AI — Intelligence Redefined" → **"AARNAIT AI — AI & Robotics Education | STEM Courses for Kids & Professionals | India"**
- Description: Added keyword-rich 155-char description
- Added 20+ targeted keywords
- Added canonical URL
- Added Open Graph tags (Facebook/LinkedIn/WhatsApp sharing)
- Added Twitter Card tags
- Added 5 structured data blocks (Organization, Courses, LocalBusiness, Website, FAQ)
- Added geo-location meta for Raipur
- Added `robots: index, follow` directive
- Updated CSP to allow Google Analytics

### ✅ 3. Fix www SSL Issue

Your `www.aarnaitai.com` has an SSL certificate mismatch. In Cloudflare:

1. Go to **SSL/TLS → Edge Certificates**
2. Make sure **"Always Use HTTPS"** is ON
3. Go to **Rules → Page Rules** → Add rule:
   - URL: `www.aarnaitai.com/*`
   - Setting: **Forwarding URL (301)** → `https://aarnaitai.com/$1`
4. This redirects all www traffic to non-www with proper SSL

### ✅ 4. Submit to Google Search Console (MOST IMPORTANT)

1. Go to **[search.google.com/search-console](https://search.google.com/search-console)**
2. Click **"Add Property"** → Choose **"URL prefix"** → Enter `https://aarnaitai.com`
3. Verify via **DNS TXT record** (easiest with Cloudflare):
   - Google gives you a TXT record like `google-site-verification=xxxx`
   - Go to Cloudflare DNS → Add TXT record → Name: `@` → Content: the verification string
4. After verification:
   - Go to **Sitemaps** → Submit `https://aarnaitai.com/sitemap.xml`
   - Go to **URL Inspection** → Enter `https://aarnaitai.com/` → Click **"Request Indexing"**
   - Do the same for `https://aarnaitai.com/careers.html`

### ✅ 5. Submit to Bing Webmaster Tools

1. Go to **[bing.com/webmasters](https://www.bing.com/webmasters)**
2. Add your site → Verify via DNS
3. Submit sitemap

---

## PHASE 2: THIS WEEK (High Impact SEO)

### ✅ 6. Create og-image.png

Create a 1200x630 image for social sharing. Use Canva or similar:
- Dark background (#0a0e27)
- AARNAIT AI logo (cyan "A" + white text)
- Tagline: "AI & Robotics Education for Every Generation"
- "35+ Programs | Ages 3 to Pro | India & Canada"

### ✅ 7. Create Google Business Profile

1. Go to **[business.google.com](https://business.google.com)**
2. Create listing for **"AARNAIT AI"**
3. Category: **"Educational institution"** + **"Computer training school"**
4. Address: Abhinandan Tower, Main Road, Bhatagaon, Raipur, CG 492013
5. Add photos, business hours, website URL
6. This puts you on **Google Maps** searches!

### ✅ 8. Set Up Google Analytics 4

1. Go to **[analytics.google.com](https://analytics.google.com)**
2. Create Account → Create Property → Enter `aarnaitai.com`
3. Get your **Measurement ID** (format: `G-XXXXXXXXXX`)
4. In `SEO_HEAD_TAGS.html`, uncomment the Google Analytics script and replace `G-XXXXXXXXXX` with your actual ID
5. Re-upload index.html

### ✅ 9. Add Blog Section (Major SEO Boost)

Create individual HTML pages for each topic — Google ranks pages, not sections:

**Priority blog pages to create:**
- `ai-education-india.html` — "AI Education in India: Complete Guide 2026"
- `robotics-courses-kids.html` — "Best Robotics Courses for Kids Ages 3-14"
- `stem-education-raipur.html` — "STEM Education in Raipur Chhattisgarh"
- `arduino-courses-india.html` — "Learn Arduino Programming in India"
- `ai-careers-india.html` — "Top AI Career Paths in India 2026"

Each page should be 1500+ words, keyword-optimized, and link back to your main site.

---

## PHASE 3: NEXT 2 WEEKS (Growth SEO)

### ✅ 10. Target These Keywords

Based on competitor analysis, these keywords have search volume and low competition:

**High Priority (directly relevant):**
- "robotics classes for kids India" — 1K-10K monthly
- "AI courses for students India" — 1K-10K monthly
- "STEM education India" — 10K-100K monthly
- "Arduino courses for beginners" — 1K-10K monthly
- "robotics academy India" — 100-1K monthly
- "coding classes for kids Raipur" — Low competition, local intent
- "STEM lab setup India" — 100-1K monthly
- "AI certification India" — 1K-10K monthly

**Long-tail (easy to rank):**
- "robotics classes for kids in Chhattisgarh"
- "AI education startup India"
- "STEM kits for school students India"
- "Arduino robot car kit for students"
- "best robotics course for 7 year old India"
- "IoT training Raipur"

### ✅ 11. Get Backlinks (Most Powerful Ranking Factor)

**Quick wins:**
- Submit to Indian startup directories (YourStory, Inc42, TracxN)
- Create profiles on Crunchbase, AngelList, LinkedIn Company Page
- List on education directories (EdSurge, ClassCentral)
- Submit press release about AARNAIT AI launch
- Guest post on Indian education blogs
- Comment (helpfully) on Reddit r/india, r/STEM, r/robotics
- Quora answers about "AI education India" with link to your site

### ✅ 12. Social Media Presence

Create and actively post on:
- **LinkedIn Company Page** (most important for B2B/education)
- **Instagram** (showcase student projects, STEM kits)
- **YouTube** (tutorial videos rank in Google too!)
- **Twitter/X** (industry news, AI updates)

Every post should link back to `aarnaitai.com`

---

## PHASE 4: ONGOING (Monthly)

### ✅ 13. Content Calendar

Publish 2-4 blog posts per month:
- "How to Build a Robot Car with Arduino — Step by Step"
- "Top 10 STEM Kits for School Students in India 2026"
- "AI vs Robotics: Which Career Path is Right for You?"
- "Setting Up a Robotics Lab in Indian Schools"
- "What Age Should Kids Start Learning Coding?"

### ✅ 14. Monitor & Optimize

- Check Google Search Console weekly for:
  - Which queries bring impressions
  - Click-through rates (optimize titles/descriptions for low CTR)
  - Coverage errors (fix any crawl issues)
- Check Google Analytics for:
  - Top landing pages
  - Bounce rate (should be <60%)
  - User geography

### ✅ 15. Technical SEO Checklist

- [ ] Page loads under 3 seconds (test at PageSpeed Insights)
- [ ] Mobile-friendly (test at Google Mobile-Friendly Test)
- [ ] No broken links (check with Screaming Frog or similar)
- [ ] All images have alt text
- [ ] Internal links between pages
- [ ] HTTPS everywhere (no mixed content)

---

## YOUR COMPETITORS (who you need to outrank)

| Company | Domain | Strength |
|---------|--------|----------|
| STEMpedia | thestempedia.com | IIT founders, government partnerships |
| STEMROBO | stemrobo.com | NEP 2020 aligned, school labs |
| Mechatron Robotics | mechatronrobotics.com | 50K+ students, franchise model |
| STEMbotix | stembotix.in | Kids robotics focus |
| TechnoSchool | technoschool.in | School lab provider |
| Robokidz | robokidz.co.in | Online + offline classes |

**Your edge:** Local Raipur presence (no major competitor there), age 3-14 niche, combined AI+Robotics+Education, international (India+Canada).

---

## TIMELINE TO PAGE 1

| Timeframe | Expected Result |
|-----------|----------------|
| Week 1 | Site gets indexed by Google (Phase 1 + 2) |
| Week 2-4 | Start appearing for long-tail keywords |
| Month 2-3 | Rank for "robotics classes Raipur", "STEM education Chhattisgarh" |
| Month 3-6 | Rank for mid-competition keywords nationally |
| Month 6-12 | Compete for "AI courses India", "robotics education India" |

**The single most impactful thing right now: Submit to Google Search Console and request indexing.** Everything else builds on top of that.
