import { LinkStyled, LoginWrapperStyled } from '../Login/loginStyles'
import Form from "../Forms/Form"
import TextInput from '../TextInputs/TextInputs'
import { useDispatch, useSelector } from 'react-redux'
import { openSticky, setCurrentUser, toggleSticky } from '../../Redux/User/UserSlice'
import { verifyUser } from '../../axios/axiosValidateUser'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'


const Validate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser =  useSelector ((state)=>state.user.currentUser)

  return (
    <Formik
        initialValues={{ code: '' }}
        onSubmit = { async (values)=>{

            const { actualizedUser } = await verifyUser(currentUser.email, values.code);

            dispatch(setCurrentUser({...actualizedUser, token: currentUser.token}));
            navigate('/');  
            dispatch(openSticky())

            }}
    >
    <LoginWrapperStyled>
      <h2>Validá tu correo electrónico</h2>

            <Form
              btnText= "Validar"
            
            >
              <TextInput
                type="text"
                name="code"
              >
                  Código de verificación
              </TextInput>
            </Form>

    </LoginWrapperStyled>
    </Formik>
  )
}

export default Validate
