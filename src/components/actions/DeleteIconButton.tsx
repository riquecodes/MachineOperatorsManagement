import { IconButton, IconButtonProps } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function DeleteIconButton(props: IconButtonProps) {
    return (
        <IconButton {...props}>
            <DeleteIcon fontSize='large' color="error" />
        </IconButton>
    );
}