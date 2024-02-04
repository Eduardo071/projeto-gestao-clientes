import * as S from './HeaderStyle'
import { Button } from "@mui/material";
import { DialogRotas } from "../Modal/Modal";
import { useState } from 'react';
import { FormDialog } from '../FormDialog/FormDialog';



export function Header(props: { onClientAdded: () => void }) {
    const [openModal, setOpenModal] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);


    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleClientAdded = () => {
        props.onClientAdded();
    };


    return (
        <S.Header>
            <Button variant="outlined" size="large" onClick={() => handleOpenDialog()}>Cadastrar Cliente</Button>
            <Button variant="outlined" size="large" onClick={() => handleOpenModal()}>Gerar Rota</Button>
            <DialogRotas
                open={openModal} onClose={handleCloseModal}
            />

            <FormDialog
                open={openDialog} onClose={handleCloseDialog} onClientAdded={handleClientAdded}
            />
        </S.Header>
    )
}