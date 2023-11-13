import React from 'react';
import { TabContainer, BodyContainer } from '@/components/Tab/Tab.styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TableComponent from '../Table/Table';
import Portfolio from '../Portfolio/Portfolio';
import PortfolioComponent from '../Portfolio/Portfolio';
import useTabStore from '@/Store/useTabStore';

interface TabComponentProps { }

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
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
    <PortfolioComponent key={0} />,   // Portfolio
    <TableComponent key={1} />,       // Coins
    <div key={2}>New Coins</div>,      // New Coins
    <div key={3}>Gainers & Losers</div>,  // Gainers & Losers
    <div key={4}>Categories</div>,        // Categories
    <div key={5}>Chains</div>,            // Chains
    <div key={6}>Alleged SEC Securities 🔥</div>, // Alleged SEC Securities 🔥
    <div key={7}>DePIN 🔥</div>,                 // DePIN 🔥
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
                        <Tab label="Details" {...a11yProps(2)} />
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
