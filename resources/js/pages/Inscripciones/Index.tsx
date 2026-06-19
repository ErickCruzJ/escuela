import {Link, router} from "@inertiajs/react";
import CalificacionRow from "./Components/CalificacionRow";

type Clase ={
    id : number;
    grupo : string;
    materia:{
        nombre:string;
    }
    pivot:{
        fecha_inscripcion : string;
        calificacion : number |null;
    };
};
type Estudiante = {
    id : number;
    nombre : string;
    clases: Clase [];
};
export default function Index({
    estudiantes,
}:{
    estudiantes : Estudiante[];
}){
    return(
        <>
            <h1>Inscipciones</h1>
            <Link href="/inscripciones/create">
                Nueva Inscripcion
            </Link>

            {estudiantes.map((estudiante) => (
                <div key ={estudiante.id}>
                    <h2>{estudiante.nombre}</h2>
                    <ul>
                         {estudiante.clases.map((clase) => (
                            <CalificacionRow
                                key={clase.id}
                                estudianteId={estudiante.id}
                                clase={clase}
                            />
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
}