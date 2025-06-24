"use client";

import { Box, TextField } from "@mui/material";
import { useState } from "react";
import SaveButton from "../buttons/SaveButton";
import CancelButton from "../buttons/CancelButton";
import { useRouter } from "next/navigation";
import { useOperatorStore } from "@/stores/operatorStore";
import { Operator } from "@/types/operator";
import {
  isOperatorFormValid,
  cpfRules,
  matriculaExists,
} from "@/utils/operatorValidation";
import { v4 as uuidv4 } from "uuid";

export default function FormOperator() {
  const addOperator = useOperatorStore((state) => state.addOperator);
  const operators = useOperatorStore((state) => state.operators);
  const [operator, setOperator] = useState<Operator>({
    id: "",
    matricula: "",
    nome: "",
    cpf: "",
  });
  const router = useRouter();
  const [error, setError] = useState(false);

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cpf = e.target.value;
    if (cpfRules(cpf)) {
      setOperator({ ...operator, cpf });
    }
  };

  const handleSalvar = () => {
    if (matriculaExists(operator.matricula, operators)) {
      setError(true);
      return;
    }

    const newOperator = {
      ...operator,
      id: uuidv4(),
    };

    addOperator(newOperator);
    router.push("/Operadores");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        width: "80%",
        mx: "auto",
      }}
    >
      <TextField
        label="Matrícula"
        variant="filled"
        required
        value={operator.matricula}
        onChange={(e) => {
          setOperator({ ...operator, matricula: e.target.value });
          setError(false);
        }}
        error={error}
        helperText={error ? "Matricula já cadastrada" : ""}
        sx={{
          "& .MuiInputBase-input": { fontSize: "1.4rem" },
          "& .MuiInputLabel-root": { fontSize: "1.3rem" },
          "& .MuiFormHelperText-root": { fontSize: "1rem" },
          "& .MuiFilledInput-underline:after": { borderBottomColor: "#00a63e" },
          "& label.Mui-focused": { color: "#00a63e" },
        }}
      />

      <TextField
        label="Nome Completo"
        variant="filled"
        required
        value={operator.nome}
        onChange={(e) => setOperator({ ...operator, nome: e.target.value })}
        sx={{
          "& .MuiInputBase-input": { fontSize: "1.4rem" },
          "& .MuiInputLabel-root": { fontSize: "1.3rem" },
          "& .MuiFilledInput-underline:after": { borderBottomColor: "#00a63e" },
          "& label.Mui-focused": { color: "#00a63e" },
        }}
      />

      <TextField
        label="CPF"
        variant="filled"
        required
        value={operator.cpf}
        onChange={handleCpfChange}
        helperText="Apenas números"
        inputProps={{ maxLength: 11, inputMode: "numeric", pattern: "[0-9]*" }}
        sx={{
          "& .MuiInputBase-input": { fontSize: "1.4rem" },
          "& .MuiInputLabel-root": { fontSize: "1.3rem" },
          "& .MuiFormHelperText-root": { fontSize: "1rem" },
          "& .MuiFilledInput-underline:after": { borderBottomColor: "#00a63e" },
          "& label.Mui-focused": { color: "#00a63e" },
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: 2,
          gap: 4,
        }}
      >
        <SaveButton
          onClick={handleSalvar}
          disabled={!isOperatorFormValid(operator)}
        />
        <CancelButton />
      </Box>
    </Box>
  );
}
