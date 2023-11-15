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
    'Aave': 13,
    'EOS': 15,
    'Stellar': 7,
    'Binance Coin': 8,
    'Ethereum': 16,
    'Tether': 5,
    'Bitcoin': 4,
    'IOTA': 20,
    'TRON': 10,
    'Cardano': 9,
    'Litecoin': 1,
    'USD Coin': 17,
    'Chainlink': 3,
    'Monero': 14,
    'Uniswap': 22,
    'Cosmos': 18,
    'NEM': 23,
    'Wrapped Bitcoin': 6,
    'Crypto.com Coin': 19,
    'Polkadot': 21,
    'XRP': 11,
    'Dogecoin': 12,
    'Solana': 2,
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
