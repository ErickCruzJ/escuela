import {Link, router} from "@inertiajs/react";
type Estudiante = {
    id :  number;
    nombre : string;
    semestre : number;
    carrera: {
        nombre: string;
    };
};
export default function Index({
    estudiantes,
}:{
    estudiantes : Estudiante[];
}){
    return(
        <>
            <h1>Estudiantes</h1>
            <Link href="/estudiantes/create">
                Nuevo Estudiante
            </Link>
            <ul>
                {estudiantes.map((estudiante)=>(
                    <li key={estudiante.id}>
                        {estudiante.id}-{estudiante.nombre}-{estudiante.carrera.nombre}-{estudiante.semestre}
                        <Link href={`/estudiantes/${estudiante.id}/edit`}>
                            Editar
                        </Link>
                        <button
                            onClick={()=>{
                                if (confirm('Estas seguro que quieres eliminar a este estudiante')){
                                    router.delete(`/estudiantes/${estudiante.id}`);
                                }
                            }}
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}