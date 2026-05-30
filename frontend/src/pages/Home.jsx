import { Link } from "react-router-dom";
import homeFern from "../assets/images/home-fern.jpg";
import lessonsCard from "../assets/images/cards/lessons-card.webp";
import waiataCard from "../assets/images/cards/waiata-card.webp";
import prayersCard from "../assets/images/cards/prayers-card.jpg";
import quizCard from "../assets/images/cards/quiz-card.jpg";
import progressCard from "../assets/images/cards/progress-card.jpg";

function Home() {
  const scrollToCards = () => {
    const section = document.getElementById("learning-cards");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const topCards = [
    {
      title: "Lessons",
      description: "Learn Māori words with audio and meanings.",
      image: lessonsCard,
      link: "/lessons",
    },
    {
      title: "Waiata",
      description: "Explore Māori songs with lyrics and audio.",
      image: waiataCard,
      link: "/waiata",
    },
    {
      title: "Prayers",
      description: "Read and listen to Māori prayers with meaning.",
      image: prayersCard,
      link: "/prayers",
    },
  ];

  const bottomCards = [
    {
      title: "Quiz",
      description: "Test your learning with simple quiz activities.",
      image: quizCard,
      link: "/quiz",
    },
    {
      title: "Progress",
      description: "Check your learning progress and results.",
      image: progressCard,
      link: "/progress",
    },
  ];

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  };

  const imageBoxStyle = {
    width: "100%",
    height: "220px",
    backgroundColor: "#f3f4f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px",
    boxSizing: "border-box",
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    display: "block",
    borderRadius: "8px",
  };

  return (
    <div style={{ backgroundColor: "#f8fafc" }}>
      <section
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${homeFern})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            padding: "40px 30px",
            borderRadius: "20px",
            backdropFilter: "blur(5px)",
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              marginBottom: "12px",
              color: "#d9f99d",
              textAlign: "center",
            }}
          >
            Ako Māori
          </h1>

          <p
            style={{
              textAlign: "center",
              fontSize: "22px",
              lineHeight: "1.7",
              marginBottom: "28px",
              color: "#f8fafc",
            }}
          >
            Learn Māori words, waiata, prayers, quizzes, and progress in one
            simple place.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                padding: "20px",
                borderRadius: "14px",
              }}
            >
              <h2
                style={{
                  marginBottom: "10px",
                  color: "#ffffff",
                  textAlign: "center",
                  fontSize: "30px",
                }}
              >
                About the Website
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.8",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Ako Māori is a beginner-friendly learning website designed to
                help users learn Māori words, waiata, prayers, and simple quiz
                activities in an interactive way.
              </p>
            </div>

            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                padding: "20px",
                borderRadius: "14px",
              }}
            >
              <h2
                style={{
                  marginBottom: "10px",
                  color: "#ffffff",
                  textAlign: "center",
                  fontSize: "30px",
                }}
              >
                About Te Reo Māori
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.8",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Te reo Māori is the indigenous language of Aotearoa New
                Zealand. It is an important part of Māori culture, identity, and
                history, and learning it helps people connect with the language
                and traditions of Māori.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <button
              onClick={scrollToCards}
              style={{
                padding: "14px 28px",
                backgroundColor: "#1f2fa5",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Start Learning
            </button>
          </div>
        </div>
      </section>

      <section
        id="learning-cards"
        style={{
          padding: "70px 20px",
          backgroundColor: "#f8fafc",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "42px",
              color: "#1f2fa5",
              marginBottom: "15px",
            }}
          >
            Explore Learning Sections
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#555",
              fontSize: "18px",
              marginBottom: "40px",
            }}
          >
            Choose any section below to continue your learning journey.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(220px, 1fr))",
              gap: "28px",
              marginBottom: "28px",
            }}
          >
            {topCards.map((card, index) => (
              <Link
                key={index}
                to={card.link}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div style={cardStyle}>
                  <div style={imageBoxStyle}>
                    <img src={card.image} alt={card.title} style={imageStyle} />
                  </div>

                  <div style={{ padding: "20px", flexGrow: 1 }}>
                    <h3
                      style={{
                        marginTop: 0,
                        marginBottom: "10px",
                        color: "#1f2fa5",
                        fontSize: "28px",
                        textAlign: "center",
                      }}
                    >
                      {card.title}
                    </h3>

                    <p
                      style={{
                        margin: 0,
                        color: "#555",
                        lineHeight: "1.7",
                        fontSize: "16px",
                        textAlign: "center",
                      }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(220px, 280px))",
              justifyContent: "center",
              gap: "28px",
            }}
          >
            {bottomCards.map((card, index) => (
              <Link
                key={index}
                to={card.link}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div style={cardStyle}>
                  <div style={imageBoxStyle}>
                    <img src={card.image} alt={card.title} style={imageStyle} />
                  </div>

                  <div style={{ padding: "20px", flexGrow: 1 }}>
                    <h3
                      style={{
                        marginTop: 0,
                        marginBottom: "10px",
                        color: "#1f2fa5",
                        fontSize: "28px",
                        textAlign: "center",
                      }}
                    >
                      {card.title}
                    </h3>

                    <p
                      style={{
                        margin: 0,
                        color: "#555",
                        lineHeight: "1.7",
                        fontSize: "16px",
                        textAlign: "center",
                      }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;