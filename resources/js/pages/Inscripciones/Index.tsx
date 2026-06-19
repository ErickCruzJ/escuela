export default function Index({
    estudiantes,
}: {
    estudiantes: any[];
}){
    return(
        <>
        <h1>Inscripciones</h1>
        {estudiantes.map((estudiante) => (
                <div key={estudiante.id}>
                    <h3>{estudiante.nombre}</h3>

                    <ul>
                        {estudiante.clases.map((clase: any) => (
                            <li key={clase.id}>
                                {clase.materia.nombre}
                                {" - "}
                                Grupo {clase.grupo}
                                {" - "}
                                {clase.pivot.fecha_inscripcion}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
}