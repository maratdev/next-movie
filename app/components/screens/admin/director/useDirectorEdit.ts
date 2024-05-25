import { IDirectorEditInput } from './director-edit.interface'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { DirectorService } from '@/services/director/directorService'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { getKeys } from '@/utils/object/getKeys'

import { getAdminUrl } from '@/config/url.config'

export const useDirectorEdit = (setValue: UseFormSetValue<IDirectorEditInput>) => {
	const { query, push } = useRouter()

	const directorId = String(query.id)

	const { isLoading } = useQuery(
		['director', directorId],
		() => DirectorService.getById(directorId),
		{
			onSuccess({ data }: { data: IDirectorEditInput[] }) {
				getKeys(data).forEach((key: any) => {
					setValue(key, data[key])
				})
			},
			onError(error) {
				toastError(error, 'Get director')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update director',
		(data: IDirectorEditInput) => DirectorService.update(directorId, data),
		{
			onError(error) {
				toastError(error, 'Update director')
			},
			onSuccess() {
				toastr.success('Update directors', 'update was successful')
				push(getAdminUrl('directors'))
			},
		}
	)

	const onSubmit: SubmitHandler<IDirectorEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
