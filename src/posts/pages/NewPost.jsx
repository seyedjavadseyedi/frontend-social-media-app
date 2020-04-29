import React from 'react'

import Input from '../../shared/components/formElements/Input'
import Button from '../../shared/components/formElements/Button'
import { validatorRequire } from '../../shared/utils/validators'
import { useForm } from '../../shared/hooks/formHook'

const NewPost = () => {
  const [state, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    false
  )
  const postSubmitHandler = (e) => {
    e.preventDefault()
    console.log(state.inputs)
  }

  return (
    <div>
      <form onSubmit={postSubmitHandler}>
        <Input
          id='title'
          element='input'
          type='text'
          placeholder='عنوان پست...'
          errorText='عنوان را وارد کنید'
          validators={[validatorRequire()]}
          onInput={inputHandler}
        />
        <Input
          id='description'
          element='textarea'
          placeholder='توضیحات پست...'
          errorText='توضیحات را اضافه کنید'
          validators={[validatorRequire()]}
          onInput={inputHandler}
        />
        <Button type='submit' disabled={!state.isValid}>
          اضافه کردن پست
        </Button>
      </form>
    </div>
  )
}

export default NewPost
