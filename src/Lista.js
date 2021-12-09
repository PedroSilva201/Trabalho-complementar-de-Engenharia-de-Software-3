import React from "react";
export default function Lista(props) {
  return (
  <ul>
  {props.dados.map((item, index) => (
  <li key={index} onContextMenu={e => props.remove(e,index)}>
  {item.nome} - {item.telefone} {item.endereço} - {item.Cpf}
  </li>
  ))}
  </ul>
  );
  }