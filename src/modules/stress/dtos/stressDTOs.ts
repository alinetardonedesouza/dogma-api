export interface StressProps {
    id: string,
    petId: string,
    soundId: string,
    acelerometerId: string,
    heartRateId: string,
    totalValue: string
}

export interface CreateStressProps {
    petId: string,
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
    petId: string,
    soundId: string,
    acelerometerId: string,
    heartRateId: string,
    totalValue: string
}

export interface DeleteStressProps {
    id: string
}

export interface GetStressByPetIdProps {
    petId: string
}

export interface GetStressByIdProps {
    id: string
}