import { useForm } from "@inertiajs/react";

type Clase = {
    id: number;
    grupo: string;
    materia: { nombre: string };
    pivot: {
        fecha_inscripcion: string;
        calificacion: number | null;
    };
};

export default function CalificacionRow({
    estudianteId,
    clase,
}: {
    estudianteId: number;
    clase: Clase;
}) {
    const { data, setData, put, processing } = useForm({
        calificacion: clase.pivot.calificacion ?? 0,
    });

    function submit() {
        put(`/inscripciones/${estudianteId}/${clase.id}`);
    }

    return (
        <li>
            {clase.materia.nombre} - Grupo {clase.grupo}
            {" - Fecha: "}
            {clase.pivot.fecha_inscripcion}
            {" - Calificación: "}
            {clase.pivot.calificacion ?? "Sin capturar"}

            <input
                type="number"
                min="0"
                max="100"
                value={data.calificacion}
                onChange={(e) =>
                    setData("calificacion", Number(e.target.value))
                }
            />

            <button onClick={submit} disabled={processing}>
                Guardar
            </button>
        </li>
    );
}