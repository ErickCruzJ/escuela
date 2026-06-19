import {Link, router} from "@inertiajs/react";

type Horario={
    id : number;
    dia : string;
    hora_inicio : string;
    hora_fin : string;
    clase:{
        grupo : string;
        materia : {
            nombre : string;
        };
    };
};
export default function Index({
    horarios,
}: {
    horarios: Horario[];
}) {
    return (
        <>
            <h1>Horarios</h1>

            <Link href="/horarios/create">
                Nuevo Horario
            </Link>

            <ul>
                {horarios.map((horario) => (
                    <li key={horario.id}>
                        {horario.clase.materia.nombre}
                        {" - Grupo "}
                        {horario.clase.grupo}
                        {" - "}
                        {horario.dia}
                        {" - "}
                        {horario.hora_inicio}
                        {" a "}
                        {horario.hora_fin}
                        <Link href={`/horarios/${horario.id}/edit`}>
                            Editar
                        </Link>
                        <button
                            onClick={() => {
                                if (confirm("¿Eliminar horario?")) {
                                    router.delete(`/horarios/${horario.id}`);
                                }
                             }}
                            >
                                Eliminar
                            </button>
                    </li>
                ))}
            </ul>
        </>
    );
}