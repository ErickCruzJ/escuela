import {useForm} from '@inertiajs/react';
import { FormEvent } from 'react';

export default function Create(){
    const{data, setData, post, errors, processing}=useForm({
        nombre:'',
    });
    function submit(e: React.FormEvent){
        e.preventDefault();
        post('/aulas');
    }
    return(
        <form onSubmit={submit}>
            <h1>Aula Nueva</h1>
            <input 
                type="text"
                value={data.nombre}
                onChange={(e)=>setData('nombre',e.target.value)} 
            />
            {errors.nombre &&(
                <div>{errors.nombre}</div>
            )}
            <button disabled={processing}>
                Guardar
            </button>

        </form>
    )
}