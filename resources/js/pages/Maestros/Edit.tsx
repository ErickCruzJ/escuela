import {useForm} from "@inertiajs/react";

interface Maestro{
    id:number;
    nombre: string;
    especialidad: string;
}

export default function Edit({maestro}:{maestro: Maestro}){
    const{data, setData, put, errors, processing} =useForm({
        nombre: maestro.nombre,
        especialidad: maestro.especialidad,
    });
    function submit(e: React.FormEvent){
        e.preventDefault();
        put(`/maestros/${maestro.id}`);
    }
    return(
        <form onSubmit={submit}>
            <h1>Editar Maestro</h1>
            <input 
                type="text"
                value={data.nombre}
                onChange={(e) => setData('nombre', e.target.value)} 
            />
            {errors.nombre &&(
                <div>{errors.nombre}</div>
            )}
            <input 
                type="text"
                value={data.especialidad}
                onChange={(e) => setData('especialidad',e.target.value)} 
            />
            {errors.especialidad &&(
                <div>{errors.especialidad}</div>
            )}
            <button disabled={processing}>
                Actualizar
            </button>
        </form>
    )

}