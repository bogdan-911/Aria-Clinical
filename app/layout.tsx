import type {Metadata, Viewport} from 'next';
import './globals.css'; // Global styles

export const viewport: Viewport = {
  themeColor: '#00674F',
};

export const metadata: Metadata = {
  title: 'Aria Clinical',
  description: 'AI-driven patient intake systems for premium UK clinics.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-[#00674F]" suppressHydrationWarning>{children}</body>
    </html>
  );
}
