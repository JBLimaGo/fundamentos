const TemplateExpressions = () => {
  const name = "Jefferson";
  const data = {
    age: 37,
    job: "Programador",
  };

  return (
    <div>
      <h1>Óla {name}, tudo bem ?</h1>
      <p>Você atua como: {data.job}</p>
      <p>Sua Idade: {data.age}</p>
    </div>
  );
};

export default TemplateExpressions;
