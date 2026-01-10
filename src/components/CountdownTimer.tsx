import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Time = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  // 1 maja 2026 - 9:00
  const targetDate = new Date(2026, 4, 1, 9);

  const calculateTimeLeft = (): Time => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      } as Time;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    } as Time;
  };

  const [timeLeft, setTimeLeft] = useState<Time>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const hasEventStarted = (timeLeft: Time) => timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (
    <div className="">
      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white text-center rounded-lg border border-gray-200 px-14 py-6"><div className="text-5xl md:text-8xl font-thin mb-3">{timeLeft.days}</div><div className="text-lg">dni</div></div>
        <div className="bg-white text-center rounded-lg border border-gray-200 px-10 py-6"><div className="text-5xl md:text-8xl font-thin mb-3">{timeLeft.hours}</div><div className="text-lg">godzin</div></div>
        <div className="bg-white text-center rounded-lg border border-gray-200 px-10 py-6"><div className="text-5xl md:text-8xl font-thin mb-3">{timeLeft.minutes}</div><div className="text-lg">minut</div></div>
        <div className="bg-white text-center rounded-lg border border-gray-200 px-10 py-6"><div className="text-5xl md:text-8xl font-thin mb-3">{timeLeft.seconds}</div><div className="text-lg">sekund</div></div>
      </div>
      {
        hasEventStarted(timeLeft) ? <div className="flex justify-center mt-8">
          <a
            href="https://www.twitch.tv/tanczmy"
            className="px-10 py-8 bg-twitch text-gray-200 hover:text-white border border-gray-300 rounded-lg hover:bg-twitch-hover hover:shadow-lg transition-colors font-medium flex gap-3"
          >
            <span className="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-twitch"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 5v11a1 1 0 0 0 1 1h2v4l4 -4h5.584c.266 0 .52 -.105 .707 -.293l2.415 -2.414c.187 -.188 .293 -.442 .293 -.708v-8.585a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1l.001 0" /><path d="M16 8l0 4" /><path d="M12 8l0 4" /></svg>
            </span>
            <span className="">Oglądaj event</span>
          </a>
        </div> : <></>
      }

      <div className="text-xl text-center mt-14 space-y-4">
        <p>
          Czas eventu: <span className="font-semibold">1 - 3 maja 2026</span>
        </p>
        <p>
          Startujemy <span className="font-semibold">1 maja</span> o godz. <span className="font-semibold">9:00</span>
        </p>
      </div>
    </div>
  );
}
