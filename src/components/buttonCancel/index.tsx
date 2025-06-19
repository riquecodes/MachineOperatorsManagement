'use client'

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function CancelButton() {
    const router = useRouter();
    return (
        <div>
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
        </div>
    )        
}