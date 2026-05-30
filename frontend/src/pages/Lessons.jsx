import { useEffect, useState } from "react";

import greetingsImage from "../assets/images/greetings.jpg";
import numbersImage from "../assets/images/numbers.webp";
import coloursImage from "../assets/images/colors.jpg";
import familyImage from "../assets/images/family.webp";
import dailyUseImage from "../assets/images/daily-use.png";

function Lessons() {
  const [lessons, setLessons] = useState([]);
  const [words, setWords] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [playingWordId, setPlayingWordId] = useState(null);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
   fetch(`${import.meta.env.VITE_API_URL}/lessons`)
      .then((response) => response.json())
      .then((data) => {
        const filteredLessons = data.filter(
          (lesson) =>
            lesson.title.toLowerCase() !== "waiata" &&
            lesson.title.toLowerCase() !== "prayers"
        );
        setLessons(filteredLessons);
      })
      .catch((error) => console.error("Error fetching lessons:", error));

    fetch(`${import.meta.env.VITE_API_URL}/words`)
      .then((response) => response.json())
      .then((data) => setWords(data))
      .catch((error) => console.error("Error fetching words:", error));

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (currentAudio) {
        currentAudio.pause();
      }
    };
  }, [currentAudio]);

  const playAudio = (word) => {
    if (!word.audio_url) return;

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    const audio = new Audio(word.audio_url);
    setCurrentAudio(audio);
    setPlayingWordId(word.id);

    audio.play();

    audio.onended = () => {
      setPlayingWordId(null);
    };
  };

  const closeLessonView = () => {
    setSelectedLesson(null);
    setPlayingWordId(null);

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
  };

  const selectedLessonWords = selectedLesson
    ? words.filter((word) => word.lesson_id === selectedLesson.id)
    : [];

  const lessonImages = {
    greetings: greetingsImage,
    numbers: numbersImage,
    colours: coloursImage,
    family: familyImage,
    "daily use words and phrases": dailyUseImage,
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f3f4f6",
          padding: "40px 20px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h1
              style={{
                fontSize: isMobile ? "36px" : "52px",
                color: "#2438b5",
                marginBottom: "10px",
              }}
            >
              Explore Learning Sections
            </h1>

            <p
              style={{
                fontSize: isMobile ? "16px" : "18px",
                color: "#555",
                margin: 0,
              }}
            >
              Choose a lesson category below to learn Māori words with audio and
              meanings.
            </p>
          </div>

          {lessons.length === 0 ? (
            <p style={{ textAlign: "center", fontSize: "18px", color: "#555" }}>
              Loading lessons...
            </p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "28px",
              }}
            >
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  onClick={() => setSelectedLesson(lesson)}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "20px",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                    padding: "22px 20px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    border:
                      selectedLesson?.id === lesson.id
                        ? "3px solid #2438b5"
                        : "2px solid transparent",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "180px",
                      borderRadius: "14px",
                      overflow: "hidden",
                      marginBottom: "18px",
                      backgroundColor: "#eee",
                    }}
                  >
                    <img
                      src={lessonImages[lesson.title.toLowerCase()]}
                      alt={lesson.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <h2
                    style={{
                      color: "#2438b5",
                      fontSize: "22px",
                      marginBottom: "12px",
                    }}
                  >
                    {lesson.title}
                  </h2>

                  <p
                    style={{
                      color: "#555",
                      fontSize: "16px",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {lesson.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedLesson && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#f8fafc",
            zIndex: 1000,
            overflowY: "auto",
            padding: "30px 20px",
          }}
        >
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: isMobile ? "flex-start" : "center",
                flexDirection: isMobile ? "column" : "row",
                gap: "20px",
                marginBottom: "25px",
              }}
            >
              <div>
                <h2
                  style={{
                    color: "#2438b5",
                    fontSize: isMobile ? "32px" : "40px",
                    margin: 0,
                  }}
                >
                  {selectedLesson.title}
                </h2>

                <p
                  style={{
                    color: "#666",
                    fontSize: isMobile ? "16px" : "18px",
                    marginTop: "8px",
                    marginBottom: 0,
                  }}
                >
                  {selectedLesson.description}
                </p>
              </div>

              <button
                onClick={closeLessonView}
                style={{
                  padding: "10px 18px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "#2438b5",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Back to Lessons
              </button>
            </div>

            <div
              style={{
                backgroundColor: "white",
                borderRadius: "18px",
                padding: isMobile ? "20px" : "28px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  color: "#222",
                  marginBottom: "24px",
                  fontSize: isMobile ? "24px" : "28px",
                }}
              >
                Vocabulary Words
              </h3>

              {selectedLessonWords.length === 0 ? (
                <p style={{ textAlign: "center", color: "#666" }}>
                  No words found for this lesson.
                </p>
              ) : (
                selectedLessonWords.map((word) => (
                  <div
                    key={word.id}
                    style={{
                      display: "flex",
                      flexDirection: isMobile ? "column" : "row",
                      justifyContent: "space-between",
                      alignItems: isMobile ? "flex-start" : "center",
                      gap: "16px",
                      border:
                        playingWordId === word.id
                          ? "2px solid #f0c400"
                          : "1px solid #ddd",
                      borderRadius: "14px",
                      padding: isMobile ? "16px" : "18px 22px",
                      marginBottom: "14px",
                      backgroundColor:
                        playingWordId === word.id ? "#fff8cc" : "#f9fafb",
                      boxShadow:
                        playingWordId === word.id
                          ? "0 6px 12px rgba(240, 196, 0, 0.18)"
                          : "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        minWidth: 0,
                        textAlign: "left",
                      }}
                    >
                      <div
                        style={{
                          fontWeight: "bold",
                          fontSize: isMobile ? "18px" : "20px",
                          color: "#111",
                          marginBottom: "8px",
                          lineHeight: "1.3",
                        }}
                      >
                        {word.maori_word}
                      </div>

                      <div
                        style={{
                          color: "#666",
                          fontSize: isMobile ? "16px" : "17px",
                          lineHeight: "1.5",
                        }}
                      >
                        {word.english_meaning}
                      </div>
                    </div>

                    <button
                      onClick={() => playAudio(word)}
                      style={{
                        padding: "12px 18px",
                        borderRadius: "10px",
                        border: "none",
                        cursor: "pointer",
                        backgroundColor: "#2438b5",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "16px",
                        minWidth: isMobile ? "100%" : "165px",
                        alignSelf: isMobile ? "stretch" : "center",
                      }}
                    >
                      Play Audio
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Lessons;