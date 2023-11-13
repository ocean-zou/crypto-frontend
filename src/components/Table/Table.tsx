import { TableContainer } from './Table.styles';
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Row, uniqueNameMap, DatabaseItem, columns } from '@/config';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { calculatePriceChanges } from './utils';
import { API_BASE_URL, END_DATE, DAYS_TO_FETCH } from '@/config';

interface TableComponentProps {

}
const TableComponent: React.FC<TableComponentProps> = () => {
    const [rows, setRows] = useState<Row[]>([]);
    const fetchDataAndProcess = async () => {
        const endDate = new Date(END_DATE);
        const startDate = new Date(endDate);
        startDate.setDate(endDate.getDate() - DAYS_TO_FETCH);

        try {
            const { data } = await axios.get(`${API_BASE_URL}/${startDate.toISOString().split('T')[0]}/${endDate.toISOString().split('T')[0]}`);
            // Filter unique names and keep the last day's data for each name
            const uniqueNamesData = data.reduce((acc: { [x: string]: DatabaseItem }, currentItem: DatabaseItem) => {
                acc[currentItem.Name] = currentItem;
                return acc;
            }, {});
            const newRows = Object.values<DatabaseItem>(uniqueNamesData).map((dbItem: DatabaseItem) => {
                // Calculate 24h, 7d, Mkt Cap, and Last 7 Days values
                const closeToday = dbItem.Close;
                const change24h = calculatePriceChanges(data, dbItem, 1);
                const change7d = calculatePriceChanges(data, dbItem, 7);
                const change30d = calculatePriceChanges(data, dbItem, 30);
                // Construct Row object
                const newRow: Row = {
                    id: uniqueNameMap[dbItem.Name],
                    '#': uniqueNameMap[dbItem.Name],
                    Coin: dbItem.Name,
                    Price: closeToday,
                    '24h change': change24h,
                    '7d change': change7d,
                    'one month': change30d,
                    '24h Volume': dbItem.Volume,
                    'Mkt Cap': dbItem.Marketcap,
                };

                return newRow;
            });

            setRows(newRows);
        } catch (error) {
            alert('Error fetching data');
        }
    };

    useEffect(() => {
        fetchDataAndProcess();
    }, []);

    return (
        <TableContainer >
            <div style={{ height: '100%', width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 8 },
                        },
                        sorting: {
                            sortModel: [{ field: 'Mkt Cap', sort: 'desc' }],
                        },
                    }}
                    pageSizeOptions={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    // checkboxSelection
                    sx={{ border: 'none', }}
                /></div>
        </TableContainer>

    );
}

export default TableComponent;
