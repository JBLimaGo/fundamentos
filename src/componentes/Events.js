const Events = () => {
  const handleMyEvent = (e) => {
    console.log(e);
    console.log("Ativou o evento!");
  };

  // Criação de uma função que não esta dentro do JSX
  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Também posso renderizar isso!</h1>;
    }
  };

  return (
    // Tudo aqui dentro do return e JSX
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou!")}>
          Cliquei aqui também!
        </button>

        {/* Isso funcio dessa forma mais não e interessante fazer isso pois esta sendo colocado condições logica no HTML com isso não se aplica esse tipo de exemplo
            O Correto seria criar uma função como foi feito com o handleMyEvent no exemplo acima. */}
        <button
          onClick={() => {
            if (true) {
              console.log("Isso não deveria estar aqui =)");
            }
          }}
        >
          Clica aqui, por favor.
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
