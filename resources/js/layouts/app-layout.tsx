import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import type { BreadcrumbItem } from '@/types';

export default function AppLayout({
    breadcrumbs = [],
    children,
}: {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
}) {
    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs}>
            <div className='min-h-screen bg-gray-100'>
                <div className='p-6'>
                    <div className='max-auto max-w-7x1 space-y-6'>
                        <div className='rounded-2x1 bg-white border shadow-sm p-6'>
                            <h1  className='text-2x1 font-bold' text-gray-800>
                                Sistema Escolar
                            </h1>
                            <p className='text-sm' text-gray-500>
                                Geastion de estudiabtes, clases e inscripciones
                            </p>
                        </div>
                        <div className='rounded-2x1 bg-white border shadow-sm p-6'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayoutTemplate>
    );
}
