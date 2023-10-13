export interface AcelerometerProps {
    id: string,
    collarId: string,
    x: string,
    y: string,
    z: string
}

export interface CreateAcelerometerProps {
    collarId: string,
    x: string,
    y: string,
    z: string
}

export interface UpdateAcelerometerProps {
    id: string,
    data: DataAcelerometerProps
}

export interface DataAcelerometerProps {
    collarId?: string,
    value?: string
}

export interface DeleteAcelerometerProps {
    id: string
}

export interface GetAcelerometerByCollarIdProps {
    collarId: string
}

export interface GetAcelerometerByIdProps {
    id: string
}