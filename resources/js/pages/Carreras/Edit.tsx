import {useForm} from "@inertiajs/react";
interface Carrera {
    id: number;
    nombre: string;
}
export default function Edit({ carrera }: { carrera: Carrera}){
    const {data, setData, put, errors,processing} = useForm({
        nombre: carrera.nombre,
    });
    function submit(e: React.FormEvent){
        e.preventDefault();

        put(`/carreras/${carrera.id}`);
    }
    return (
        <form onSubmit={submit}>
            <h1>Editar Carrera</h1>
            <input 
                type="text" 
                value={data.nombre}
                onChange={(e) => setData('nombre', e.target.value)}
            />
            {errors.nombre &&(
                <div>{errors.nombre}</div>
            )}
            <button disabled={processing}>
                Actualizar
            </button>
        </form>
    );
}