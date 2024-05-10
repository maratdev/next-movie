import { FC } from 'react';
import { TypeMaterialIconName } from '@/shared/types/icons.types';
import * as MaterialIcons from 'react-icons/md';

const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
	const IconComponent = MaterialIcons[name];
	return <IconComponent /> || <MaterialIcons.MdDragIndicator />;
};

export default MaterialIcon;
