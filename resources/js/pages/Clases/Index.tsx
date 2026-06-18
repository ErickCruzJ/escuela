import {Link, router} from "@inertiajs/react";

type Clase ={
    id : number;
    maestro : {
        nombre : string;
    };
    materia : {
        nombre : string;
    };
    aula : {
        nombre : string; 
    };
    grupo : string;
}
export default function Index({
    clases,
}:{
    clases : Clase[];
}){
    return(
        <>
            <h1>Clases</h1>
            <Link href={"/clases/create"}>
                Nuevo Clase
            </Link>
            <ul>
                {clases.map((clase)=>(
                    <li key={clase.id}>
                        {clase.id}-{clase.maestro.nombre}-{clase.materia.nombre}-{clase.aula.nombre}-{clase.grupo}
                        <Link href={`/clases/${clase.id}/edit`}>
                            Editar
                        </Link>
                        <button 
                            onClick={()=>{
                                if (confirm('¿Estas seguro que quieres eleiminar esta clase')){
                                    router.delete(`/clases/${clase.id}`);   
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