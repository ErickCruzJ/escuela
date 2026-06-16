import {useForm} from "@inertiajs/react";
interface Materia {
    id: number;
    nombre: string;
    creditos: number;
}
export default function Edit({ materia }: {materia: Materia}){
    const {data, setData, put, errors, processing} = useForm({
        nombre : materia.nombre,
        creditos: materia.creditos,
    });
    function submit(e: React.FormEvent){
        e.preventDefault();
        put(`/materias/${materia.id}`);
    }
    return(
        <form onSubmit={submit}>
            <h1>Editar Materia</h1>
            <input 
                type="text"
                value={data.nombre} 
                onChange={(e) => setData("nombre", e.target.value)}
            />
            {errors.nombre &&(
                <div>{errors.nombre}</div>
            )}
            <input 
                type="number"
                value={data.creditos}
                min="1"
                max="5"
                onChange={(e) => setData("creditos", Number(e.target.value))}
             />
             {errors.creditos &&(
                <div>{errors.creditos}</div>
             )}
             <button disabled={processing}>
                Actualizar
             </button>
        </form>
    )
}