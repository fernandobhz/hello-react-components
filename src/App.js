import { useState } from "react";
import "./App.css";

function ListaInscritos({ alunos, children }) {
  return (
    <ul>
      {alunos && alunos.map((aluno) => <li key={aluno}>{aluno}</li>)}
      {(!alunos || alunos.length === 0) && (
        <div>{children}</div>
      )}
    </ul>
  );
}

function App() {
  const [alunos, setAlunos] = useState([]);
  const [novo, setNovo] = useState("");

  const processarOnClick = () => {
    setAlunos([...alunos, novo]);
    setNovo('');
  }

  return (
    <div className="App">
      <ListaInscritos alunos={alunos}>
        Aguardando o primeiro aluno a ser cadastrado
      </ListaInscritos>
      Novo aluno:{" "}
      <input
        type="text"
        value={novo}
        onChange={(event) => setNovo(event.target.value)}
      />
      <button onClick={processarOnClick}>Adicionar Aluno</button>
    </div>
  );
}

export default App;
