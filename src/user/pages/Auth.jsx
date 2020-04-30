import React, { useState } from 'react'
import Input from '../../shared/components/formElements/Input'
import Button from '../../shared/components/formElements/Button'
import { useForm } from '../../shared/hooks/formHook'
import { validatorRequire } from '../../shared/utils/validators'

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true)
  const switchModeHandler = () => {
    setIsLoginMode((prevMode) => !prevMode)
  }

  const [state, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  )
  const authSubmitHandler = (e) => {
    e.preventDefault()
    console.log(state.inputs)
  }
  return (
    <div>
      <h3>صفحه ورود</h3>
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            id='name'
            element='input'
            type='text'
            placeholder='نام کاربری'
            errorText='نام کاربری صحیح را وارد کنید'
            validators={[validatorRequire()]}
            onInput={inputHandler}
          />
        )}
        <Input
          id='email'
          element='input'
          type='email'
          placeholder='ایمیل'
          errorText='ایمیل صحیح را وارد کنید'
          validators={[validatorRequire()]}
          onInput={inputHandler}
        />
        <Input
          id='password'
          element='input'
          type='password'
          placeholder='رمز عبور'
          errorText='رمز صحیح را وارد کنید'
          validators={[validatorRequire()]}
          onInput={inputHandler}
        />
        <Button type='submit' disabled={!state.isValid}>
          {isLoginMode ? 'ورود' : 'ثبت نام'}
        </Button>
      </form>
      <Button type='button' onClick={switchModeHandler}>
        برو به {isLoginMode ? 'ثبت نام' : 'ورود'}
      </Button>
    </div>
  )
}

export default Auth
