import { Link, router } from "@inertiajs/react";

type Materia ={
    id: number;
    nombre: string;
    creditos: number;
};
export default function Index({
    materias,
}:{
    materias: Materia[];
}){
    return (
        <>
            <h1>Materias</h1>
            <Link href="/materias/create">
               Nueva Materia
            </Link>

            <ul>
                {materias.map((materia)=>(
                    <li key={materia.id}>
                        {materia.nombre} ({materia.creditos} creditos)
                        <Link href={`/materias/${materia.id}/edit`}>
                            Editar
                        </Link>
                        <button 
                            onClick={()=>{
                                if(confirm('Esatas seguro de querer eliminar esta materia')){
                                    router.delete(`/materias/${materia.id}`);
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