import {useForm} from '@inertiajs/react';

export default function Create(){
    const {data, setData, post, errors, processing} = useForm({
        nombre:"",
        creditos: 1,
    });
    function submit(e: React.FormEvent){
        e.preventDefault();
        post ("/materias");
    }
    return(
        <form onSubmit={submit}>
            <h1>Nueva Materia</h1>

            <div>
                <input 
                    type="text"
                    placeholder="Nombre"
                    value={data.nombre}
                    onChange={(e) =>
                        setData("nombre", e.target.value)
                    } 
                />
                {errors.nombre &&( <div>{errors.nombre}</div>)}
            </div>
            <div>
                <input 
                    type="number"
                    min="1"
                    max="5"
                    value={data.creditos}
                    onChange={(e) =>
                        setData("creditos", Number(e.target.value))
                    }
                />
                {errors.creditos &&( <div>{errors.creditos}</div>)}
            </div>
            <button disabled={processing}>
                Guardar
            </button>
        </form>
    )
}