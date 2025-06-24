import { Operator } from "@/types/operator";

export function cpfRules(cpf: string): boolean {
  return /^\d*$/.test(cpf);
}

export function matriculaExists(
  matricula: string,
  operators: Operator[],
  currentMatricula?: string
): boolean {
  return operators.some(
    (operator) =>
      operator.matricula.trim() === matricula.trim() &&
      operator.matricula.trim() !== currentMatricula?.trim()
  );
}

export function isOperatorFormValid(operator: Operator): boolean {
  return (
    (operator.nome?.trim() || "") !== "" &&
    (operator.matricula?.trim() || "") !== "" &&
    (operator.cpf?.trim() || "").length === 11
  );
}
