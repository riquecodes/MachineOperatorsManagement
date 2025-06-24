import { Box, Modal, TextField, Typography } from "@mui/material";
import CancelButton from "../buttons/CancelButton";
import SaveButton from "../buttons/SaveButton";
import { useEffect, useState } from "react";
import { Machine } from "@/types/machine";
import {
  codIdentificadorExists,
  isMachineFormValid,
} from "@/utils/machineValidation";
import { useMachineStore } from "@/stores/machineStore";

interface EditMachineModalProps {
  openEditModal: boolean;
  onClose: () => void;
  machineToEdit: Machine;
}

export default function EditMachineModal({
  openEditModal,
  onClose,
  machineToEdit,
}: EditMachineModalProps) {
  const updateMachine = useMachineStore((state) => state.updateMachine);
  const machines = useMachineStore((state) => state.machines);

  const [machine, setMachine] = useState<Machine>(machineToEdit);
  useEffect(() => {
    setMachine(machineToEdit);
  }, [machineToEdit]);

  const [error, setError] = useState(false);
  useEffect(() => {
    setMachine(machineToEdit);
    setError(false);
  }, [machineToEdit]);

  const handleSalvar = () => {
    if (
      codIdentificadorExists(
        machine.codIdentificador,
        machines,
        machineToEdit.codIdentificador
      )
    ) {
      setError(true);
      return;
    }

    updateMachine(machine);
    onClose();
  };

  return (
    <Modal
      open={openEditModal}
      onClose={onClose}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(168, 168, 168, 0)",
          backdropFilter: "blur(1px)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
          minWidth: 600,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography variant="h6">Editar Operador</Typography>
        <TextField
          label="Matrícula"
          variant="filled"
          required
          value={machine.codIdentificador}
          onChange={(e) => {
            setMachine({ ...machine!, codIdentificador: e.target.value });
            setError(false);
          }}
          error={error}
          helperText={error ? "Código Identificador já cadastrado" : ""}
          sx={{
            "& .MuiInputBase-input": { fontSize: "1.4rem" },
            "& .MuiInputLabel-root": { fontSize: "1.3rem" },
            "& .MuiFormHelperText-root": { fontSize: "1rem" },
            "& .MuiFilledInput-underline:after": {
              borderBottomColor: "#00a63e",
            },
            "& label.Mui-focused": { color: "#00a63e" },
          }}
        />

        <TextField
          label="Nome Completo"
          variant="filled"
          required
          value={machine.nome}
          onChange={(e) => setMachine({ ...machine!, nome: e.target.value })}
          sx={{
            "& .MuiInputBase-input": { fontSize: "1.4rem" },
            "& .MuiInputLabel-root": { fontSize: "1.3rem" },
            "& .MuiFilledInput-underline:after": {
              borderBottomColor: "#00a63e",
            },
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
          <CancelButton onClick={onClose} />
        </Box>
      </Box>
    </Modal>
  );
}
