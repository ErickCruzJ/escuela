import estudiantes from '@/routes/estudiantes';
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
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-xl font-semibold text-gray-800'>
                        Carreras
                    </h1>
                    <p className='text-sm text-gray-500'>
                        Administración de carreras académicas
                    </p>
                </div>
                <Link 
                    href="/carreras/create"
                    className='rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 trsnsition'
                >
                    Rgistrar Carrera
                </Link>
            </div>
            <div className='overflow-hidden-xl border border-gray-200 bg-while shadow-sm'>
                <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500'>
                                ID
                            </th>
                            <th className='px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500'>
                                Nombre
                            </th>
                            <th className='px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-500'>
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gary-100 bg-white'>
                        {carreras.length > 0?(
                            carreras.map((carrera)=>(
                                <tr
                                    key={carrera.id}
                                    className='hover:bg-gray-50'
                                >
                                    <td className='px-6 py-4 text-sm text-gray-700'>
                                        {carrera.id}
                                    </td>
                                    <td className='px-6 py-4 text-sm font-medium text-gray-800'>
                                        {carrera.nombre}
                                    </td>
                                    <td className='px-6 py-4'>
                                        <div className='flex justify-center gap-2'>
                                            <Link
                                                href={`/carreras/${carrera.id}/edit`}
                                                className='rounded-md bg-amber-500 px-3 py-1.5 text-xs font-medium text-while hover:bg-amber-600'    
                                            >
                                                Editar
                                            </Link>
                                            <button 
                                                type="button"
                                                onClick={()=> {
                                                    if(confirm("¿Estas seguro de eliminar esta carrera?")){
                                                        router.delete(
                                                            `/carreras/${carrera.id}`
                                                        );
                                                    }
                                                }}
                                                className='rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-700'    
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ):(
                            <tr>
                                <td
                                colSpan={3}
                                className='px-6 py-8 text-center text-gray-500'
                                >
                                    No hay careras registradas
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>

            </div>
        </div>
    );   
}
