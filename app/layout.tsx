import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "support page",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
                    <Link href="/">
                        <img
                            src="/gamers-academy.png"
                            alt="gamers-academy-logo"
                            className="m-auto p-5"
                        />
                    </Link>
                </div>
                {children}
            </body>
        </html>
    );
}
