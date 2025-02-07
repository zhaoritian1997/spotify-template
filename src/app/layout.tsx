import "./globals.css";
import { PlayingProvider } from "@/hooks/PlayProvider"
import PageLayout from "@/components/PageLayout";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" id="viewport"
          content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, viewport-fit=cover" />
        <meta content="telephone=no" name="format-detection" />
        <title>Spotify - Web Player: Music for everyone</title>
        <link rel="icon" href="favicon.ico" />
      </head>
      <body className="h-full w-full overflow-hidden min-w-[900px]">
        <PlayingProvider>
          <PageLayout>
            {children}
          </PageLayout>
        </PlayingProvider>
      </body>
    </html>
  );
}
