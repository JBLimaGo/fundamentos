const Challenge = () => {
  const numero1 = 14;
  const numero2 = 6;

  const handleMyEvent = (e) => {
    console.log(numero1 + numero2);
  };

  return (
    <div>
      <h1>Primeiro Valor: {numero1}</h1>
      <h1>Segundo Valor: {numero2}</h1>

      <button onClick={handleMyEvent}>
        Somatoria dos dois valores no console!
      </button>
    </div>
  );
};

export default Challenge;
