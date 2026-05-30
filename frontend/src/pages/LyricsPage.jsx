import React, { useRef, useState } from "react";
import "./LyricsPage.css";

function LyricsPage({ pageTitle, items, backgroundImage }) {
  const audioRef = useRef({});
  const [playingId, setPlayingId] = useState(null);
  const [currentTime, setCurrentTime] = useState({});

  const handlePlay = (id) => {
    Object.keys(audioRef.current).forEach((key) => {
      if (Number(key) !== id && audioRef.current[key]) {
        audioRef.current[key].pause();
        audioRef.current[key].currentTime = 0;
      }
    });

    setPlayingId(id);
  };

  const handlePause = (id) => {
    // Do nothing here
    // This keeps the last highlighted word visible when paused
  };

  const handleEnded = (id) => {
    if (playingId === id) {
      setPlayingId(null);
      setCurrentTime((prev) => ({
        ...prev,
        [id]: 0,
      }));
    }
  };

  const handleTimeUpdate = (id) => {
    if (audioRef.current[id]) {
      setCurrentTime((prev) => ({
        ...prev,
        [id]: audioRef.current[id].currentTime,
      }));
    }
  };

  const renderTimedLine = (
    item,
    lineIndex,
    type,
    isPlayingThis,
    time,
    fallbackLine
  ) => {
    const lineWords =
      item.timedWords?.filter(
        (word) => word.type === type && word.line === lineIndex
      ) || [];

    if (lineWords.length === 0) {
      return <p className="lyric-line">{fallbackLine || "\u00A0"}</p>;
    }

    return (
      <p className="lyric-line">
        {lineWords.map((wordObj, wordIndex) => {
          const isActive =
            isPlayingThis &&
            time >= wordObj.start &&
            time <= wordObj.end;

          return (
            <span
              key={wordIndex}
              className={isActive ? "active-word" : ""}
              style={{ marginRight: "6px" }}
            >
              {wordObj.word}
            </span>
          );
        })}
      </p>
    );
  };

  return (
    <div
      className="lyrics-page"
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: "30px",
        paddingBottom: "30px",
      }}
    >
      <div style={{ maxWidth: "1250px", margin: "0 auto" }}>
        <h1 className="lyrics-page-main-title">{pageTitle}</h1>

        {items.map((item) => {
          const time = currentTime[item.id] || 0;
          const isPlayingThis = playingId === item.id;

          return (
            <div key={item.id} className="lyrics-card">
              <h2 className="lyrics-card-title">{item.title}</h2>

              {item.subtitle && (
                <h3 className="lyrics-card-subtitle">{item.subtitle}</h3>
              )}

              <audio
                controls
                className="lyrics-audio"
                ref={(el) => (audioRef.current[item.id] = el)}
                onPlay={() => handlePlay(item.id)}
                onPause={() => handlePause(item.id)}
                onEnded={() => handleEnded(item.id)}
                onTimeUpdate={() => handleTimeUpdate(item.id)}
              >
                <source src={item.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>

              <div className="lyrics-grid">
                <div className="lyrics-column maori-column">
                  <h3>Māori</h3>
                  {item.maori.map((line, lineIndex) => (
                    <div key={lineIndex}>
                      {renderTimedLine(
                        item,
                        lineIndex,
                        "maori",
                        isPlayingThis,
                        time,
                        line
                      )}
                    </div>
                  ))}
                </div>

                <div className="lyrics-column english-column">
                  <h3>English</h3>
                  {item.english.map((line, lineIndex) => (
                    <div key={lineIndex}>
                      {renderTimedLine(
                        item,
                        lineIndex,
                        "english",
                        isPlayingThis,
                        time,
                        line
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LyricsPage;