export interface ActorDTO { //Lectura
    id: number,
    nombre : string,
    fechaNacimiento : Date,
    foto?: string

};

export interface ActorCreacionDTO{  //Creacion
    nombre : string,
    fechaNacimiento : Date,
    foto?: File 
}