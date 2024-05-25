import DirectorList from '@/screens/admin/directors/DirectorList';

import { NextPageAuth } from '@/shared/types/auth.types';

const DirectorListPage: NextPageAuth = () => {
	return <DirectorList />;
};

DirectorListPage.isOnlyAdmin = true;

export default DirectorListPage;
