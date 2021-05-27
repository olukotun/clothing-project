import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sing-up/sign-up.component'
import './sign-in-and-up.scss'

const SignInAndSignUp = () => {
    return (
        <div className='sign-in-and-sign-up'>
           <SignIn />
           <SignUp />
        </div>
    )
}

export default SignInAndSignUp
