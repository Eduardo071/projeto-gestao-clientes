import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import { Cliente } from "../../models/cliente";
import { postClientes } from "../../api/ApiRequests";

export function FormDialog(props: { open: boolean; onClose: () => void; onClientAdded: () => void; }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    coordenada_x: '',
    coordenada_y: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClose = () => {
    props.onClose();
  };

  const handleSubmit = async () => {
    try {
      const { nome, email, telefone, coordenada_x, coordenada_y } = formData;
      const clienteData: Cliente = {
        nome,
        email,
        telefone,
        coordenada_x: parseFloat(coordenada_x),
        coordenada_y: parseFloat(coordenada_y)
      };

      const response = await postClientes(clienteData);
      console.log("Cliente cadastrado com sucesso:", response);
      props.onClientAdded();
      handleClose();
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
    }
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          handleSubmit();
        },
      }}
    >
      <DialogTitle>Cadastrar Cliente</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Por favor, preencha os seguintes campos para cadastrar o cliente:
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="nome"
          name="nome"
          label="Nome"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          required
          margin="dense"
          id="email"
          name="email"
          label="Email"
          type="email"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          required
          margin="dense"
          id="telefone"
          name="telefone"
          label="Telefone"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          required
          margin="dense"
          id="coordenada_x"
          name="coordenada_x"
          label="Coordenada X"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          required
          margin="dense"
          id="coordenada_y"
          name="coordenada_y"
          label="Coordenada Y"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button type="submit">Cadastrar</Button>
      </DialogActions>
    </Dialog>
  );
}
