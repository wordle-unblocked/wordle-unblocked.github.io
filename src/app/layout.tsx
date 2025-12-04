import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';

import '@/styles/main.scss';

const roboto = Roboto_Flex({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Wordle Unblocked - Unlimited',
  description:
    'Play Wordle unblocked for free! Enjoy the popular word puzzle game without restrictions. Guess the 5-letter word in 6 tries. No downloads, no sign-ups required.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
