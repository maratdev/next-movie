import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from '@/components/layout/Layout';
import ReduxToast from './Redux/ReduxToast';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import HeadProvider from './ProgressBar/HeadProvider';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const MainProvider: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToast />
					<Layout>{children}</Layout>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	);
};

export default MainProvider;
