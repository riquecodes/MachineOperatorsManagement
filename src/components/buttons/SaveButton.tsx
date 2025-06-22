'use client'

import { Box, Button, ButtonProps } from "@mui/material";

export default function SaveButton(props: ButtonProps) {
    return (
        <Box>
            <Button
                sx={{ 
                    backgroundColor: '#00a63e', 
                    color: '#fff', 
                    padding: '10px 20px',
                }} 
                variant="contained"
                {...props}
            >
                Salvar
            </Button>
        </Box>
    )        
}