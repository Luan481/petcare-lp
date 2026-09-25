export interface Estoque {
    id: string
    nome: string
    descricao: string
    quantidade: number
    valor: number
    dt_criacao: string
    dt_att: string
    dt_validade: string
}

export interface CriarEstoque {
    nome: string
    descricao: string
    quantidade: number
    valor: number
    dt_criacao: string
    dt_att: string
    dt_validade: string
}