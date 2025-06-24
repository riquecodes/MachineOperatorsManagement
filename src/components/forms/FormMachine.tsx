"use client";

import { Box, TextField } from "@mui/material";
import { useState } from "react";
import SaveButton from "../buttons/SaveButton";
import CancelButton from "../buttons/CancelButton";
import { useRouter } from "next/navigation";
import { useMachineStore } from "@/stores/machineStore";
import { v4 as uuidv4 } from "uuid";
import { Machine } from "@/types/machine";
import {
  isMachineFormValid,
  codIdentificadorExists,
} from "@/utils/machineValidation";

export default function FormMachine() {
  const addMachine = useMachineStore((state) => state.addMachine);
  const machines = useMachineStore((state) => state.machines);
  const [machine, setMachine] = useState<Machine>({
    id: "",
    codIdentificador: "",
    nome: "",
  });
  const router = useRouter();
  const [error, setError] = useState(false);

  const handleSalvar = () => {
    if (codIdentificadorExists(machine.codIdentificador, machines)) {
      setError(true);
      return;
    }

    const newMachine = {
      ...machine,
      id: uuidv4(),
    };

    addMachine(newMachine);
    router.push("/Maquinas");
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
        label="Cód. Identificador"
        variant="filled"
        required
        value={machine.codIdentificador}
        onChange={(e) => {
          setMachine({ ...machine, codIdentificador: e.target.value });
          setError(false);
        }}
        error={error}
        helperText={error ? "Código identificador já cadastrado" : ""}
        sx={{
          "& .MuiInputBase-input": { fontSize: "1.4rem" },
          "& .MuiInputLabel-root": { fontSize: "1.3rem" },
          "& .MuiFormHelperText-root": { fontSize: "1rem" },
          "& .MuiFilledInput-underline:after": { borderBottomColor: "#00a63e" },
          "& label.Mui-focused": { color: "#00a63e" },
        }}
      />

      <TextField
        label="Nome da Máquina"
        variant="filled"
        required
        value={machine.nome}
        onChange={(e) => setMachine({ ...machine, nome: e.target.value })}
        sx={{
          "& .MuiInputBase-input": { fontSize: "1.4rem" },
          "& .MuiInputLabel-root": { fontSize: "1.3rem" },
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
          disabled={!isMachineFormValid(machine)}
        />
        <CancelButton fallbackRoute="/Maquinas" />
      </Box>
    </Box>
  );
}
