import { Button, Dialog, DialogTitle, List, ListItem, ListItemText } from "@mui/material";
import { getRotas } from "../../api/ApiRequests";
import { useEffect, useState } from "react";
import { Cliente } from "../../models/cliente";
import './modalStyle.css'


export interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
}

export function DialogRotas(props: SimpleDialogProps) {
    const [clientes, setClientes] = useState<Cliente[]>([]);

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const clientesData = await getRotas();
                setClientes(clientesData);
            } catch (error) {
                console.error("Error fetching clientes:", error);
            }
        };

        fetchClientes();
    }, []);

    const handleClose = () => {
        props.onClose();
    };

    return (
        <Dialog className="dialog" maxWidth="md" fullWidth onClose={handleClose} open={props.open}>
            <DialogTitle>Rotas</DialogTitle>
            <List sx={{ pt: 0 }} className="list">
                {clientes.map((cliente: Cliente) => (
                    <ListItem disableGutters key={cliente.id}>
                        <ListItemText primary={cliente.nome} />
                    </ListItem>
                ))}
                <ListItem><ListItemText primary="Empresa ( Fim )" /></ListItem>
            </List>
            <Button className="buttonModal" onClick={handleClose} variant="outlined" size="large">Fechar</Button>
        </Dialog>
    );
}