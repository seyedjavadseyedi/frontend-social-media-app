import React, { useCallback, useReducer } from 'react'

import Input from '../../shared/components/formElements/Input'
import Button from '../../shared/components/formElements/Button'
import { validatorRequire } from '../../shared/utils/validators'

const initialState = {
  inputs: {
    title: {
      value: '',
      isValid: false,
    },
    description: {
      value: '',
      isValid: false,
    },
  },
  isValid: false,
}
const fromReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isValid: formIsValid,
      }
    default:
      return state
  }
}

const NewPost = () => {
  const [state, dispatch] = useReducer(fromReducer, initialState)

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id,
    })
  }, [])

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
