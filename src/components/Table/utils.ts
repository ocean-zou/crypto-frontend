import { DatabaseItem } from '@/config';

interface PriceChangeResult {
    percentageChange: number;
    volumeChange: number;
}

function findPreviousData(data: DatabaseItem[], dbItem: DatabaseItem, daysAgo: number): DatabaseItem | undefined {
    const currentDate = new Date(dbItem.Date);
    const currentTimestamp = currentDate.getTime();

    return data.find((item: DatabaseItem) => {
        const itemDate = new Date(item.Date);
        return item.Name === dbItem.Name && itemDate.getTime() === currentTimestamp - daysAgo * 24 * 60 * 60 * 1000;
    });
}

export function calculatePriceChangeByPercentage(data: DatabaseItem[], dbItem: DatabaseItem, daysAgo: number): string {
    const previousXDaysData: DatabaseItem | undefined = findPreviousData(data, dbItem, daysAgo);
    const closeXDaysAgo = previousXDaysData ? previousXDaysData.Close : 0;
    const changeXDays = dbItem.Close - closeXDaysAgo;

    // Calculate the percentage change and format it to one decimal place
    const percentageChange = ((changeXDays / closeXDaysAgo) * 100).toFixed(1);

    return `${percentageChange}%`;
}

export function get24hVolumeChange(data: DatabaseItem[], dbItem: DatabaseItem): number {
    // Assuming 1 day ago for volume change
    const previousXDaysData: DatabaseItem | undefined = findPreviousData(data, dbItem, 1);

    const currentVolume = dbItem.Volume;
    const previousVolume = previousXDaysData ? previousXDaysData.Volume : 0;
    const volumeChange = currentVolume - previousVolume;

    // Return the result rounded to one decimal place
    return volumeChange;
}