import { useState } from "react";
import axios from "axios";

function App() {

  const [attackData, setAttackData] = useState<any>(null);

  const simulateAttack = async () => {

    const response = await axios.get(
      "http://localhost:5000/simulate-attack"
    );

    setAttackData(response.data);
  };

  return (

    <div
      style={{
        padding: "40px",
        fontFamily: "Arial"
      }}
    >

      <h1>Cyberwar Banking Defense</h1>

      <button
        onClick={simulateAttack}
        style={{
          padding: "12px",
          marginTop: "20px",
          cursor: "pointer"
        }}
      >
        Simulate Cyber Attack
      </button>

      {

        attackData && (

          <div
            style={{
              marginTop: "30px",
              border: "1px solid gray",
              padding: "20px",
              borderRadius: "10px"
            }}
          >

            <h2>Attack Report</h2>

            <p>
              <strong>Target:</strong>
              {" "}
              {attackData.target}
            </p>

            <p>
              <strong>Attack Type:</strong>
              {" "}
              {attackData.attackType}
            </p>

            <p>
              <strong>Attack Strength:</strong>
              {" "}
              {attackData.attackStrength}
            </p>

            <p>
              <strong>Defense Strength:</strong>
              {" "}
              {attackData.defenseStrength}
            </p>

            <p>
              <strong>Success:</strong>
              {" "}
              {
                attackData.success
                  ? "YES"
                  : "NO"
              }
            </p>

            <p>
              <strong>Damage:</strong>
              {" "}
              $
              {attackData.damage}
            </p>

          </div>

        )

      }

    </div>

  );

}

export default App;
