import { useState } from "react";
import { Heart, SendHorizonal, Gift, Smile } from "lucide-react";

export default function GrievancePortal() {
  const [grievance, setGrievance] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [history, setHistory] = useState([]);
  const [emojiResponse, setEmojiResponse] = useState("❤️");

  const handleSubmit = () => {
    if (grievance.trim()) {
      setHistory([...history, grievance]);
      setGrievance("");
      setSubmitted(true);
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffe4e6", display: "flex", justifyContent: "center", alignItems: "center", padding: "2rem" }}>
      <div style={{ backgroundColor: "#fff", borderRadius: "1rem", padding: "2rem", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", width: "100%", maxWidth: "400px" }}>
        <h2 style={{ textAlign: "center", color: "#ec4899", fontSize: "1.5rem" }}>💌 Sweetheart's Grievance Corner</h2>
        {!submitted ? (
          <>
            <p style={{ textAlign: "center", fontSize: "0.875rem", color: "#6b7280" }}>
              Write down anything that's bothering you, I'm all ears. 💖
            </p>
            <textarea
              rows={6}
              placeholder="Hmmph! You didn’t call me back 😤"
              value={grievance}
              onChange={(e) => setGrievance(e.target.value)}
              style={{ width: "100%", padding: "0.75rem", borderRadius: "0.75rem", border: "1px solid #f9a8d4", marginTop: "1rem" }}
            />
            <button
              onClick={handleSubmit}
              style={{ marginTop: "1rem", width: "100%", backgroundColor: "#ec4899", color: "#fff", padding: "0.75rem", borderRadius: "0.75rem", border: "none" }}
            >
              <SendHorizonal style={{ marginRight: "0.5rem", verticalAlign: "middle" }} /> Submit
            </button>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <Heart style={{ color: "#ec4899", width: "2rem", height: "2rem", margin: "0 auto", marginBottom: "1rem", animation: "bounce 1s infinite" }} />
            <p style={{ color: "#ec4899", fontWeight: "500" }}>Got it, love. I'll make it up to you! 💕</p>
            <div style={{ marginTop: "1rem" }}>
              <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>Here's a little emoji for you:</p>
              <div style={{ fontSize: "2rem" }}>{emojiResponse}</div>
            </div>
            <div style={{ backgroundColor: "#fce7f3", padding: "1rem", borderRadius: "0.75rem", marginTop: "1rem" }}>
              <h3 style={{ color: "#ec4899", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Gift style={{ marginRight: "0.5rem" }} /> Make It Up To You
              </h3>
              <ul style={{ textAlign: "left", fontSize: "0.875rem", color: "#374151", paddingLeft: "1.25rem" }}>
                <li>Coffee date on me ☕</li>
                <li>A long back massage 👐</li>
                <li>Netflix + your favorite snacks 🍿</li>
                <li>Random forehead kisses 💋</li>
              </ul>
            </div>
            {history.length > 0 && (
              <div style={{ backgroundColor: "#fce7f3", padding: "1rem", borderRadius: "0.75rem", marginTop: "1rem" }}>
                <h3 style={{ color: "#ec4899", fontWeight: "600", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Smile style={{ marginRight: "0.5rem" }} /> Past Grievances
                </h3>
                <ul style={{ fontSize: "0.75rem", color: "#6b7280", paddingLeft: "1.25rem" }}>
                  {history.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            <button
              onClick={() => setSubmitted(false)}
              style={{ marginTop: "1rem", width: "100%", backgroundColor: "#f9a8d4", color: "#fff", padding: "0.75rem", borderRadius: "0.75rem", border: "none" }}
            >
              Write Another
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
