import { Box, Modal, Typography } from "@mui/material";
import CancelButton from "../buttons/CancelButton";
import DeleteButton from "../buttons/DeleteButton";
import { Operator } from "@/types/operator";
import { useOperatorStore } from "@/stores/operatorStore";
import { UrlWithStringQuery } from "url";

interface ConfirmDeleteModalProps<ItemType> {
  openDeleteModal: boolean;
  onClose: () => void;
  onDelete: (item: ItemType) => void;
  itemToDelete: ItemType;
  title?: string;
  message?: string;
}

export default function ConfirmDeleteModal<ItemType>({
  openDeleteModal,
  onClose,
  onDelete,
  itemToDelete,
  title = "Excluir Item",
  message = "Tem certeza de que deseja excluir este item?",
}: ConfirmDeleteModalProps<ItemType>) {
  const handleExclude = () => {
    onDelete(itemToDelete);
    onClose();
  };

  return (
    <Modal
      open={openDeleteModal}
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
          minWidth: 400,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography variant="h6" fontSize={20}>
          {title}
        </Typography>
        <Typography fontSize={16}>{message}</Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 2,
            gap: 4,
          }}
        >
          <CancelButton variant="outlined" onClick={onClose} />
          <DeleteButton onClick={handleExclude} />
        </Box>
      </Box>
    </Modal>
  );
}
