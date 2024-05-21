import '@/assets/styles/globals.scss';
import type { AppProps } from 'next/app';
import MainProvider from '../app/provider/MainProvider';
import { TypeComponentAuthFields } from '@/shared/types/auth.types';
type TypeAppProps = AppProps & TypeComponentAuthFields;
const App = ({ Component, pageProps }: TypeAppProps) => {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>);
};

export default App;
