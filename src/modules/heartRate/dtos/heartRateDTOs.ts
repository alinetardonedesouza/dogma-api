export interface HeartRateProps {
    id: string,
    petId: string,
    value: number
}

export interface CreateHeartRateProps {
    petId: string,
    value: number
}

export interface UpdateHeartRateProps {
    id: string,
    data: DataHeartRateProps
}

export interface DataHeartRateProps {
    petId?: string,
    value?: number
}

export interface DeleteHeartRateProps {
    id: string
}

export interface GetHeartRateByPetIdProps {
    petId: string
}

export interface GetHeartRateByIdProps {
    id: string
}