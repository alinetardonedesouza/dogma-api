export interface GPSProps {
    id: string,
    collarId: string,
    latitude: string,
    longitude: string,
}

export interface CreateGPSProps {
    collarId: string,
    latitude: string,
    longitude: string,
}

export interface UpdateGPSProps {
    id: string,
    data: DataGPSProps
}

export interface DataGPSProps {
    collarId?: string,
    latitude?: string,
    longitude?: string,

}

export interface DeleteGPSProps {
    id: string
}

export interface GetGPSByUserIdProps {
    userId: string
}

export interface GetGPSByIdProps {
    id: string
}
export interface GetGPSBycollarIdProps {
    collarId: string
}