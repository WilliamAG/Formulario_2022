export class Registro {
    _id?: number;
    nombre: string;
    apellido: string;
    dni: string;
    fnacimiento: Date;
    correo: string;
    urlimagen: string;

    constructor(nombre: string, apellido: string, dni: string, fnacimiento: Date,
                correo: string, urlimagen: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fnacimiento = fnacimiento;
        this.correo = correo;
        this.urlimagen = urlimagen;
    } 
}