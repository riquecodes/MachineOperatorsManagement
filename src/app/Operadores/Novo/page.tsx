import FormOperator from "@/components/forms/FormOperator";
import { Box, Typography } from "@mui/material";

export default function NewOperatorPage() {
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
        <strong>Adicionar Operador</strong>
      </Typography>
      <FormOperator />
    </Box>
  );
}
