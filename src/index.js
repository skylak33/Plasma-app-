import ReactDOM from 'react-dom';
import { DeviceThemeProvider, SSRProvider } from '@salutejs/plasma-ui';
import { GlobalStyle } from './GlobalStyle';
import App from './App';

ReactDOM.render(
    <DeviceThemeProvider>
        <SSRProvider>
            <App />
            
        </SSRProvider>
    </DeviceThemeProvider>,
    
    document.getElementById('root'),
);  