import {useForm, Link} from '@inertiajs/react';

export default function Create() {
    const {data, setData, post, errors, processing} = useForm({
        nombre: '',
    });
    function submit(e: React.FormEvent) {
        e.preventDefault();

        post('/carreras');
    }
    return (
        <div className='mx-auto max-w-2xl'>
            <div className='rounded-xl border border-gray-200 bg-white shadow-sm'>
                <div className='border-b border-gray-200 px-6 py-4'>
                    <h1 className='text-2xl font-bold text-gray-800'>
                        Nueva carreara
                    </h1>
                    <p className='mt-1 text-sm text-gray-500'>
                        Registra una nueva carrera académica.
                    </p>
                </div>
                <form onSubmit={submit} className='space-y-6 p-6'>
                <div>
                    <label 
                        htmlFor="nombre"
                        className='mb-2 block text-sm font-medium text-gray-700'
                    >
                        Nombre de la carrera
                    </label>
                    <input 
                        id="nombre"
                        type="text"
                        value={data.nombre}
                        onChange={(e) =>
                            setData("nombre", e.target.value)
                        }
                        placeholder='Ej.IngenierÍa en Sistemas'
                        className='w-full rounded-lg border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus: ring-blue-200' 
                    />
                    {errors.nombre &&(
                        <p className='mt-2 text-sm text-red-600'>
                            {errors.nombre}
                        </p>
                    )}
                    </div>
                    <div className='flex justify-end gap-3'>
                        <Link
                            href="/carreras"
                            className='rounded-lg border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100'
                        >
                            Cancelar
                        </Link>
                         <button 
                            type="submit"
                            disabled={processing}
                            className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {processing
                                ? "Guardando..."
                                : "Guardar Carrera"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}