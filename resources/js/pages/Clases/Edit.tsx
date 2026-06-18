import {useForm} from "@inertiajs/react";
interface Maestro{
    id : number;
    nombre : string;
}
interface Materia{
    id : number;
    nombre : string;
}
interface Aula{
    id : number;
    nombre : string;
}
interface Clase{
    id : number;
    maestro_id : number;
    materia_id : number;
    aula_id : number;
    grupo : string;
}
export default function Edit({
    clase,
    maestros,
    materias,
    aulas,
}:{
    clase : Clase;
    maestros : Maestro[];
    materias : Materia[];
    aulas : Aula[];
}){
    const{data, setData, put, errors, processing} = useForm({
        maestro_id : clase.maestro_id.toString(),
        materia_id : clase.materia_id.toString(),
        aula_id : clase.aula_id.toString(),
        grupo : clase.grupo,
    });
    function submit(e: React.FormEvent){
        e.preventDefault();
        put(`/clases/${clase.id}`);
    }
    return(
        <form onSubmit={submit}>
            <h1>Editar Clase</h1>
            <select 
                value={data.maestro_id}
                onChange={(e)=> setData("maestro_id", e.target.value)}
            >
                <option value="">
                    Selecciona un maestro
                </option>
                {maestros.map((maestro)=>(
                    <option key={maestro.id} value={maestro.id}>
                        {maestro.nombre}
                    </option>
                ))}
            </select>
            {errors.maestro_id &&(
                <div>{errors.maestro_id}</div>
            )}
            <select 
                value={data.materia_id}
                onChange={(e)=> setData("materia_id",e.target.value)}
            >
                <option value="">
                    Selecciona la materia
                </option>
                {materias.map((materia)=>(
                    <option key={materia.id} value={materia.id}>
                        {materia.nombre}
                    </option>
                ))}
            </select>
            {errors.materia_id &&(
                <div>{errors.materia_id}</div>
            )}
            <select 
                value={data.aula_id}
                onChange={(e)=>setData("aula_id",e.target.value)}
            >
                <option value="">
                    Selecciona un Aula
                </option>
                {aulas.map((aula)=>(
                    <option key={aula.id} value={aula.id}>
                        {aula.nombre}
                    </option>
                ))}
            </select>
            {errors.aula_id &&(
                <div>{errors.aula_id}</div>
            )}
            <input 
                type="text"
                placeholder="Grupo"
                value={data.grupo}
                onChange={(e)=>setData("grupo", e.target.value)}
            />
            {errors.grupo && <div>{errors.grupo}</div>}
            <button disabled={processing}>
                Actualizar
            </button>
        </form>
    )
}