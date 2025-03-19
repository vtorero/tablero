import { useState } from "react";
import {
    useReactTable, 
    getCoreRowModel,
    flexRender
} from '@tanstack/react-table'

function DashboardTableResumen({asistenciasdetalles={}}) {
    const columns = [
   /*     {
            header: "ID",
            accessorKey: 'id',
            footer: 'Id'
        },*/
        {
            header: "PERIODO",
            accessorKey: 'annio',
            footer: 'Periodo'
        },
        {
            header: "BASICOS",
            accessorKey: 'formacion_basica',
            footer: 'Basicos'
        },
        {
            header: "ESPECIALIZADOS",
            accessorKey: 'formacion_especializada',
            footer: 'Especializados'
        },
        {
            header: "EVALUADORES",
            accessorKey: 'evaluadores',
            footer: 'Evaluadores'
        },
        {
            header: "PPRRD VIGENTES ACUMULADOS",
            accessorKey: 'pprrd',
            footer: 'PPRRD Vigentes acumulados'
        },
        
    ]
    //const [data] = useState(() => [...asistenciasdetalles]);
    const table = useReactTable({
        data: asistenciasdetalles, 
        columns: columns, 
        getCoreRowModel: getCoreRowModel(),
    })
  return (
    <div className="max-w-5xl p-2 mx-auto fill-gray-400">
        <table className="w-full text-center border border-spacing-2 border-slate-400">
            <thead className="bg-gray-500">
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id} className="capitalize px-3.5 py-2 border border-slate-300">
                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                    <tr key={row.id} className="py-10 border-b border-gray-200 hover:bg-gray-100">
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id} className="border border-slate-300 text-center">{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                        ))}
                    </tr>
                ))
                ) : (
                <tr className="h-32 text-center">
                  <td colSpan={12}>No se encontraron registros</td>
                </tr>
                )}
            </tbody>
            <tfoot>
                {table.getFooterGroups().map(footerGroup => (
                    <tr key={footerGroup.id}>
                        {footerGroup.headers.map(footer => (
                            <th key={footer.id} className="border border-slate-300">
                                {flexRender(footer.column.columnDef.footer, footer.getContext())}
                            </th>
                        ))}
                    </tr>
                ))}
            </tfoot>
        </table>
    </div>
  )
}

export default DashboardTableResumen