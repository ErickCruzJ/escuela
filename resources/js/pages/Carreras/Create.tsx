import {useForm} from '@inertiajs/react';

export default function Create() {
    const {data, setData, post, errors, processing} = useForm({
        nombre: '',
    });
    function submit(e: React.FormEvent) {
        e.preventDefault();

        post('/carreras');
    }
    return (
        <form onSubmit={submit}>
            <h1>Nueva Carrera</h1>

            <input 
                type="text"
                value={data.nombre}
                onChange={(e) => setData('nombre', e.target.value)} 
            />
            {errors.nombre &&(
                <div>{errors.nombre}</div>
            )}
            <button disabled={processing}>
                Guardar
            </button>
        </form>
    );
}