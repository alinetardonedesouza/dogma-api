export interface PetsProps {
    id: string,
    userId: string,
    name: string,
    age: number,
    breed: string,
    sex: boolean,
    collarId: string,
}

export interface CreatePetsProps {
    userId: string,
    name: string,
    age: number,
    breed: string,
    sex: boolean,
    collarId: string,
}

export interface UpdatePetsProps {
    id: string,
    data: DataPetsProps
}

export interface DataPetsProps {
    id?: string,
    userId?: string,
    name?: string,
    age?: number,
    breedw?: string,
    sex?: boolean,
    collarId?: string,
}

export interface DeletePetsProps {
    id: string
}

export interface GetPetsByIdProps {
    id: string
}

export interface GetPetsByUserIdProps {
    userId: string
}

export interface GetPetsByCollarIdProps {
    collarId: string
}