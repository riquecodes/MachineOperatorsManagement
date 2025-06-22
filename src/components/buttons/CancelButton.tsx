'use client'

import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function CancelButton() {
    const router = useRouter();
    return (
        <Box>
            <Button
                sx={{ 
                    backgroundColor: '#e03f17', 
                    color: '#fff', 
                    padding: '10px 20px',
                }} 
            variant="contained"
            onClick={() => router.push('/Operadores')}
            >
                Cancelar
            </Button>
        </Box>
    )        
}