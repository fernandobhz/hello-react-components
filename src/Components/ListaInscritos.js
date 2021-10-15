import { useState } from "react";
import "./ListaInscritos.css";

export function ListaInscritos({ children, onSubmit }) {
  const [alunos, setAlunos] = useState([]);
  const [novo, setNovo] = useState("");

  const processarOnClick = () => {
    setAlunos([...alunos, novo]);
    setNovo('');
  }
  
  return (
    <div>
      <ul>
        {alunos && alunos.map((aluno) => <li key={aluno}>{aluno}</li>)}
        {(!alunos || alunos.length === 0) && <div>{children}</div>}
      </ul>
      
      Novo aluno:{" "}
      <input
        type="text"
        value={novo}
        onChange={(event) => setNovo(event.target.value)}
      />
      <button onClick={processarOnClick}>Adicionar Aluno</button>
      <br />

      <button onClick={() => onSubmit({alunos})}>Avisar da lista atual para o componente pai ou avo ou seja la quem for que me passou a funcao</button>
    </div>
  );
}
