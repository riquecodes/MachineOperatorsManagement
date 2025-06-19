'use client'

import Button from '@mui/material/Button';

export function addNewOperator() {
    
    console.log("New operator added");
}

export default function ButtonNewOperator() {
    return (
        <div className="flex justify-end mt-5">
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
        </div>
    );
}