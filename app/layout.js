import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Thankful Thoughts',
  description:
    'Thankful Thoughts: An AI-powered app that helps you express gratitude and improve your mental health.',
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}