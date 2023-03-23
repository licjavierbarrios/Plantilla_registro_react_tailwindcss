import Header from '../../components/Header'
import Login from '../../components/Login'

const LoginPage = () => {
	return (
		<div className='bg-white p-8 rounded-xl'>
			<Header heading='Ingrese a su cuenta' paragraph='¿Aún no tienes una cuenta? ' linkName='Signup' linkUrl='/signup' />
			<Login />
		</div>
	)
}
export default LoginPage
