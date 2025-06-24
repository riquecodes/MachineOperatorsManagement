import FormMachine from "@/components/forms/FormMachine";
import { Box, Typography } from "@mui/material";

export default function NewMachinePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: 5,
        alignItems: "center",
        gap: 5,
      }}
    >
      <Typography variant="h4">
        <strong>Adicionar Máquina</strong>
      </Typography>
      <FormMachine />
    </Box>
  );
}
