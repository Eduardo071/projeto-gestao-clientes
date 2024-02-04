import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { getClientes } from '../../api/ApiRequests';
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import './mainStyle.css'

export function Main(props: { clientAdded: boolean }) {

  const [clientes, setClientes] = useState([]);
  const [filterType, setFilterType] = useState('nome');
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const clientesData = await getClientes();
        setClientes(clientesData);
      } catch (error) {
        console.error("Error fetching clientes:", error);
      }
    };

    fetchClientes();
  }, [props.clientAdded])

  const handleChange = (event: SelectChangeEvent) => {
    setFilterType(event.target.value);
  };

  const handleSubmit = async () => {
    const getClienteByFilter = async () => {
      const response = await getClientes(filterType, filterValue);
      setClientes(response)
    }

    getClienteByFilter();
  };

  const columns: GridColDef[] = [
    { field: 'nome', headerName: 'Nome', width: 400 },
    { field: 'email', headerName: 'E-mail', width: 400, },
    { field: 'telefone', headerName: 'Telefone', width: 200, },
  ];


  return (
    <main className='main'>
      <header className='header'>
        <FormControl variant="standard" className='formGroup' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Filtro</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            value={filterType}
            onChange={handleChange}
            label="Filtro"
            className='filterType'
          >
            <MenuItem value={"nome"}>Nome</MenuItem>
            <MenuItem value={"email"}>Email</MenuItem>
            <MenuItem value={"telefone"}>Telefone</MenuItem>
          </Select>

          <TextField
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setFilterValue(event.target.value); }}
            id="filterValue"
            className='filterValue'
            label={filterType}
            variant="standard" />

          <Button className='buttonSubmit' variant="outlined" size="large" onClick={() => handleSubmit()}>Buscar Cliente</Button>

        </FormControl>
      </header>
      <DataGrid
        className='table'
        rows={clientes}
        columns={columns}
        getRowId={(row) => row.id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </main>
  )
}