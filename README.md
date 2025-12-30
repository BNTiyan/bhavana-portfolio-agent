# Bhavana Nare — Portfolio + Resume Agent

A modern **Next.js** portfolio website with an AI-powered resume chatbot, inspired by [thomas-to-bcheme.github.io](https://thomas-to-bcheme-github-io.vercel.app/).


## Features

- **Hero Section** with availability badge, trust signals, and CTAs
- **Live AI Agent** powered by Google Gemini (grounded in resume context)
- **Impact Metrics** with animated counters
- **Project Showcases** with problem/solution/tech stack cards
- **Career Roadmap** timeline
- **Responsive Design** with dark mode support

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **AI:** Google Generative AI (Gemini)
- **Icons:** Lucide React
- **Deployment:** Vercel

## Getting Started

### 1. Install dependencies

```bash
cd bhavana-portfolio-agent
npm install
```

### 2. Set up environment variables

Create a `.env.local` file:

```bash
GOOGLE_API_KEY=your_gemini_api_key_here
```

Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this folder to a new GitHub repository
2. Import the repo in [Vercel](https://vercel.com)
3. Add environment variable: `GOOGLE_API_KEY`
4. Deploy!

## Project Structure

```
src/
├── app/
│   ├── api/chat/route.ts    # Gemini API endpoint
│   ├── globals.css          # Tailwind + custom styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── AiGenerator.tsx      # Chat UI component
│   ├── ArchitectureDiagram.tsx
│   ├── Badge.tsx
│   ├── BentoGrid.tsx
│   ├── HeroSection.tsx
│   ├── ImpactMetric.tsx
│   ├── ProjectDeepDive.tsx
│   ├── Roadmap.tsx
│   ├── SystemStatusTicker.tsx
│   └── TrustBadge.tsx
├── data/
│   ├── AiSystemInformation.tsx  # Resume context for AI
│   └── resume.yml               # Source resume data
└── lib/
    └── utils.tsx                # Utility functions
```

## Customization

### Update Resume Data

Edit `src/data/AiSystemInformation.tsx` to update the resume context that the AI agent uses.

### Add Resume PDF

Copy your resume PDF to `public/docs/Bhavana.pdf` for the download button:

```bash
cp src/docs/Bhavana.pdf public/docs/Bhavana.pdf
```

The PDF is already included in `src/docs/Bhavana.pdf`.

### Modify Sections

- **Hero:** `src/components/HeroSection.tsx`
- **Projects:** Update the `ProjectDeepDive` components in `src/app/page.tsx`
- **Roadmap:** Edit phases in `src/components/Roadmap.tsx`

## Links

- **LinkedIn:** [bhavana-nare-60657385](https://www.linkedin.com/in/bhavana-nare-60657385/)
- **GitHub:** [Bhavana5N](https://github.com/Bhavana5N)
- **IEEE Publication:** [Computational Trust Framework](https://ieeexplore.ieee.org/document/11127674)

## License

MIT
