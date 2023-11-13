import * as React from 'react';
import { DetailContainer } from './Detail.style';
import Breadcrubs from '../Breadcrubs/Breadcrubs';

export interface IDetailComponentProps {
}

export default function DetailComponent (props: IDetailComponentProps) {
    return (
        <DetailContainer>
            <Breadcrubs />
            <div>DetailComponent</div>
        </DetailContainer>
    );
}
