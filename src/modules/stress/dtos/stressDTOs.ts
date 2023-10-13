export interface StressProps {
    id: string,
    collarId: string,
    soundId: string,
    acelerometerId: string,
    heartRateId: string,
    totalValue: string
}

export interface CreateStressProps {
    collarId: string,
    soundId: string,
    acelerometerId: string,
    heartRateId: string,
    totalValue: string
}

export interface UpdateStressProps {
    id: string,
    data: DataStressProps
}

export interface DataStressProps {
    collarId: string,
    soundId: string,
    acelerometerId: string,
    heartRateId: string,
    totalValue: string
}

export interface DeleteStressProps {
    id: string
}

export interface GetStressByCollarIdProps {
    collarId: string
}

export interface GetStressByIdProps {
    id: string
}