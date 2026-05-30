import { useEffect, useState } from "react";

function Progress() {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/progress`)
      .then((response) => response.json())
      .then((data) => setProgressData(data))
      .catch((error) => console.error("Error fetching progress:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Progress Page</h1>

      {progressData.length === 0 ? (
        <p style={{ textAlign: "center" }}>No progress saved yet.</p>
      ) : (
        progressData.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "20px",
              maxWidth: "700px",
              margin: "20px auto",
            }}
          >
            <p><strong>Name:</strong> {item.user_name}</p>
            <p><strong>Lesson ID:</strong> {item.lesson_id}</p>
            <p><strong>Score:</strong> {item.score}</p>
            <p><strong>Completed At:</strong> {item.completed_at}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Progress;