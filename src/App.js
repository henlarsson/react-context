import React from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemedButton from './themed-button';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.red
            ? themes.blue
            : themes.red,
      }));
    };

    this.state = {
      theme: themes.blue,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <Content />
        </ThemeContext.Provider>
        <div>
          <ThemedButton>No context Theme
          </ThemedButton>
        </div>
      </div>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

export default App;