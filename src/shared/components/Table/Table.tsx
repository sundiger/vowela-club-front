import * as React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';

const columns: GridColDef[] = [
    // { field: 'id', headerName: 'ID', width: 100 },
    {
        field: 'symbol',
        headerName: 'Символ',
        width: 150,
        editable: false,
    },
    {
        field: 'status',
        headerName: 'Статус',
        width: 130,
        editable: false,
    },
    {
        field: 'side',
        headerName: 'Позиция',
        type: 'number',
        width: 120,
        editable: false,
    },
    {
        field: 'volume',
        headerName: 'Количество',
        type: 'number',
        sortable: false,
        width: 130,
    },
    {
        field: 'openDate',
        headerName: 'Открытая дата',
        type: 'date',
        sortable: false,
        width: 160,
    },
    {
        field: 'entryPrice',
        headerName: 'Входная цена',
        sortable: false,
        width: 160,
    },
    {
        field: 'exitPrice',
        headerName: 'Выходная цена',
        sortable: false,
        width: 160,
    },
    {
        field: 'grossPL',
        headerName: 'Валовая П/У',
        description: 'Примерная прибыль и убыток',
        sortable: false,
        width: 160,
    },
    {
        field: 'commissions',
        headerName: 'Комиссия',
        sortable: false,
        width: 120,
    },
    {
        field: 'netPL',
        headerName: 'Чистая П/У',
        description: 'Чистая прибыль и убыток',
        sortable: false,
        width: 160,
    },
];

const rows = [
    { id: 1, symbol: 'TSLA', status: 'WIN', side: 'зов', volume: 123, openDate: '07.08.2021г.', entryPrice: 30 + ' $', exitPrice: 32 + ' $', grossPL: 2 + ' $', commissions: '...', netPL: 24 + ' $'},
    { id: 2, symbol: 'TSLA', status: 'LOS', side: 'зов', volume: 42,  openDate: '07.08.2021г.', entryPrice: 30 + ' $', exitPrice: 32 + ' $', grossPL: 2 + ' $', commissions: '...', netPL: 24 + ' $'},
    { id: 3, symbol: 'TSLA', status: 'WIN', side: 'зов', volume: 45,  openDate: '07.08.2021г.', entryPrice: 30 + ' $', exitPrice: 32 + ' $', grossPL: 2 + ' $', commissions: '...', netPL: 24 + ' $'},
    { id: 4, symbol: 'TSLA', status: 'WIN', side: 'зов', volume: 45,  openDate: '07.08.2021г.', entryPrice: 30 + ' $', exitPrice: 32 + ' $', grossPL: 2 + ' $', commissions: '...', netPL: 24 + ' $'},
    { id: 5, symbol: 'TSLA', status: 'WIN', side: 'зов', volume: 45,  openDate: '07.08.2021г.', entryPrice: 30 + ' $', exitPrice: 32 + ' $', grossPL: 2 + ' $', commissions: '...', netPL: 24 + ' $'},
    { id: 6, symbol: 'TSLA', status: 'WIN', side: 'зов', volume: 45,  openDate: '07.08.2021г.', entryPrice: 30 + ' $', exitPrice: 32 + ' $', grossPL: 2 + ' $', commissions: '...', netPL: 24 + ' $'},
];

export default function Table() {
    return (
        <div style={{ height: 400, width: '100%', marginTop: '30px',}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}
