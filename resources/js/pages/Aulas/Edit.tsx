import {useForm} from "@inertiajs/react";

interface Aula{
    id : number;
    nombre : string;
}
export default function Edit({aula}:{aula:Aula}){
    const{data, setData, put, errors, processing} = useForm({
        nombre: aula.nombre,
    });
    function submit(e: React.FormEvent){
        e.preventDefault();
        put(`/aulas/${aula.id}`);
    }
    return(
        <form onSubmit={submit}>
            <h1>Editar Nombre del Aula</h1>
            <input 
                type="text"
                value = {data.nombre}
                onChange={(e) =>setData('nombre', e.target.value)} 
            />
            {errors.nombre &&(
                <div>{errors.nombre}</div>
            )}
            <button disabled={processing}>
                Actualizar                
            </button>
        </form>
    )
}