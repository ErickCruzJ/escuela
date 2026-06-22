import{Link, router} from '@inertiajs/react';

type Carrera = {
    id: number;
    nombre: string;
}
export default function Index({
    carreras
    
}:{
    carreras: Carrera[];
}){
    return (
        <>
            <h1 className=''>Carreras</h1>
            <Link href="/carreras/create">
                Nueva Carreras
            </Link>

            <ul>
                {carreras.map((carrera)=>(
                    <li key={carrera.id}>
                        {carrera.nombre}
                        <Link href={`/carreras/${carrera.id}/edit`}>
                                Editar
                        </Link>
                        <button
                            onClick={()=>{
                                if (confirm('¿Estás seguro de eliminar esta carrera?')) {
                                    router.delete(`/carreras/${carrera.id}`);
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
