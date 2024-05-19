import { IGalleryItem } from '@/ui/galery/gallery.types'

export interface IFavoriteItem extends Omit<IGalleryItem, 'content'> {
	title: string
	_id: string
}
