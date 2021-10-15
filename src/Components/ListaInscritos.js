import './ListaInscritos.css'

export function ListaInscritos({ alunos, children }) {
  return (
    <ul>
      {alunos && alunos.map((aluno) => <li key={aluno}>{aluno}</li>)}
      {(!alunos || alunos.length === 0) && (
        <div>{children}</div>
      )}
    </ul>
  );
}
