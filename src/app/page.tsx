'use client'
import useTabStore from '@/Store/useTabStore'
import { Main, NavigationContainer, TabContainer, BodyContainer } from './page.styles'
import NavigationComponent from '@/components/Navigation/Navigation'
import PortfolioComponent from '@/components/Portfolio/Portfolio'
import TabComponent from '@/components/Tab/Tab'
import TableComponent from '@/components/Table/Table'
export default function Home() {
    return (
        <Main>
            <NavigationContainer>
                <NavigationComponent/>
            </NavigationContainer>
            <TabContainer>
                <TabComponent />
            </TabContainer>
        </Main>
    )
}
