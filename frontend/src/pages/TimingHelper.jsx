import React, { useRef, useState } from "react";
import karakiaMoTeKaiAudio from "../assets/audio/prayers/karakia-mo-te-kai.mp3";

function TimingHelper() {
  const audioRef = useRef(null);
  const [times, setTimes] = useState([]);
  const [copied, setCopied] = useState("");

  const lyricLines = [
    ["E", "te", "Atua"],
    ["Whakapainga", "ēnei", "kai"],
    ["Hei", "oranga", "mō", "ō", "mātou", "tinana"],
    ["Whāngaia", "hoki", "ō", "mātou", "wairua", "ki", "te", "taro", "o", "te", "ora"],
    ["Ko", "Ihu", "Karaiti", "tō", "mātou", "Ariki"],
    ["Ake,", "ake,", "ake"],
    ["Amine"]
  ];

  const words = lyricLines.flat();

  const captureTime = () => {
    if (!audioRef.current) return;
    const currentTime = audioRef.current.currentTime.toFixed(2);

    if (times.length < words.length) {
      setTimes((prev) => [
        ...prev,
        {
          word: words[prev.length],
          time: currentTime,
        },
      ]);
    }
  };

  const resetTimes = () => {
    setTimes([]);
    setCopied("");
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
    }
  };

  const copyTimes = async () => {
    const text = times
      .map((item, index) => `${index + 1}. ${item.word} - ${item.time}s`)
      .join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopied("Copied!");
    } catch (error) {
      setCopied("Copy failed");
    }
  };

  let runningIndex = 0;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        padding: "30px 20px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "950px",
          margin: "0 auto",
          backgroundColor: "white",
          color: "#111827",
          borderRadius: "16px",
          padding: "30px",
          boxShadow: "0 6px 14px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#1f2fa5", marginBottom: "20px" }}>
          Timing Helper - Karakia mō te kai
        </h1>

        <p style={{ textAlign: "center", lineHeight: "1.7", marginBottom: "10px" }}>
          Play the audio and click <strong>Capture Time</strong> whenever the next word starts.
        </p>

        <p style={{ textAlign: "center", fontWeight: "bold", color: "#1f2fa5" }}>
          Next word: {words[times.length] || "Finished"}
        </p>

        <audio
          ref={audioRef}
          controls
          style={{ width: "100%", marginTop: "20px", marginBottom: "25px" }}
        >
          <source src={karakiaMoTeKaiAudio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "25px",
          }}
        >
          <button
            onClick={captureTime}
            style={{
              padding: "12px 20px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#1f2fa5",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Capture Time
          </button>

          <button
            onClick={resetTimes}
            style={{
              padding: "12px 20px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#b91c1c",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Reset
          </button>

          <button
            onClick={copyTimes}
            style={{
              padding: "12px 20px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#166534",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Copy Times
          </button>
        </div>

        {copied && (
          <p style={{ textAlign: "center", fontWeight: "bold", color: "#166534" }}>
            {copied}
          </p>
        )}

        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            borderRadius: "12px",
            backgroundColor: "#f9fafb",
            border: "1px solid #ddd",
          }}
        >
          <h3 style={{ color: "#1f2fa5", marginBottom: "15px" }}>Prayer Words</h3>

          {lyricLines.map((line, lineIndex) => (
            <p
              key={lineIndex}
              style={{ fontSize: "22px", lineHeight: "2", marginBottom: "12px" }}
            >
              {line.map((word, wordIndex) => {
                const currentIndex = runningIndex;
                runningIndex++;

                const isCaptured = currentIndex < times.length;
                const isNext = currentIndex === times.length;

                return (
                  <span
                    key={wordIndex}
                    style={{
                      marginRight: "10px",
                      padding: "4px 8px",
                      borderRadius: "8px",
                      backgroundColor: isCaptured
                        ? "#d1fae5"
                        : isNext
                        ? "#fde68a"
                        : "transparent",
                      color: isCaptured
                        ? "#065f46"
                        : isNext
                        ? "#92400e"
                        : "#111827",
                      fontWeight: isCaptured || isNext ? "bold" : "normal",
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </p>
          ))}
        </div>

        <div
          style={{
            marginTop: "25px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "12px",
            backgroundColor: "#f9fafb",
          }}
        >
          <h3 style={{ color: "#1f2fa5", marginBottom: "15px" }}>Captured Times</h3>

          {times.length === 0 ? (
            <p>No timings captured yet.</p>
          ) : (
            <ul style={{ lineHeight: "1.8" }}>
              {times.map((item, index) => (
                <li key={index}>
                  <strong>{item.word}</strong> - {item.time}s
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default TimingHelper;