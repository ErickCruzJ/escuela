export default function Create({
    estudiantes,
    clases,
}:{
    estudiantes:any[];
    clases:any[];
}){
    return(
         <>
            <h1>Nuevo Inscripción</h1>

            <h2>Estudiantes</h2>
            <ul>
                {estudiantes.map((estudiante)=>(
                    <li key = {estudiante.id}>
                        {estudiante.nombre}
                    </li>
                ))}
                <h2>Clases</h2>
                <ul>
                    {clases.map((clase)=>(
                        <li key={clase.id}>
                            {clase.materia.nombre}-{clase.id}
                        </li>
                    ))}
                </ul>
            </ul>
        </>
    );
}