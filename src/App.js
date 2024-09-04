// Components
import FirstComponent from "./componentes/FirstComponent";
import TemplateExpressions from "./componentes/TemplateExpressions";
import MyComponent from "./componentes/MyComponent";
import Events from "./componentes/Events";
import Challenge from "./componentes/Challenge";

// styles / CSS
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      {/* Componentes criados que pode ser reutilizado */}
      <FirstComponent />
      <TemplateExpressions />

      {/* Componentes criado com podendo ser utilizado com hierarquia podendo usar em varios lugares */}
      <MyComponent />

      {/* Componentes de Evento de um click em um Botão ação de um Botão */}
      <Events />

      {/* Componente feito para tarefa do modulo 2 - seção 2 */}
      <Challenge />
    </div>
  );
}

export default App;
