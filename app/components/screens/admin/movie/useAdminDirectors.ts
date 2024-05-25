import { useQuery } from 'react-query';

import { IOption } from '@/ui/select/select.interface';

import { DirectorService } from '@/services/director/directorService';

import { toastError } from '@/utils/api/withToastrErrorRedux';

export const useAdminDirectors = () => {
	return useQuery('list of director', () => DirectorService.getAll(), {
		select: ({ data }) =>
			data.map(
				(director): IOption => ({
					label: director.name,
					value: director._id,
				})
			),
		onError(error) {
			toastError(error, 'director list')
		},
	})
}
