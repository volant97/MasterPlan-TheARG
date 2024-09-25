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
    <html
      lang="en"
      className="max-w-7xl h-[100dvh] mx-auto bg-neutral-400 text-white border-2 border-gray-600 overflow-y-hidden"
    >
      <body className="w-full h-full px-6 py-8 overflow-y-auto overflow-x-hidden scrollbar-hide bg-neutral-900">
        {children}
      </body>
    </html>
  );
}
