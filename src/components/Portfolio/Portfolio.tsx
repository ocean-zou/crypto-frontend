import React from 'react';
import Image from 'next/image';
import { PortfolioContainer,TextContainer,ImgContainer } from './Portfolio.styles';
import portfolioImage from '../../../public/portfolioImage.webp'
interface PortfolioComponentProps {

}

const PortfolioComponent: React.FC<PortfolioComponentProps> = () => {
    return (
        <PortfolioContainer>
            <TextContainer>
                <h2>Free & Powerful Crypto Portfolio Tracker</h2>
                <span>Track your crypto earnings like a pro, with a user-friendly and reliable portfolio tracker that you can rely on</span>
            </TextContainer>
            <ImgContainer>
                <Image src={portfolioImage} alt="portfolio" width={200} height={200} layout="responsive"  />
            </ImgContainer>
        </PortfolioContainer>
    );
}

export default PortfolioComponent;
