import { ReactNode } from 'react';

export interface ISeo {
	title: string,
	description?: string,
	keywords?: string,
	image?: string,
	children: ReactNode
}
