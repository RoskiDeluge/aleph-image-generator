import Header from "@/components/Header";
import PromptInput from "@/components/PromptInput";
import "../styles/globals.css";

export const metadata = {
  title: "imginate",
  description: "Generate images with AI that can remember and are remembered.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <PromptInput />
        {children}
      </body>
    </html>
  );
}
