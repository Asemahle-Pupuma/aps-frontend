import React, { useEffect, useState } from "react";

function Institutions() {
  const [institutions, setInstitutions] = useState([]);

  useEffect(() => {
    fetch("https://your-backend.repl.co/api/institutions")
      .then(res => res.json())
      .then(data => {
        console.log(data); // ✅ This shows in browser dev tools
        setInstitutions(data);
      })
      .catch(err => console.error("Error fetching institutions:", err));
  }, []);

  return (
    <div>
      <h2>Institutions</h2>
      <ul>
        {institutions.map((inst, index) => (
          <li key={index}>{inst.name} ({inst.code})</li>
        ))}
      </ul>
    </div>
  );
}

export default Institutions;
