import {Link, router} from "@inertiajs/react";
type Maestro = {
    id: number;
    nombre: string;
    especialidad: string;
};
export default function Index({
    maestros,
}:{
    maestros: Maestro[];
}){
    return(
        <>
            <h1>Maestros</h1>
            <Link href="/maestros/create">
                Nuevo Maestro 
            </Link>
            <ul>
                {maestros.map((maestro)=>(
                    <li key={maestro.id}>
                        {maestro.nombre}-{maestro.especialidad}
                        <Link href={`/maestros/${maestro.id}/edit`}>
                            Editar
                        </Link>
                        <button
                            onClick={()=>{
                                if (confirm('¿Estas seguro de ele,imar a este maestro?')){
                                    router.delete(`/maestros/${maestro.id}`);
                                }
                            }}
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}