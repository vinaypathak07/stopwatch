import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import GlobalStyles from './global';
import { Nav } from './components/nav';
import { PageContent } from './components/content';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Nav />
      <PageContent>
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
      </PageContent>
    </ThemeProvider>
  );
};

export default App;
