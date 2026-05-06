export default function AchievementsBanner() {
  return (
    <div className="bg-dark py-12 px-6 lg:px-12 flex flex-col items-center justify-center text-center">
      <p className="text-lime text-xs font-bold tracking-[0.3em] uppercase mb-2">
        Achievements History
      </p>
      <p
        className="text-white text-[clamp(4rem,12vw,10rem)] font-extrabold leading-none tracking-tight"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        2026
      </p>
    </div>
  );
}
