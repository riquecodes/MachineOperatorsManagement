'use client'

import { Box } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import { useRouter } from "next/navigation";

interface CancelButtonProps extends ButtonProps {
    onClick?: () => void;
}

export default function CancelButton( { variant = "contained", onClick, ...props }: CancelButtonProps) {
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
                    backgroundColor: variant === "contained" ? '#e03f17' : undefined,
                    color: variant === "contained" ? '#fff' : '#e03f17',
                    borderColor: variant === "contained" ? undefined : '#e03f17',
                    padding: '10px 20px',
                }}
                variant={variant}
                onClick={handleClick}
                {...props}
            >
                Cancelar
            </Button>
        </Box>
    )        
}