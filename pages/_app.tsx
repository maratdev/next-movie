import '@/assets/styles/globals.scss';
import type { AppProps } from 'next/app';
import MainProvider from '../app/provider/MainProvider';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<MainProvider>
			<Component {...pageProps} />
		</MainProvider>);
};

export default App;
