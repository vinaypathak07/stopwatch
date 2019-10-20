import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Tabs, TabPanel } from 'react-tabs';
import { Trello, Calendar } from 'react-feather';
import theme from './theme';
import GlobalStyles from './global';
import { Nav } from './components/nav';
import { PageContent } from './components/content';
import { CustomTabList, CustomTabComponent } from './components/tab';
import { Hourly } from './hourly';

const App: React.FC = () => {
  const [tab, setTab] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Tabs selectedIndex={tab} onSelect={(idx: React.SetStateAction<number>) => setTab(idx)}>
        <Nav>
          <CustomTabList>
            <CustomTabComponent label="Hourly">
              <Trello />
            </CustomTabComponent>
            <CustomTabComponent label="Scheduler">
              <Calendar />
            </CustomTabComponent>
          </CustomTabList>
        </Nav>
        <PageContent>
          <TabPanel>
            <Hourly />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </PageContent>
      </Tabs>
    </ThemeProvider>
  );
};

export default App;
