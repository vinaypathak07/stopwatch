import React, { useState } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Tabs, TabPanel } from 'react-tabs';
import { Trello, Calendar } from 'react-feather';
import theme from './theme';
import GlobalStyles from './global';

import { Nav } from './components/nav';
import { PageContent } from './components/content';
import { CustomTabList, CustomTabComponent } from './components/tab';

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
            <div className="App">
              <header className="App-header">
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
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
