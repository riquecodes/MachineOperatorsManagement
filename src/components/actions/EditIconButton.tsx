import { IconButton, IconButtonProps } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export default function EditIconButton ( props: IconButtonProps ) {
    return (
        <IconButton {...props}>
            <ModeEditIcon fontSize='large' color="success" />
        </IconButton>
    );
}
