'use client'

import { Box } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import { useRouter } from "next/navigation";

interface CancelButtonProps extends ButtonProps {
    onClick?: () => void;
}

export default function CancelButton( { onClick, ...props }: CancelButtonProps) {
    const router = useRouter();

    function handleClick() {
        if (onClick) {
            onClick();
        } else {
            router.push('/Operadores');
        }
    }

    return (
        <Box>
            <Button
                sx={{ 
                    backgroundColor: '#e03f17', 
                    color: '#fff', 
                    padding: '10px 20px',
                }}
                variant="contained"
                onClick={handleClick}
                {...props}
            >
                Cancelar
            </Button>
        </Box>
    )        
}