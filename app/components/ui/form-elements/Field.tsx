import cn from 'classnames';
import { forwardRef } from 'react';
import Link from 'next/link';
import { IField } from './form.interface';

import styles from './form.module.scss';

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		console.log(placeholder);
		return (
			<div className={cn(styles.common, styles.field)} style={style}>
				<label>
					{placeholder === 'Icon' && 'ICON' ? <Link
						className={styles.icon}
						href='https://react-icons.github.io/react-icons/icons/md/'
						rel='noopener noreferrer'
						target='_blank'>
						<span>{placeholder}</span>
					</Link> : <span>{placeholder}</span>}

					<input ref={ref} type={type} {...rest} />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		);
	},
);

Field.displayName = 'Field';

export default Field;
