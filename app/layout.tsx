import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MasterPlan - TheARG",
  description: "마스터플랜에 오신 것을 환영합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
