import maestros from "@/routes/maestros";
import {Link, router} from "@inertiajs/react";

type Aula ={
    id : number;
    nombre : string;
};
export default function Index ({
    aulas,
}:{
    aulas: Aula[];
}){
    return(
        <>
            <h1>Aulas</h1>
            <Link href="/aulas/create">
                Nueva Aula
            </Link>
            <ul>
                {aulas.map((aula)=>(
                    <li key = {aula.id}>
                        {aula.nombre}
                        <Link href={`/aulas/${aula.id}/edit`}>
                            Editar
                        </Link>
                        <button
                            onClick={()=>{
                                if(confirm('¿Estas seguro de eleiminar esta aula?')){
                                    router.delete(`/aulas/${aula.id}`)
                                }
                            }}>
                                Eliminar 
                        </button>
                    </li>
                    
                ))}
            </ul>
        </>
    )
}