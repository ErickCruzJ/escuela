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
            
        </form>
    )
}