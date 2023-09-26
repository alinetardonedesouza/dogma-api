export interface AcelerometerProps {
    id: string,
    petId: string,
    value: string
}

export interface CreateAcelerometerProps {
    petId: string,
    value: string
}

export interface UpdateAcelerometerProps {
    id: string,
    data: DataAcelerometerProps
}

export interface DataAcelerometerProps {
    petId?: string,
    value?: string
}

export interface DeleteAcelerometerProps {
    id: string
}

export interface GetAcelerometerByPetIdProps {
    petId: string
}

export interface GetAcelerometerByIdProps {
    id: string
}