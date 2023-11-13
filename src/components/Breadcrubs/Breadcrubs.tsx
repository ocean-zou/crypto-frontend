import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import useTabStore from '@/Store/useTabStore';

export interface IBreadcrubsProps {
}
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
}
export default function Breadcrubs(props: IBreadcrubsProps) {
    const {setSelectedTab} = useTabStore();
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/" onClick={()=>setSelectedTab(1)}>
          Crypto Currencies
                </Link>
                <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>
        </div>
    );
}
