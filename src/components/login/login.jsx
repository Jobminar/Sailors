import img1 from '../../assets/Images/image.png'
import {Formik,Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'

const Login =()=>{
    return (
        <>
            <div className="row" style={{height:'100vh',width:'100%'}}>
                <div className="col-6" >
                    <img src={img1} width='600px' />
                </div>
                <div className="col-6" style={{height:'100vh'}}>
                    <h2>Welcome to SAILORSWAVE</h2>
                    <Formik 
                        initialValues={{userNumber:''}}
                        validationSchema={yup.object({
                            userNumber: yup.number().test('len', 'Must be exactly 10 digits', val => val.toString().length === 10)
                          })}
                        onSubmit={(number)=>{
                            alert('user Number is this:'+number.userNumber)
                        }}  
                    >
                        {
                            form=><Form>
                                <dl>
                                    <dt>Phone Number</dt>
                                    <dd><Field type='input' className='form-control' name='userNumber' placeholder='Enter Your Phone Number' /></dd>
                                    <dd><ErrorMessage  name='userNumber' className='text-danger' /></dd>
                                    <dd><button className="btn btn-primary">GET OTP</button></dd>
                                </dl>
                            </Form>
                        }
                    </Formik>
                </div>
            </div>
        </>
    )
}
export default Login
