'use client';

import { Box, TextField } from "@mui/material";
import { useMemo, useState } from "react";
import SaveButton from "../buttons/SaveButton";
import CancelButton from "../buttons/CancelButton";
import { useRouter } from "next/navigation";
import { useOperatorStore } from "@/stores/operatorStore";

export default function FormOperator() {

    const addOperator = useOperatorStore((state) => state.addOperator);
    const operators = useOperatorStore((state) => state.operators);
    const [operator, setOperator] = useState({ matricula: '', nome: '', cpf: '' });
    const router = useRouter();
    const [error, setError] = useState(false);

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const cpf = e.target.value;
        if (/^\d*$/.test(cpf)) {
            setOperator({ ...operator, cpf });
        }
    };

    const handleSalvar = () => {

        function matriculaExists() {
            return operators.some(op => op.matricula.trim() === operator.matricula.trim());
        }

        if (matriculaExists()) {
            setError(true);
            return;
        }

        addOperator(operator);
        router.push('/Operadores')
    }

    const isFormValid = useMemo(() => {
        return !operator.nome || operator.nome.trim() === '' ||
               !operator.matricula || operator.matricula.trim() === '' ||
               !operator.cpf || operator.cpf.trim() === '' ||
               operator.cpf.length !== 11;
    }, [operator.nome, operator.matricula, operator.cpf]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '80%', mx: 'auto' }}>
            <TextField 
                id="filled-basic" 
                label="Matrícula" 
                variant="filled" 
                required
                value={operator.matricula}
                onChange={(e) => { 
                    setOperator({...operator, matricula: e.target.value});
                    setError(false) 
                }}
                error={error || operator.matricula.length === 0}
                helperText={error ? "Matricula já cadastrada" : ''}
                sx={{
                    '& .MuiInputBase-input': { fontSize: '1.4rem' },
                    '& .MuiInputLabel-root': { fontSize: '1.3rem' },
                    '& .MuiFormHelperText-root': { fontSize: '1rem' },
                    '& .MuiFilledInput-underline:after': { borderBottomColor: '#00a63e' },
                    '& label.Mui-focused': { color: '#00a63e'},
                }}
            />

            <TextField 
                id="filled-basic" 
                label="Nome Completo" 
                variant="filled" 
                required
                value={operator.nome}
                onChange={(e) => setOperator({...operator, nome: e.target.value})}
                error={operator.nome.length === 0}
                sx={{
                    '& .MuiInputBase-input': { fontSize: '1.4rem' },
                    '& .MuiInputLabel-root': { fontSize: '1.3rem' },
                    '& .MuiFilledInput-underline:after': { borderBottomColor: '#00a63e' },
                    '& label.Mui-focused': { color: '#00a63e'},
                }}
            />

            <TextField 
                id="filled-basic" 
                label="CPF" 
                variant="filled"    
                required 
                value={operator.cpf}
                onChange={handleCpfChange}
                helperText="Apenas números"
                error={operator.cpf.length !== 11}
                inputProps={{ maxLength: 11, inputMode: 'numeric', pattern: '[0-9]*' }}
                sx={{
                    '& .MuiInputBase-input': { fontSize: '1.4rem' },
                    '& .MuiInputLabel-root': { fontSize: '1.3rem' },
                    '& .MuiFormHelperText-root': { fontSize: '1rem' },
                    '& .MuiFilledInput-underline:after': { borderBottomColor: '#00a63e' },
                    '& label.Mui-focused': { color: '#00a63e'},
                }} 
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2, gap: 4 }}>
                <SaveButton onClick={handleSalvar} disabled={isFormValid}/>
                <CancelButton/>
            </Box>
        </Box>
    )

}
