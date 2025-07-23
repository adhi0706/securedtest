import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AlgoShield - Algorand Smart Contract Security Scanner',
  description: 'Professional security analysis platform for Algorand smart contracts. Supports PyTeal, TEAL, TypeScript, and JavaScript with comprehensive vulnerability detection.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            #loading-screen {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 9999;
              flex-direction: column;
            }
            .loading-spinner {
              width: 40px;
              height: 40px;
              border: 4px solid #f3f3f3;
              border-top: 4px solid #10b981;
              border-radius: 50%;
              animation: spin 1s linear infinite;
            }
            .loading-text {
              margin-top: 20px;
              color: #666;
              font-size: 16px;
              font-family: Arial, sans-serif;
            }
          `
        }} />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="loading-screen">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading AlgoShield...</p>
        </div>
        {children}
        <script dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('DOMContentLoaded', function() {
              setTimeout(function() {
                const loadingScreen = document.getElementById('loading-screen');
                if (loadingScreen) {
                  loadingScreen.style.display = 'none';
                }
              }, 1000);
            });
          `
        }} />
      </body>
    </html>
  )
}