import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlurOverlay } from "@/components/layout/BlurOverlay";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="relative">
        {children}
      </main>
      {/* <BlurOverlay /> */}
      <Footer />
    </>
  );
}

