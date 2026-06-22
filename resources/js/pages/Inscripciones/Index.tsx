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
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold text-gray-800">
                    Inscipciones
                </h1>
                <Link 
                    href="/inscripciones/create"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition">
                    Nueva Inscripcion
                </Link>
            </div>
            <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
                <table className="min-w-full text-sm text-left">
                    <thead className="bg-gray-100 text-gray-600">
                        <tr>
                            <th className="px-4 py-3"> Estudiante </th>
                            <th className="px-4 py-3"> Materia </th>
                            <th className="px-4 py-3"> Grupo </th>
                            <th className="px-4 py-3"> Fecha inscripción</th>
                            <th className="px-4 py-3"> Calificación </th>
                            <th className="px-4 py-3"> Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {estudiantes.map((estudiante) =>
                            estudiante.clases.map((clase)=>(
                                <tr
                                    key = {`${estudiante.id}-${clase.id}`}
                                    className="border-t"    
                                >
                                    <td className="px-4 py-2 font-medium">
                                        {estudiante.nombre}
                                    </td>
                                    <td className="px-4 py-2 font-medium">
                                        {clase.materia.nombre}
                                    </td>
                                    <td className="px-4 py-2">
                                        {clase.grupo}
                                    </td>
                                    <td className="px-4 py-2">
                                        {clase.pivot.fecha_inscripcion}
                                    </td>
                                    <td className="px-4 py-2">
                                        {clase.pivot.calificacion}
                                    </td>
                                    <td className="px-4 py-2">
                                        <CalificacionRow
                                            estudianteId={estudiante.id}
                                            clase={clase}
                                        />
                                    </td>
                                    <td className="px-4 py-2"> 
                                        <button
                                            type = "button"
                                            onClick={()=>{
                                                if(confirm("¿Deseas eliminar este inscripcion")){
                                                    router.delete(`/inscripciones/${estudiante.id}/${clase.id}`);
                                                }
                                            }}
                                            className="text-xs bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}