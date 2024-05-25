import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { DirectorService } from '@/services/director/directorService'

import { toastError } from '@/utils/api/withToastrErrorRedux'

import { getAdminUrl } from '@/config/url.config'

export const useDirectors = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['director list', debouncedSearch],
		() => DirectorService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map(
					(director): ITableItem => ({
						_id: director._id,
						editUrl: getAdminUrl(`director/edit/${director._id}`),
						items: [director.name, String(director.countMovies)],
					})
				),
			onError(error) {
				toastError(error, 'director list')
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { push } = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		'create director',
		() => DirectorService.create(),
		{
			onError(error) {
				toastError(error, 'Create directors')
			},
			onSuccess({ data: _id }) {
				toastr.success('Create director', 'create was successful')
				push(getAdminUrl(`director/edit/${_id}`))
			},
		}
	)

	const { mutateAsync: deleteAsync } = useMutation(
		'delete director',
		(directorId: string) => DirectorService.delete(directorId),
		{
			onError(error) {
				toastError(error, 'Delete director')
			},
			onSuccess() {
				toastr.success('Delete director', 'delete was successful')
				queryData.refetch()
			},
		}
	)

	return useMemo(
		() => ({
			handleSearch,
			...queryData,
			searchTerm,
			deleteAsync,
			createAsync,
		}),
		[queryData, searchTerm, deleteAsync, createAsync]
	)
}
