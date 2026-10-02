export interface Login {
    id: string
    nome:string
    email: string
    senha: string
    idCargo: string
    ativo: boolean

}

export interface LoginData {
    email: string
    senha: string
}

export interface LoginResponse {
    nome:string
    email: string
    idCargo: string
    token: string
}