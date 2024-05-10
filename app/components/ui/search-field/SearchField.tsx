import { ChangeEvent, FC } from 'react';
import styles from './SearchField.module.scss';
import MaterialIcon from '@/ui/MaterialIcon';

interface ISearchField {
  searchTerm: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: FC<ISearchField> = ({ searchTerm, handleChange }) => {
	return (
		<div className={styles.search}>
			<MaterialIcon name='MdSearch' />
			<input placeholder='Search' value={searchTerm} onChange={handleChange} />
		</div>
	);
};

export default SearchField;
