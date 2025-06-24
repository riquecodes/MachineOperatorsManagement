"use client";

import ButtonNewMachine from "@/components/buttons/NewMachineButton";
import MachinesTable from "@/components/tables/MachinesTable";
import { Box, Typography } from "@mui/material";

export default function MachinesPage() {
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
          <strong>Registros de Máquinas</strong>
        </Typography>
        <ButtonNewMachine />
      </Box>
      <Box>
        <MachinesTable />
      </Box>
    </>
  );
}
