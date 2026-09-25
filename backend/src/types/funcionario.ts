export interface Funcionario {
    id: string
    nome:string
    email: string
    senha: string
    idCargo: string
    ativo: boolean
}

export interface CriarFuncionario {
    nome:string
    email: string
    senha: string
    id_cargo: string
    ativo: boolean
}

export interface EditarFuncionario {
    id:string
    Novonome:string
    Novoemail: string
    Novosenha: string
    Novoid_cargo: string
    ativo: boolean
}