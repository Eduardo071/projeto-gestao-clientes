export interface cliente {
  id: number
  nome: string
  email: string
  telefone: string
  coordenada_x: number
  coordenada_y: number
}

export interface IParametrosBuscaUsuario {
  id?: number
  nome?: string
  email?: string
  telefone?: string
  [key: string]: number | string | undefined;
}
