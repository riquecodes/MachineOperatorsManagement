'use client'

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';


export default function ButtonNewOperator() {
    
    const router = useRouter();

    function addNewOperator() {
        router.push('/Operadores/Novo');
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: 2}}>
            <Button 
                sx={{ 
                    backgroundColor: '#00a63e', 
                    color: '#fff', 
                    padding: '10px 20px',
                    '&:hover': { 
                        backgroundColor: '#45a049' 
                    } 
                }} 
            variant="contained"

            onClick={addNewOperator}
            >
                Novo Operador

            </Button>
        </Box>
    );
}

export function ButtonNewMachine() {
    const router = useRouter();

    function addNewMachine() {
        router.push('/Maquinas/Novo');
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'end', marginTop: 2}}>
            <Button 
                sx={{ 
                    backgroundColor: '#00a63e', 
                    color: '#fff', 
                    padding: '10px 20px',
                    '&:hover': { 
                        backgroundColor: '#45a049' 
                    } 
                }} 
                variant="contained"
                onClick={addNewMachine}
            >
                Nova Máquina
            </Button>
        </Box>
    );
}