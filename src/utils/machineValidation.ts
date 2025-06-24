export function isMachineFormValid(machine: {
  codIdentificador: string;
  nome: string;
}): boolean {
  return (
    (machine.codIdentificador?.trim() || "") !== "" &&
    (machine.nome?.trim() || "") !== ""
  );
}

export function codIdentificadorExists(
  codIdentificador: string,
  machines: { codIdentificador: string }[],
  currentCodIdentificador?: string
): boolean {
  return machines.some(
    (machine) =>
      machine.codIdentificador.trim() === codIdentificador.trim() &&
      machine.codIdentificador.trim() !== currentCodIdentificador?.trim()
  );
}
