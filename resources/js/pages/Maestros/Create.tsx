import {useForm} from '@inertiajs/react';

export default function Create(){
    const{data, setData, post, errors, processing} = useForm({
        nombre:'',
        especialidad:'',
    });
    function submit(e: React.FormEvent){
        e.preventDefault();
        post('/maestros');
    }
    return(
        <form onSubmit={submit}>
            <h1>Maestro Nuevo</h1>
            <input 
                type="text"
                value={data.nombre}
                onChange={(e)=>setData('nombre',e.target.value)}
            />
            {errors.nombre &&(
                <div>{errors.nombre}</div>
            )}
            <input 
                type="text" 
                value={data.especialidad}
                onChange={(e)=>setData('especialidad',e.target.value)}
            />
            {errors.especialidad &&(
                <div>{errors.especialidad}</div>
            )}
            <button disabled={processing}>
                Guardar
            </button>
        </form>
    )
}