import { DatabaseItem } from '@/config';

export function calculatePriceChanges(data: DatabaseItem[], dbItem: DatabaseItem, daysAgo: number): number {
    const currentDate = new Date(dbItem.Date);
    const currentTimestamp = currentDate.getTime();

    const previousXDaysData: DatabaseItem | undefined = data.find((item: DatabaseItem) => {
        const itemDate = new Date(item.Date);
        return item.Name === dbItem.Name && itemDate.getTime() === currentTimestamp - daysAgo * 24 * 60 * 60 * 1000;
    });
    const closeXDaysAgo = previousXDaysData ? previousXDaysData.Close : 0;
    const changeXDays = dbItem.Close - closeXDaysAgo;

    return changeXDays;
}
