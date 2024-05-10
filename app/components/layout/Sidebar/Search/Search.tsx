import { FC } from 'react';
import style from './Search.module.scss';
import { useSearch } from '@/components/layout/Sidebar/Search/useSearch';
import SearchList from '@/components/layout/Sidebar/Search/SearchList/SearchList';
import SearchField from '@/ui/search-field/SearchField';

const Search: FC = () => {
	const { isSuccess, data, handleSearch, searchTerm } = useSearch();
	return (
		<div className={style.wrapper}>
			<SearchField searchTerm={searchTerm} handleChange={handleSearch} />

			{isSuccess && <SearchList movies={data} />}
		</div>
	);
};

export default Search;
