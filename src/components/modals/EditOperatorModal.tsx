import { Box, Modal, TextField, Typography } from "@mui/material";
import CancelButton from "../buttons/CancelButton";
import SaveButton from "../buttons/SaveButton";
import { useEffect, useState } from "react";
import { Operator } from "@/types/operator";
import { matriculaExists, cpfRules, isOperatorFormValid } from "@/utils/operatorValidation";
import { useOperatorStore } from "@/stores/operatorStore";

interface EditOperatorModalProps {
    openEditModal: boolean;
    onClose: () => void;
    operatorToEdit: Operator;
}

export default function EditOperatorModal({ openEditModal, onClose, operatorToEdit }: EditOperatorModalProps) {
  
    const updateOperator = useOperatorStore((state) => state.updateOperator);
    const operators = useOperatorStore((state) => state.operators);

    const [operator, setOperator] = useState<Operator>(operatorToEdit);
    useEffect(() => {setOperator(operatorToEdit);}, [operatorToEdit]);
  
    const [error, setError] = useState(false);
    useEffect(() => {
        setOperator(operatorToEdit);
        setError(false);
    }, [operatorToEdit]);

    const handleSalvar = () => {
        if (matriculaExists(operator.matricula, operators, operatorToEdit.matricula)) {
            setError(true);
            return;
        }

        updateOperator(operator);
        onClose();
    };

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const cpf = e.target.value;
        if (cpfRules(cpf)) {
            setOperator({ ...operator!, cpf });
        }
    };

    return (
      <Modal open={openEditModal} onClose={onClose}
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(168, 168, 168, 0)',
            backdropFilter: 'blur(1px)'
          }
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
            minWidth: 600,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Typography variant="h6">Editar Operador</Typography>
          <TextField 
              label="Matrícula" 
              variant="filled" 
              required
              value={operator.matricula}
              onChange={(e) => { 
                  setOperator({...operator!, matricula: e.target.value});
                  setError(false);
              }}
              error={error}
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
              label="Nome Completo" 
              variant="filled"
              required
              value={operator.nome}
              onChange={(e) => setOperator({...operator!, nome: e.target.value})}
              sx={{
                  '& .MuiInputBase-input': { fontSize: '1.4rem' },
                  '& .MuiInputLabel-root': { fontSize: '1.3rem' },
                  '& .MuiFilledInput-underline:after': { borderBottomColor: '#00a63e' },
                  '& label.Mui-focused': { color: '#00a63e'},
              }}
          />

          <TextField 
              label="CPF" 
              variant="filled"    
              required 
              value={operator.cpf}
              onChange={handleCpfChange}
              helperText="Apenas números"
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
              <SaveButton onClick={handleSalvar} disabled={!isOperatorFormValid(operator)}/>
              <CancelButton onClick={onClose}/>
          </Box>
        </Box>
      </Modal>
    );
  }