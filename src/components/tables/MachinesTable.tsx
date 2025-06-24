import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useMachineStore } from "@/stores/machineStore";
import * as React from "react";
import EditIconButton from "../actions/EditIconButton";
import { useState } from "react";
import { Machine } from "@/types/machine";
import EditMachineModal from "../modals/EditMachineModal";
import DeleteIconButton from "../actions/DeleteIconButton";
import ConfirmDeleteModal from "../modals/ConfirmDeleteModal";

export default function MachinesTable() {
  const machines = useMachineStore((state) => state.machines);
  const [editingMachine, setEditingMachine] = useState<Machine>({
    id: "",
    codIdentificador: "",
    nome: "",
  });
  const [deletingMachine, setDeletingMachine] = useState<Machine>({
    id: "",
    codIdentificador: "",
    nome: "",
  });
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleEdit = (codIdentificador: string) => {
    const machine = machines.find(
      (machine) => machine.codIdentificador.trim() === codIdentificador.trim()
    );
    if (machine) {
      setEditingMachine({ ...machine });
      setOpenEditModal(true);
    }
  };

  const handleDelete = (codIdentificador: string) => {
    const machine = machines.find(
      (machine) => machine.codIdentificador.trim() === codIdentificador.trim()
    );
    if (machine) {
      setDeletingMachine({ ...machine });
      setOpenDeleteModal(true);
    }
  };

  const deleteMachine = useMachineStore((state) => state.deleteMachine);

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 2,
        boxShadow: 2,
        marginTop: 4,
        maxWidth: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        bgcolor: "#ecf7ed",
        maxHeight: 700,
        overflowY: 'auto',
        marginBottom: 2
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontSize: "16px", backgroundColor: "#96da9d" }}>
              <strong>Cód. Identificador</strong>
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "16px", backgroundColor: "#96da9d" }}>
              <strong>Nome da Máquina</strong>
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "16px", backgroundColor: "#96da9d" }}>
              <strong>Ações</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {machines.map((machine, index) => (
            <TableRow key={index}>
              <TableCell align="center" sx={{ fontSize: "16px" }}>
                {machine.codIdentificador}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "16px" }}>
                {machine.nome}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "16px" }}>
                <EditIconButton
                  onClick={() => handleEdit(machine.codIdentificador)}
                />
                <DeleteIconButton
                  onClick={() => handleDelete(machine.codIdentificador)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {editingMachine && (
          <EditMachineModal
            openEditModal={openEditModal}
            onClose={() => setOpenEditModal(false)}
            machineToEdit={editingMachine}
          />
        )}

        {deletingMachine && (
          <ConfirmDeleteModal<Machine>
            openDeleteModal={openDeleteModal}
            onClose={() => setOpenDeleteModal(false)}
            onDelete={deleteMachine}
            itemToDelete={deletingMachine}
            title="Excluir Máquina"
            message="Tem certeza de que deseja excluir esta máquina?"
          />
        )}
      </Table>
    </TableContainer>
  );
}
