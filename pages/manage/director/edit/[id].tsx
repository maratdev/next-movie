import DirectorEdit from '@/screens/admin/director/DirectorEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const DirectorEditPage: NextPageAuth = () => {
	return <DirectorEdit />
}

DirectorEditPage.isOnlyAdmin = true

export default DirectorEditPage
