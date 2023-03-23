import Header from '../../components/Header'
import Signup from '../../components/Signup'

const SignupPage = () => {
	return (
		<div className='bg-white pt-4 pb-4 px-8 rounded-xl'>
			<Header heading='Regístrese para crear una cuenta' paragraph='¿Ya tienes una cuenta? ' linkName='Login' linkUrl='/' />
			<Signup />
		</div>
	)
}
export default SignupPage
