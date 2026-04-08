import { useEffect, useState } from "react";

const CHANNEL = "roweremzsercem";
// const CHANNEL = "shroud";

export default function TwitchEmbed() {
  const [parent, setParent] = useState("");

  useEffect(() => {
    setParent(window.location.hostname || "localhost");
  }, []);

  if (!parent) return null;

  return (
    <div className="w-full flex flex-wrap justify-center gap-4">
      <iframe
        src={`https://player.twitch.tv/?channel=${CHANNEL}&parent=${parent}&autoplay=true`}
        allowFullScreen
        allow="autoplay; fullscreen"
        title={`${CHANNEL} stream`
        }
        className="w-full max-w-6xl aspect-video rounded-lg bg-[#18181b] border-slate-400 border hover:shadow-lg transition-shadow"
      />
      <iframe
        src={`https://www.twitch.tv/embed/${CHANNEL}/chat?parent=${parent}`}
        title={`${CHANNEL} chat`}
        className="w-full min-h-160 md:max-w-lg rounded-lg bg-[#ffffff] border-slate-200 border hover:shadow-lg transition-shadow"
      />
    </div >
  );
}
