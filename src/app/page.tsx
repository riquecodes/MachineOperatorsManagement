"use client";

import { Box, Typography, Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <Box
      sx={{
        mx: "20%",
        my: "15%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          p: 4,
          bgcolor: "white",
          borderRadius: 4,
          boxShadow: 3,
        }}
      >
        <Typography variant="h3" fontWeight="bold" color="#00a63e" gutterBottom>
          Sistema de Gerenciamento
        </Typography>

        <Typography variant="h6" color="text.secondary" mb={4}>
          Gerencie Operadores e Máquinas de forma simples e eficiente.
        </Typography>

        <Stack direction="row" spacing={3} justifyContent="center">
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={() => router.push("/Operadores")}
          >
            Ir para Operadores
          </Button>

          <Button
            variant="outlined"
            color="success"
            size="large"
            onClick={() => router.push("/Maquinas")}
          >
            Ir para Máquinas
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
