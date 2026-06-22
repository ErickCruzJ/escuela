import { useForm, router } from "@inertiajs/react";

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
        <div className="flex gap-2 items-center">
            <input 
                type="number"
                className="w-20 border rounded px-2 py-1"
                value={data.calificacion}
                onChange={(e)=>setData("calificacion", Number(e.target.value))} 
            />
            <button
                onClick={submit}
                disabled={processing}
                className="text-xs bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
            >
                Guardar
            </button>
        </div>
    );
}