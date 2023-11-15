import {GridColDef} from '@mui/x-data-grid';
export const API_BASE_URL = 'https://api.oceanzou.click/api/crypto';
export const END_DATE = '2021-07-06';
export const DAYS_TO_FETCH = 31;
export type Row = {
    id:number;
    '#': number;
    Coin: string;
    Price: string;
    '24h change': string;
    '7d change': string;
    'one month': string;
    '24h Volume': string;
    'Mkt Cap': string;
  };

export const uniqueNameMap: { [key: string]: number } = {
    'Aave': 1,
    'EOS': 2,
    'Stellar': 3,
    'Binance Coin': 4,
    'Ethereum': 5,
    'Tether': 6,
    'Bitcoin': 7,
    'IOTA': 8,
    'TRON': 9,
    'Cardano': 10,
    'Litecoin': 11,
    'USD Coin': 12,
    'Chainlink': 13,
    'Monero': 14,
    'Uniswap': 15,
    'Cosmos': 16,
    'NEM': 17,
    'Wrapped Bitcoin': 18,
    'Crypto.com Coin': 19,
    'Polkadot': 20,
    'XRP': 21,
    'Dogecoin': 22,
    'Solana': 23,
};

export interface DatabaseItem {
  Close: number;
  Date: string;
  High: number;
  Low: number;
  Marketcap: number;
  Name: string;
  Open: number;
  SNo: string;
  Symbol: string;
  Volume: number;
  _id: string;
}
export const columns: GridColDef[] = [
    { field: '#', headerName: 'ID', width: 50 },
    { field: 'Coin', headerName: 'Coin', width: 210 },
    { field: 'Price', headerName: 'Price', width: 130 },
    { field: '24h change', headerName: '24h change', width: 130 },
    { field: '7d change', headerName: '7d change', width: 130 },
    { field: 'one month', headerName: 'one month', width: 130 },
    { field: '24h Volume', headerName: '24h Volume', width: 130 },
    { field: 'Mkt Cap', headerName: 'Mkt Cap', width: 130 },
];
