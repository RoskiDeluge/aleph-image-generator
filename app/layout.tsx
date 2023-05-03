// import Header from "@/components/Header";
import PromptInput from "@/components/PromptInput";
import "../styles/globals.css";

export const metadata = {
  title: "Aleph Image Generator",
  description:
    "Generate orchid images that combine the styles of notable artists, or generate new images based on your own prompts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}

        <PromptInput />
        {children}
      </body>
    </html>
  );
}
