'use client'

import ButtonNewMachine from "@/components/buttons/NewButton"
import MachinesTable from "@/components/operatorsTable/OperatorsTable"
import { Box, Typography } from "@mui/material"

export default function MachinesPage() {
    return(
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginLeft: '10%', marginRight: '10%' }}>
                <Typography variant="h5" sx={{ marginTop: 3 }}>Registros de Máquinas</Typography>
                <ButtonNewMachine/>
            </Box>
            <Box>
                <MachinesTable/>
            </Box>
        </>
    )
}
    