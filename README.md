# Telecom Dealer Marketing Landing Page

Modern, animated landing page for WIZ THE PLANNING - a digital marketing company specializing in mobile phone dealer marketing.

## 🚀 Features

- **Modern Animations**: Built with Framer Motion for smooth, interactive experiences
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Email Integration**: Contact form with Resend email service
- **9 Strategic Sections**:
  - Hero with animated particles and mouse tracking
  - Market opportunity analysis
  - Customer journey visualization
  - Pain points identification
  - Offline marketing strategies
  - Online marketing strategies
  - Case studies
  - Service offerings
  - CTA footer with contact form
- **Performance Optimized**: Next.js 16 with Turbopack for fast development

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email Service**: Resend
- **Development**: Turbopack

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/wtpceo/telecom-dealer-marketing.git

# Navigate to project directory
cd telecom-dealer-marketing

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Resend API key to .env.local

# Start development server
npm run dev
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key_here
```

Get your API key from [Resend](https://resend.com/api-keys) (3,000 emails/month free).

See `EMAIL_SETUP.md` for detailed email configuration instructions.

## 📱 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Access the development server at [http://localhost:3000](http://localhost:3000)

## 📧 Email Configuration

The contact form sends submissions to `ceo@wiztheplanning.com` via Resend.

Features:
- Professional HTML email template
- Company branding with custom colors
- Automatic timestamp (Korea timezone)
- Form validation and error handling
- Success/error UI feedback

## 🎨 Brand Colors

- **Navy Primary**: `#1B3B6F`
- **Navy Secondary**: `#2E5090`
- **Orange Primary**: `#FF6B35`

## 📄 License

Copyright © 2024 WIZ THE PLANNING. All rights reserved.

## 📞 Contact

- **Phone**: 1670-0704
- **Email**: ceo@wiztheplanning.com
- **Address**: 서울시 금천구 디지털로 178 가산 퍼블릭 A동 2518-2519호
- **Business Registration**: 668-81-00391

---

Built with [Claude Code](https://claude.com/claude-code)
