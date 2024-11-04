import { Form, Formik, FormikHelpers } from 'formik'
import Login from './Login'
import { object, string } from 'yup'
import { useLoginMutation } from '../Slice/Authslice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const LoginWrapper = () => {
  const [login, { isLoading }] = useLoginMutation()
  const navigate = useNavigate()

  const initialValues = {
    email: "",
    password: ""
  }

  const validateschema = object({
    email: string().email("Invalide email format").required("Enter your email"),
    password: string().required(" Enter your password ")
  })

  const handleSubmit = (values: any, { setSubmitting, resetForm }: FormikHelpers<any>) => {
    login(values)
      .then((response: any) => {
        const token = response?.data?.token

        if (token) {
          localStorage.setItem("auth", token)
          toast.success("Login successfully")
          navigate('/shop-bill-management/dashboard')
        
        } else {
          toast.error("Invalid password and email")
        }
      })
      .catch((error: any) => {
        console.error("Login error: ", error)
        toast.error("An error occurred during login")
      })
      .finally(() => {
        setSubmitting(false)
        resetForm()
      })
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateschema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <Form>
          <Login formikProps={formikProps} isLoading={isLoading} />
        </Form>
      )}
    </Formik>
  )
}

export default LoginWrapper
