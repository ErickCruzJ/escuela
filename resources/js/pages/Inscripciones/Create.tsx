import {useForm} from "@inertiajs/react";

interface Estudiante {
    id : number;
    nombre : string;
}
interface Clase{
    id: number;
    grupo : string;
    materia: {
        nombre : string;
    };
}
export default function Create({
    estudiantes,
    clases,
}:{
    estudiantes : Estudiante[];
    clases : Clase[];
}){
    const{data, setData, post, errors, processing} = useForm({
        estudiante_id: "",
        clase_id: "",
        fecha_inscripcion: "",
    });

    function submit(e: React.FormEvent){
        e.preventDefault();
        post("/inscripciones");
    }
    return(
        <form onSubmit={submit}>
            <h1>Nueva Inscripcion</h1>

            <select 
                value ={data.estudiante_id}
                onChange={(e)=>setData("estudiante_id",e.target.value)} 
            >
                <option value="">
                    Selecciona un estudiante
                </option>
                {estudiantes.map((estudiante) => (
                    <option 
                        key={estudiante.id}
                        value={estudiante.id}
                    >
                        {estudiante.nombre}
                    </option>
                ))}
            </select>
            {errors.estudiante_id &&(
                <div>{errors.estudiante_id}</div>
            )}
            <select 
                value={data.clase_id}
                onChange={(e)=>setData("clase_id", e.target.value)}
            >
                <option value="">
                    Selecciona una clase    
                </option>               
                {clases.map((clase)=>(
                    <option 
                        key ={clase.id}
                        value={clase.id}
                    >
                        {clase.materia.nombre} - Gripo{clase.grupo}
                    </option>
                ))}
            </select>
            {errors.clase_id &&(
                <div>{errors.clase_id}</div>
            )}
            <input 
                type="date"
                value ={data.fecha_inscripcion}
                onChange={(e)=>setData("fecha_inscripcion",e.target.value)} 
            />
            {errors.fecha_inscripcion &&(
                <div>{errors.fecha_inscripcion}</div>
            )}
            <button disabled={processing}>
                Guardar
            </button>
        </form>
    )
}