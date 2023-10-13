export interface HeartRateProps {
    id: string,
    collarId: string,
    value: number
}

export interface CreateHeartRateProps {
    collarId: string,
    value: number
}

export interface UpdateHeartRateProps {
    id: string,
    data: DataHeartRateProps
}

export interface DataHeartRateProps {
    collarId?: string,
    value?: number
}

export interface DeleteHeartRateProps {
    id: string
}

export interface GetHeartRateByCollarIdProps {
    collarId: string
}

export interface GetHeartRateByIdProps {
    id: string
}