import {useForm} from "@inertiajs/react";

interface Carrera{
    id:number;
    nombre: string;
}
export default function  Create({
    carreras,
}:{
    carreras: Carrera[];
}){
    const {data,setData, post, errors, processing}= useForm({
        nombre: "",
        carrera_id: "",
        semestre: "",
    });
    function submit(e: React.FormEvent){
        e.preventDefault();
        post("/estudiantes");
    }
    return(
        <form onSubmit={submit}>
            <h1>Nuevo Estudiante</h1>

            <input 
                type="text"
                placeholder="Nombre" 
                value = {data.nombre}
                onChange={(e)=>setData("nombre",e.target.value)}
            />
            {errors.nombre && <div>{errors.nombre}</div>}

            <select
                value = {data.carrera_id}
                onChange={(e)=> setData("carrera_id", e.target.value)}>
                    <option value="">
                        Selecciona una carrera
                    </option>
                    {carreras.map((carrera)=>(
                        <option key={carrera.id} value={carrera.id}>
                            {carrera.nombre}
                        </option>
                    ))}
            </select>
            {errors.carrera_id &&(
                <div>{errors.carrera_id}</div>
             )}
             <input 
                type="numbre"
                min="1"
                max="12"
                value={data.semestre}
                onChange={(e)=>setData("semestre",e.target.value)} 
             />
            {errors.semestre &&(
                <div>{errors.semestre}</div>
            )}
            <button disabled={processing}>
                Guardar
            </button>
        </form>
    );
}