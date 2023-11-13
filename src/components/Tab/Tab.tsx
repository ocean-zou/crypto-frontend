import React from 'react';
import { TabContainer, BodyContainer } from './Tab.styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TableComponent from '../Table/Table';
import Portfolio from '../Portfolio/Portfolio';
import PortfolioComponent from '../Portfolio/Portfolio';
import useTabStore from '@/Store/useTabStore';
import DetailComponent from '../Detail/Detail';

interface TabComponentProps { }

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  selectedTab: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, selectedTab, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={selectedTab !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {selectedTab === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const tabsContent = [
    <PortfolioComponent key={0} />,  
    <TableComponent key={1} />,          
    <div key={2}>To be Continue...</div>, 
    <div key={3}>To be Continue...</div>, 
    <div key={4}>To be Continue...</div>, 
    <div key={5}>To be Continue...</div>, 
    <div key={6}>To be Continue...</div>, 
    <div key={7}>To be Continue...</div>,               
];
const TabComponent: React.FC<TabComponentProps> = () => {
    const { selectedTab, setSelectedTab } = useTabStore();
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    return (
        <TabContainer>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={selectedTab} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Portfolio" {...a11yProps(0)} />
                        <Tab label="Coins" {...a11yProps(1)} />
                        <Tab label="New Coin 🔥" {...a11yProps(2)} />
                        <Tab label="Gainers & Losers" {...a11yProps(3)} />
                        <Tab label="Categories" {...a11yProps(4)} />
                        <Tab label="Chains" {...a11yProps(5)} />
                        <Tab label="Alleged SEC Securities 🔥" {...a11yProps(6)} />
                        <Tab label="DePIN 🔥" {...a11yProps(7)} />
                    </Tabs>
                </Box>
            </Box>
            <BodyContainer>
                {tabsContent[selectedTab]}
            </BodyContainer>
        </TabContainer>
    );
}

export default TabComponent;
