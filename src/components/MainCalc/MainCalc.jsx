import React, { useState } from "react";
import "./MainCalc.css";

import AccountAmount from "../AccountAmount/AccountAmount";
import AccountResults from "../AccountResults/AccountResults";
import PeopleNumber from "../PeopleNumber/PeopleNumber";
import TipPercentage from "../TipPercentage/TipPercentage";

const MainCalc = () => {
  const [valores, setValores] = useState({
    valorConsumo: 0,
    porcentagem: 0,
    pessoas: 1,
    valorGorjeta: 0,
    valorTotal: 0,
    custom: 0,
  });

  const calcularPorcento = (porcentagem) => {
    const valoresNovo = { ...valores };
    valoresNovo.porcentagem = porcentagem;

    valoresNovo.valorGorjeta =
      (valoresNovo.valorConsumo * valoresNovo.porcentagem) / 100;
    valoresNovo.valorTotal =
      (parseInt(valoresNovo.valorConsumo) +
        parseInt(valoresNovo.valorGorjeta)) /
      valoresNovo.pessoas;

    setValores(valoresNovo);
  };

  const handleReset = () => {
    setValores({
      valorConsumo: 0,
      porcentagem: 0,
      pessoas: 1,
      valorGorjeta: 0,
      valorTotal: 0,
      custom: 0,
    });
  };

  return (
    <main className="container_main">
      <div className="datas">
        <AccountAmount
          number={valores.valorConsumo}
          setNumber={(e) =>
            setValores({ ...valores, valorConsumo: e.target.value })
          }
        />
        <PeopleNumber
          pessoas={valores.pessoas}
          setPessoas={(e) =>
            setValores({ ...valores, pessoas: e.target.value })
          }
        />
        <TipPercentage
          calcularPorcento={(porcentagem) => calcularPorcento(porcentagem)}
        />
      </div>

      <div className="results">
        <AccountResults valores={valores} reset={handleReset} />
      </div>
    </main>
  );
};

export default MainCalc;
