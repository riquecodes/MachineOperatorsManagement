import { Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useOperatorStore } from '@/stores/operatorStore';
import * as React from 'react';

export default function OperatorsTable() {
    const operators = useOperatorStore((state) => state.operators);
    return(
        <TableContainer component={Paper} 
            sx={{ 
                borderRadius: 2,
                boxShadow: 2, 
                marginTop: 4, 
                maxWidth: '80%', 
                marginLeft: 'auto', 
                marginRight: 'auto', 
                bgcolor: '#ecf7ed' 
            }}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{ fontSize: '16px' }}><strong>Matricula</strong></TableCell>
                        <TableCell align="center" sx={{ fontSize: '16px' }}><strong>Nome Completo</strong></TableCell>
                        <TableCell align="center" sx={{ fontSize: '16px' }}><strong>CPF</strong></TableCell>
                        <TableCell align="center" sx={{ fontSize: '16px' }}><strong>Ações</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {operators.map((operator, index) => (
                        <TableRow key={index}>
                            <TableCell align="center" sx={{ fontSize: '16px' }}>{ operator.matricula }</TableCell>
                            <TableCell align="center" sx={{ fontSize: '16px' }}>{ operator.nome }</TableCell>
                            <TableCell align="center" sx={{ fontSize: '16px' }}>{ operator.cpf }</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

