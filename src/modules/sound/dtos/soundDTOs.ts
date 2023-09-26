export interface SoundProps {
    id: string,
    petId: string,
    value: number
}

export interface CreateSoundProps {
    petId: string,
    value: number
}

export interface UpdateSoundProps {
    id: string,
    data: DataSoundProps
}

export interface DataSoundProps {
    petId?: string,
    value?: number
}

export interface DeleteSoundProps {
    id: string
}

export interface GetSoundByPetIdProps {
    petId: string
}

export interface GetSoundByIdProps {
    id: string
}