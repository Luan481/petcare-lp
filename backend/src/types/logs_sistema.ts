export interface LogsSistema {
    id: string
    op_realizada: string
    descricao: string
    data: string
    id_funcionario: string
}

export interface CriarLogsSistema {
    op_realizada: string
    descricao: string
    data?: string
    id_funcionario: string
}

export type EditarLogsSistema = CriarLogsSistema

