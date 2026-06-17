type Estudiante = {
    id :  number;
    nombre : string;
    semestre : number;
    carrera: {
        nombre: string;
    };
};
export default function Index({
    estudiantes,
}:{
    estudiantes : Estudiante[];
}){
    return(
        <>
            <h1>Estudiantes</h1>
            <ul>
                {estudiantes.map((estudiante)=>(
                    <li key={estudiante.id}>
                        {estudiante.nombre}-{estudiante.carrera.nombre}
                    </li>
                ))}
            </ul>
        </>
    );
}