import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useOperatorStore } from "@/stores/operatorStore";
import * as React from "react";
import EditIconButton from "../actions/EditIconButton";
import { useState } from "react";
import { Operator } from "@/types/operator";
import EditOperatorModal from "../modals/EditOperatorModal";
import DeleteIconButton from "../actions/DeleteIconButton";
import ConfirmDeleteModal from "../modals/ConfirmDeleteModal";

export default function OperatorsTable() {
  const operators = useOperatorStore((state) => state.operators);
  const [editingOperator, setEditingOperator] = useState<Operator>({
    id: "",
    matricula: "",
    nome: "",
    cpf: "",
  });
  const [deletingOperator, setDeletingOperator] = useState<Operator>({
    id: "",
    matricula: "",
    nome: "",
    cpf: "",
  });
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleEdit = (matricula: string) => {
    const operator = operators.find(
      (operator) => operator.matricula.trim() === matricula.trim()
    );
    if (operator) {
      setEditingOperator({ ...operator });
      setOpenEditModal(true);
    }
  };

  const handleDelete = (matricula: string) => {
    const operator = operators.find(
      (operator) => operator.matricula.trim() === matricula.trim()
    );
    if (operator) {
      setDeletingOperator({ ...operator });
      setOpenDeleteModal(true);
    }
  };

  const deleteOperator = useOperatorStore((state) => state.deleteOperator);

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
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontSize: "16px", backgroundColor: "#96da9d" }}>
              <strong>Matricula</strong>
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "16px", backgroundColor: "#96da9d" }}>
              <strong>Nome Completo</strong>
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "16px", backgroundColor: "#96da9d" }}>
              <strong>CPF</strong>
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "16px", backgroundColor: "#96da9d" }}>
              <strong>Ações</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {operators.map((operator, index) => (
            <TableRow key={index}>
              <TableCell align="center" sx={{ fontSize: "16px" }}>
                {operator.matricula}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "16px" }}>
                {operator.nome}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "16px" }}>
                {operator.cpf}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: "16px" }}>
                <EditIconButton
                  onClick={() => handleEdit(operator.matricula)}
                />
                <DeleteIconButton
                  onClick={() => handleDelete(operator.matricula)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {editingOperator && (
          <EditOperatorModal
            openEditModal={openEditModal}
            onClose={() => setOpenEditModal(false)}
            operatorToEdit={editingOperator}
          />
        )}

        {deletingOperator && (
          <ConfirmDeleteModal<Operator>
            openDeleteModal={openDeleteModal}
            onClose={() => setOpenDeleteModal(false)}
            onDelete={deleteOperator}
            itemToDelete={deletingOperator}
            title="Excluir Operador"
            message="Tem certeza de que deseja excluir este operador?"
          />
        )}
      </Table>
    </TableContainer>
  );
}
