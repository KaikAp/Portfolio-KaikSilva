import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaik Silva",
  description: "Portfólio de Kaik - Desenvolvedor Full-Stack",
  keywords: ["Kaik", "Desenvolvedor", "Full-Stack", "Angular", "C#", "Portfolio"],
  authors: [{ name: "Kaik" }],
  openGraph: {
    title: "Kaik Silva",
    description: "Portfólio de Kaik - Desenvolvedor Full-Stack",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
