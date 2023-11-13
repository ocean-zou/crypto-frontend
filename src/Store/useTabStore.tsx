import { create } from 'zustand';

export interface IuseTabStoreProps {
    selectedTab:number;
    setSelectedTab:(item:number)=>void
}

const useTabStore = create<IuseTabStoreProps>()((set) => ({
    selectedTab: 0, 
    setSelectedTab: (item) => set({ selectedTab: item }), 
}));

export default useTabStore
