"use client";

import { Box, Button, ButtonProps } from "@mui/material";

export default function DeleteButton(props: ButtonProps) {
  return (
    <Box>
      <Button
        sx={{
          backgroundColor: "#e03f17",
          color: "#fff",
          padding: "10px 20px",
        }}
        variant="contained"
        {...props}
      >
        Excluir
      </Button>
    </Box>
  );
}
