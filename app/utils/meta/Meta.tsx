import { FC } from 'react';
import { ISeo } from '@/utils/meta/meta.interface';
import { usePathname } from 'next/navigation';
import Head from 'next/head';
import { siteName, titleMerge } from '@/config/seo.config';
import { onlyText } from '@/utils/string/clearTxt';
import { MetaNoIndex } from '@/utils/meta/MetaNoIndex';
import logoImage from '@/assets/images/logo.svg'

const Meta: FC<ISeo> = ({ title, description, children }) => {
	const asPath = usePathname();
	const currentUrl = `${process.env.APP_URL}${asPath}`;
	return (
		<>
			{description ? (
				<Head>
					<title itemProp='headline'>{titleMerge(title)}</title>
					<meta
						itemProp='description'
						name='description'
						content={onlyText(description, 152)}
					/>
					<link rel='canonical' href={currentUrl} />
					<meta property='og:locale' content='en' />
					<meta property='og:title' content={titleMerge(title)} />
					<meta property='og:url' content={currentUrl} />
					<meta property='og:image' content={logoImage.src} />
					<meta property='og:site_name' content={siteName} />
					<meta
						property='og:description'
						content={onlyText(description, 197)}
					/>
				</Head>
			) : (
				<MetaNoIndex title={title} />
			)}
			{children}
		</>
	);
};

export default Meta;
