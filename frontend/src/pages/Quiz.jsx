import { useEffect, useState } from "react";

function Quiz() {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [checkedAnswers, setCheckedAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/quizzes`)
      .then((response) => response.json())
      .then((data) => setQuizzes(data))
      .catch((error) => console.error("Error fetching quizzes:", error));
  }, []);

  if (quizzes.length === 0) {
    return (
      <div
        style={{
          minHeight: "100vh",
          padding: "30px 20px",
          backgroundColor: "#0f172a",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "44px" }}>Quiz</h1>
        <p>Loading quiz questions...</p>
      </div>
    );
  }

  const currentQuiz = quizzes[currentQuestionIndex];
  const currentQuizId = currentQuiz.id;

  const selectedOption = selectedAnswers[currentQuizId] || "";
  const isChecked = checkedAnswers[currentQuizId] || false;

  const totalCorrectAnswers = quizzes.filter((quiz) => {
    const selected = selectedAnswers[quiz.id];
    return selected && selected === quiz.correct_answer;
  }).length;

  const answeredCount = Object.keys(checkedAnswers).length;

  const handleOptionClick = (option) => {
    if (isChecked) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuizId]: option,
    }));
  };

  const checkAnswer = () => {
    if (!selectedOption) {
      return;
    }

    setCheckedAnswers((prev) => ({
      ...prev,
      [currentQuizId]: true,
    }));
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < quizzes.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleJumpToQuestion = (event) => {
    const newIndex = Number(event.target.value);
    setCurrentQuestionIndex(newIndex);
  };

  const finishQuiz = () => {
    setQuizFinished(true);
  };

  const saveScore = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/progress`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: "Shubhangi",
          lesson_id: 1,
          score: totalCorrectAnswers,
        }),
      });

      const data = await response.json();
      setSaveMessage(data.message);
    } catch (error) {
      console.error("Error saving progress:", error);
      setSaveMessage("Failed to save progress.");
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setCheckedAnswers({});
    setQuizFinished(false);
    setSaveMessage("");
  };

  const getAnswerMessage = () => {
    if (!isChecked) return "";

    if (selectedOption === currentQuiz.correct_answer) {
      return "Correct answer!";
    }

    return `Wrong answer. Correct answer is: ${currentQuiz.correct_answer}`;
  };

  const answerMessage = getAnswerMessage();

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px 20px",
        backgroundColor: "#0f172a",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "white",
          marginBottom: "30px",
          fontSize: "44px",
        }}
      >
        Quiz
      </h1>

      {quizFinished ? (
        <div
          style={{
            maxWidth: "750px",
            margin: "0 auto",
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "16px",
            textAlign: "center",
            boxShadow: "0 6px 14px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={{ color: "#1f2fa5", marginBottom: "20px" }}>
            Quiz Finished!
          </h2>

          <p style={{ fontSize: "22px", fontWeight: "bold", color: "#111827" }}>
            Your Score: {totalCorrectAnswers} / {quizzes.length}
          </p>

          <p style={{ color: "#555", marginTop: "10px" }}>
            Answered Questions: {answeredCount} / {quizzes.length}
          </p>

          <button
            onClick={saveScore}
            style={{
              marginTop: "20px",
              marginRight: "10px",
              padding: "10px 18px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#1f2fa5",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Save Score
          </button>

          <button
            onClick={restartQuiz}
            style={{
              marginTop: "20px",
              padding: "10px 18px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#166534",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Restart Quiz
          </button>

          {saveMessage && (
            <p style={{ marginTop: "15px", fontWeight: "bold", color: "#333" }}>
              {saveMessage}
            </p>
          )}
        </div>
      ) : (
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "16px",
            boxShadow: "0 6px 14px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                color: "#555",
                margin: 0,
              }}
            >
              Question {currentQuestionIndex + 1} of {quizzes.length}
            </p>

            <div>
              <label
                htmlFor="jumpQuestion"
                style={{
                  marginRight: "8px",
                  fontWeight: "bold",
                  color: "#374151",
                }}
              >
                Jump to:
              </label>

              <select
                id="jumpQuestion"
                value={currentQuestionIndex}
                onChange={handleJumpToQuestion}
                style={{
                  padding: "8px 10px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  cursor: "pointer",
                }}
              >
                {quizzes.map((_, index) => (
                  <option key={index} value={index}>
                    Question {index + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <h2
            style={{
              color: "#1f2fa5",
              marginBottom: "25px",
              textAlign: "center",
            }}
          >
            {currentQuiz.question}
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[currentQuiz.option_a, currentQuiz.option_b, currentQuiz.option_c].map(
              (option, index) => {
                const isSelected = selectedOption === option;

                return (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    style={{
                      padding: "14px",
                      borderRadius: "10px",
                      border: isSelected ? "2px solid #1f2fa5" : "1px solid #ccc",
                      backgroundColor: isSelected ? "#e0e7ff" : "#f9fafb",
                      cursor: isChecked ? "default" : "pointer",
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#111827",
                    }}
                  >
                    {option}
                  </button>
                );
              }
            )}
          </div>

          {answerMessage && (
            <p
              style={{
                marginTop: "20px",
                fontWeight: "bold",
                color: answerMessage.startsWith("Correct") ? "green" : "#b91c1c",
              }}
            >
              {answerMessage}
            </p>
          )}

          <div
            style={{
              marginTop: "25px",
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={goToPreviousQuestion}
              disabled={currentQuestionIndex === 0}
              style={{
                padding: "12px 20px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: currentQuestionIndex === 0 ? "#9ca3af" : "#475569",
                color: "white",
                fontWeight: "bold",
                cursor: currentQuestionIndex === 0 ? "not-allowed" : "pointer",
              }}
            >
              Previous Question
            </button>

            {!isChecked ? (
              <button
                onClick={checkAnswer}
                style={{
                  padding: "12px 20px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#1f2fa5",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Check Answer
              </button>
            ) : (
              <button
                onClick={goToNextQuestion}
                disabled={currentQuestionIndex === quizzes.length - 1}
                style={{
                  padding: "12px 20px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor:
                    currentQuestionIndex === quizzes.length - 1 ? "#9ca3af" : "#166534",
                  color: "white",
                  fontWeight: "bold",
                  cursor:
                    currentQuestionIndex === quizzes.length - 1
                      ? "not-allowed"
                      : "pointer",
                }}
              >
                Next Question
              </button>
            )}

            <button
              onClick={finishQuiz}
              style={{
                padding: "12px 20px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#7c3aed",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Finish Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;