import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#00a63e', boxShadow: 3 }}>
      <Toolbar sx={{ maxWidth: '100%', px: 2, py: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" fontWeight="bold" sx={{ flexGrow: 1, color: 'white', display: 'flex' }}>
          <Link href="/" style={{ color: 'white', marginLeft: '9%' }}>
            Sistema de Gerenciamento
          </Link>
        </Typography>

        <Box component="nav" sx={{ display: 'flex', gap: 4, fontSize: '1.5rem', color: 'white', marginRight: '9%' }}>
          <Link href="/">
            Início
          </Link>
          <Link href="/Operadores">
            Operadores
          </Link>
          <Link href="/Maquinas">
            Máquinas
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}