import { FC, useState } from 'react';
import styles from './Auth.module.scss';
import { useAuthRedirect } from '@/screens/auth/hooks/useAuthRedirect';
import { useAuth } from '@/hooks/useAuth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuthInput } from '@/screens/auth/auth.interface';
import Meta from '@/utils/meta/Meta';
import Heading from '@/ui/heading/Heading';
import AuthFields from '@/components/shared/user/AuthFields';
import Button from '@/ui/form-elements/Button';
import { useActions } from '@/hooks/useActions';

const Auth: FC = () => {
	useAuthRedirect()
	const { isLoading } = useAuth();
	const [type, setType] = useState<'login' | 'register'>('login')
	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})
	const { login, register } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	}

	return (
		<Meta title="Auth">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Auth" className="mb-6" />
					<AuthFields register={registerInput} formState={formState} />

					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							type="submit"
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
};

export default Auth;
