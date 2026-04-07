import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import weddingMusic from "@/assets/wedding-music.mp3";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;
    audio.loop = true;
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src={weddingMusic} preload="auto" />
      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-maroon/90 border-2 border-gold text-gold shadow-lg backdrop-blur-sm flex items-center justify-center hover:bg-maroon transition-all duration-300 hover:scale-110 gold-glow"
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
      </button>
    </>
  );
};

export default MusicPlayer;
