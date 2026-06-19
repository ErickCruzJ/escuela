import { useForm } from "@inertiajs/react";

interface Clase {
    id: number;
    grupo: string;
    materia: {
        nombre: string;
    };
}

interface Horario {
    id: number;
    dia: string;
    hora_inicio: string;
    hora_fin: string;
    clase_id: number;
}
export default function Edit({
    horario,
    clases,
}: {
    horario: Horario;
    clases: Clase[];
}) {
    const { data, setData, put, errors, processing } = useForm({
    dia: horario.dia,
    hora_inicio: horario.hora_inicio,
    hora_fin: horario.hora_fin,
    clase_id: horario.clase_id.toString(),
});
function submit(e: React.FormEvent) {
    e.preventDefault();
    put(`/horarios/${horario.id}`);
}
    return(
        <form onSubmit={submit}>
            <h1>Editar Horarios</h1>

            <select
                value = {data.clase_id}
                onChange={(e)=>setData("clase_id",e.target.value)}
            >
                <option value="">
                    Selecciona una clase
                </option>
                {clases.map((clase)=>(
                    <option 
                        key = {clase.id}
                        value={clase.id}
                    >
                        {clase.materia.nombre}-{clase.grupo}
                    </option>
                ))}
            </select>
            {errors.clase_id &&(
                <div>{errors.clase_id}</div>
            )}
            <select 
                value={data.dia}
                onChange={(e)=>setData("dia", e.target.value)}
            >
                <option value="">
                    Elige el día
                </option>
                <option value="Lunes">Lunes</option>
                <option value="Martes">Martes</option>
                <option value="Miercoles">Miercoles</option>
                <option value="Jueves">Jueves</option>
                <option value="Viernes">Viernes</option>
                <option value="Sabado">Sabado</option>
            </select>
            {errors.dia &&(
                <div>{errors.dia}</div>
            )}
            <input 
                type="time"
                value={data.hora_inicio}
                onChange={(e)=>setData("hora_inicio", e.target.value)} 
            />
            {errors.hora_inicio &&(
                <div>{errors.hora_inicio}</div>
            )}
            <input 
            type="time"
            value={data.hora_fin}
            onChange={(e)=>setData("hora_fin", e.target.value)}
            />
            {errors.hora_fin &&(
                <div>{errors.hora_fin}</div>
            )}
            <button disabled={processing}>
                Actualizr
            </button>
        </form>
    );
}
