const FirstComponent = () => {
  // Todo Componente tem que ter o return
  return (
    // Dentro do return e tudo tags de HTML que serão exibidas no navegador - se da o nome de JSX
    // Não declarar como class e sim como className pois da erro de performance e erro no navegador no console declarando só class
    <div>
      <h1> Meu Primeiro Componente</h1>

      <p className="teste"> Meu Texto de teste</p>
    </div>
  );
};

export default FirstComponent;
