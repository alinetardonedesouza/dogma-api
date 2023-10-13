export interface SoundProps {
    id: string,
    collarId: string,
    value: number
}

export interface CreateSoundProps {
    collarId: string,
    value: number
}

export interface UpdateSoundProps {
    id: string,
    data: DataSoundProps
}

export interface DataSoundProps {
    collarId?: string,
    value?: number
}

export interface DeleteSoundProps {
    id: string
}

export interface GetSoundByCollarIdProps {
    collarId: string
}

export interface GetSoundByIdProps {
    id: string
}