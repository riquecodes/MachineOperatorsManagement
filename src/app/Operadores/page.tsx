'use client'

import ButtonNewOperator from "@/components/buttons/NewButton"
import OperatorsTable from "@/components/operatorsTable/OperatorsTable"
import { Box, Typography } from "@mui/material"

export default function OperatorsPage() {
    return(
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginLeft: '10%', marginRight: '10%' }}>
                <Typography variant="h5" sx={{ marginTop: 3 }}>Registros de Operadores</Typography>
                <ButtonNewOperator/>
            </Box>
            <Box>
                <OperatorsTable/>
            </Box>
        </>
    )
}
    