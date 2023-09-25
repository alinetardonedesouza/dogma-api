export interface GPSProps {
    id: string,
    petId: string,
    latitude: string,
    longitude: string,
    locale: string
}

export interface CreateGPSProps {
    petId: string,
    latitude: string,
    longitude: string,
    locale: string
}

export interface UpdateGPSProps {
    id: string,
    data: DataGPSProps
}

export interface DataGPSProps {
    petId?: string,
    latitude?: string,
    longitude?: string,
    locale?: string
}

export interface DeleteGPSProps {
    id: string
}

export interface GetGPSByPetIdProps {
    petId: string
}

export interface GetGPSByIdProps {
    id: string
}