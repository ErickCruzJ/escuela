import {useForm} from "@inertiajs/react";

interface Carrera{
    id : number;
    nombre : string;
}

interface Estudiante{
    id : number;
    nombre : string;
    carrera_id : number;
    semestre : number;
}

export default function Edit({
    estudiante,
    carreras,
}:{
    estudiante: Estudiante;
    carreras: Carrera[];
}){
    const{data, setData, put, errors, processing} = useForm({
        nombre: estudiante.nombre,
        carrera_id: estudiante.carrera_id.toString(),
        semestre : estudiante.semestre.toString(),
    });
    function submit(e: React.FormEvent){
        e.preventDefault();
        put(`/estudiantes/${estudiante.id}`);
    }
    return(
            <form onSubmit={submit}>
            <h1>Editar Estudiante</h1>

            <input 
                type="text"
                value={data.nombre}
                onChange={(e) => setData("nombre", e.target.value)} 
            />
            <select
                value={data.carrera_id}
                onChange={(e) => setData("carrera_id",e.target.value)} 
            >
                {carreras.map((carrera)=>(
                    <option 
                        key={carrera.id}
                        value={carrera.id}
                    >
                        {carrera.nombre}
                    </option>
                ))}
            </select>
            <input 
                type="number"
                value={data.semestre}
                onChange={(e)=>setData("semestre", e.target.value)} 
            />
            <button disabled={processing}>
                Actualizar
            </button>
        </form>
    );
    
}