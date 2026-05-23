import { useState } from "react";
import axios from "axios";

function App() {

  const [attackHistory, setAttackHistory] = useState<any[]>([]);

  const totalAttacks = attackHistory.length;

  const successfulBreaches =
    attackHistory.filter(
      (attack) => attack.success
    ).length;

  const blockedAttacks =
    totalAttacks - successfulBreaches;

  const totalFinancialDamage =
    attackHistory.reduce(
      (total, attack) => total + attack.damage,
      0
    );

  const threatLevel =
    successfulBreaches > 5
      ? "CRITICAL"
      : successfulBreaches > 2
      ? "HIGH"
      : "MODERATE";

  const simulateAttack = async () => {

    const response = await axios.get(
      "http://localhost:5000/simulate-attack"
    );

    setAttackHistory((prev) => [
      response.data,
      ...prev
    ]);
  };

  return (

    <div
      style={{
        padding: "40px",
        fontFamily: "Arial",
        backgroundColor: "#020617",
        minHeight: "100vh",
        color: "white"
      }}
    >

      <h1
        style={{
          fontSize: "42px",
          marginBottom: "10px",
          color: "#38bdf8"
        }}
      >
        Cyberwar Banking Defense
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "30px"
        }}
      >
        Real-Time Banking Cyber Defense Simulator
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
          flexWrap: "wrap"
        }}
      >

        <div
          style={{
            backgroundColor: "#111827",
            padding: "20px",
            borderRadius: "12px",
            width: "220px"
          }}
        >
          <h3>Total Attacks</h3>

          <p
            style={{
              fontSize: "28px",
              color: "#38bdf8"
            }}
          >
            {totalAttacks}
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#111827",
            padding: "20px",
            borderRadius: "12px",
            width: "220px"
          }}
        >
          <h3>Successful Breaches</h3>

          <p
            style={{
              fontSize: "28px",
              color: "#ef4444"
            }}
          >
            {successfulBreaches}
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#111827",
            padding: "20px",
            borderRadius: "12px",
            width: "220px"
          }}
        >
          <h3>Blocked Attacks</h3>

          <p
            style={{
              fontSize: "28px",
              color: "#22c55e"
            }}
          >
            {blockedAttacks}
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#111827",
            padding: "20px",
            borderRadius: "12px",
            width: "260px"
          }}
        >
          <h3>Total Financial Loss</h3>

          <p
            style={{
              fontSize: "22px",
              color: "#facc15"
            }}
          >
            $
            {totalFinancialDamage.toLocaleString()}
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#111827",
            padding: "20px",
            borderRadius: "12px",
            width: "220px"
          }}
        >
          <h3>Threat Level</h3>

          <p
            style={{
              fontSize: "24px",
              color:
                threatLevel === "CRITICAL"
                  ? "red"
                  : threatLevel === "HIGH"
                  ? "orange"
                  : "lightgreen"
            }}
          >
            {threatLevel}
          </p>
        </div>

      </div>

      <button
        onClick={simulateAttack}
        style={{
          padding: "14px 20px",
          backgroundColor: "#dc2626",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px",
          marginBottom: "30px"
        }}
      >
        Launch Cyber Attack Simulation
      </button>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}
      >

        {

          attackHistory.map((attack, index) => (

            <div
              key={index}
              style={{
                backgroundColor: "#111827",
                padding: "25px",
                borderRadius: "14px",
                border: attack.success
                  ? "2px solid red"
                  : "2px solid green",
                width: "650px"
              }}
            >

              <h2
                style={{
                  marginBottom: "15px",
                  color: "#facc15"
                }}
              >
                Incident #{attackHistory.length - index}
              </h2>

              <p>
                <strong>Target System:</strong>
                {" "}
                {attack.target}
              </p>

              <p>
                <strong>Attack Type:</strong>
                {" "}
                {attack.attackType}
              </p>

              <p>
                <strong>Attack Strength:</strong>
                {" "}
                {attack.attackStrength}
              </p>

              <p>
                <strong>Defense Strength:</strong>
                {" "}
                {attack.defenseStrength}
              </p>

              <p>
                <strong>Status:</strong>
                {" "}
                {
                  attack.success
                    ? "SYSTEM BREACHED"
                    : "ATTACK BLOCKED"
                }
              </p>

              <p>
                <strong>Financial Damage:</strong>
                {" "}
                $
                {attack.damage.toLocaleString()}
              </p>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default App;