import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from '@/components/layout/Layout';
import ReduxToast from './Redux/ReduxToast';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import HeadProvider from './ProgressBar/HeadProvider';
import AuthProvider from './AuthProvider/AuthProvider';
import { TypeComponentAuthFields } from '@/shared/types/auth.types';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

const MainProvider: FC<TypeComponentAuthFields & { children: ReactNode }> = ({ children, Component}) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToast />
					<AuthProvider Component={Component}>
						<Layout >{children}</Layout>
					</AuthProvider>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	);
};

export default MainProvider;
