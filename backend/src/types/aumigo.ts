export interface Aumigo {
    id: string
    dt_inicio: string
    dt_fim: string | null
    status: boolean
    id_parceiro: string
}

export interface CriarAumigo {
    dt_inicio?: string
    dt_fim?: string | null
    status?: boolean
    id_parceiro: string
}

export type EditarAumigo = CriarAumigo

