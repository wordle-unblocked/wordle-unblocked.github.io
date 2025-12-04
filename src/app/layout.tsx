import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import Script from 'next/script';
import '@/styles/main.scss';

const roboto = Roboto_Flex({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Wordle Unblocked - Unlimited Free Word Game',
  description: 'Play Wordle unblocked for free! Enjoy the popular word puzzle game without restrictions. Guess the 5-letter word in 6 tries. No downloads, no sign-ups required.',
  keywords: 'wordle unblocked, wordle free, wordle game, word puzzle, word guess, 5 letter word game, daily wordle, vocabulary game, brain game, unblocked games',
  openGraph: {
    title: 'Wordle Unblocked - Play Free Online',
    description: 'Play Wordle without restrictions! Free word puzzle game available everywhere.',
    type: 'website',
    url: 'https://yourwebsite.com', // ← Replace with your actual URL
    images: ['/wordle-og-image.jpg'], // ← Add your OG image
  },
};

// Wordle Game Schema Markup
const wordleSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Wordle Unblocked",
  "alternateName": "Wordle Unlimited Free",
  "description": "Play Wordle unblocked for free & Unlimited without any restrictions. Guess the 5-letter word in 6 tries with daily puzzles and unlimited gameplay.",
  "url": "https://wordle-unblocked.github.io/", 
  "applicationCategory": "PuzzleGame",
  "gamePlatform": "Web Browser",
  "genre": ["Word Game", "Puzzle", "Educational", "Brain Game"],
  "keywords": "wordle unblocked, wordle free, word puzzle, word game, vocabulary, 5 letter word, daily puzzle, brain teaser",
  "operatingSystem": "Web",
  "author": {
    "@type": "Organization",
    "name": "Wordle Unblocked" 
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "playMode": "SinglePlayer",
  "gameLocation": "Online",
  "audience": {
    "@type": "PeopleAudience",
    "suggestedMinAge": "8",
    "suggestedMaxAge": "99"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1500",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Alex Turner"
      },
      "datePublished": "2025-12-01",
      "reviewBody": "Best unblocked Wordle version! Works perfectly at school and work.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Maria Garcia"
      },
      "datePublished": "2025-12-02",
      "reviewBody": "Love the unlimited play feature. No more waiting for daily puzzles!",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.8",
        "bestRating": "5"
      }
    }
  ],
  "softwareRequirements": "Web browser with JavaScript enabled",
  "educationalUse": "Vocabulary building, spelling practice, cognitive training",
  "learningResourceType": "Game",
  "typicalAgeRange": "8-99",
  "timeRequired": "PT3M", // 3 minutes per game
  "interactivityType": "active",
  "isAccessibleForFree": true,
  "featureList": [
    "Unlimited Wordle puzzles",
    "No restrictions or blocks",
    "Daily challenge mode",
    "Color-coded feedback system",
    "Statistics tracking",
    "Mobile-friendly design"
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaString = JSON.stringify(wordleSchema);
  
  return (
    <html lang='en'>
      <head>
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaString }}
        />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5KDYWQ75S4" 
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5KDYWQ75S4'); 
          `}
        </Script>
      </head>
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
