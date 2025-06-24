"use client";

import ButtonNewOperator from "@/components/buttons/NewOperatorButton";
import OperatorsTable from "@/components/tables/OperatorsTable";
import { Box, Typography } from "@mui/material";

export default function OperatorsPage() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "10%",
          marginRight: "10%",
          my: 3,
        }}
      >
        <Typography variant="h5" sx={{ marginTop: 3 }}>
          <strong>Registros de Operadores</strong>
        </Typography>
        <ButtonNewOperator />
      </Box>
      <Box>
        <OperatorsTable />
      </Box>
    </>
  );
}
