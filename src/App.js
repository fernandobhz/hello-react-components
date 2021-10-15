import { ListaInscritos } from './Components/ListaInscritos';
import "./App.css";

function App() {

  const enviarListaParaXyz = alunos => {
    // fetch ou axios ou alert
    alert(JSON.stringify(alunos))
  }

  return (
    <div className="App">
      <div>Titulo</div>
      <ListaInscritos onSubmit={enviarListaParaXyz}>
        Aguardando o primeiro aluno a ser cadastrado
      </ListaInscritos>
      
    </div>
  );
}

export default App;
