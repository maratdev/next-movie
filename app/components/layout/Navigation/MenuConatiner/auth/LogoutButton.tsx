import { FC, MouseEvent } from 'react'
import Link from 'next/link'
import { MaterialIcon } from '@/components/ui/icons/MaterialIcon'

import { useActions } from '@/hooks/useActions'

const LogoutButton: FC = () => {
	const { logout } = useActions()

	const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
	}

	return (
		<li>
			<Link href='#' onClick={logoutHandler}>
				<MaterialIcon name="MdLogout" />
				<span>Logout</span>
			</Link>
		</li>
	)
}

export default LogoutButton
