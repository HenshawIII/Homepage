export function BlurOverlay() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-40 pointer-events-none z-40"
      style={{
        background:
          "linear-gradient(to top, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.85) 40%, rgba(255, 255, 255, 0.5) 70%, transparent 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      aria-hidden="true"
    />
  );
}

