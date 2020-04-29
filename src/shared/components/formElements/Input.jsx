import React, { useReducer, useEffect } from 'react'
import { validate } from '../../utils/validators'

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.inputValue,
        isValid: validate(action.inputValue, action.validators),
      }
    case 'BLUR':
      return {
        ...state,
        isBlured: true,
      }
    default:
      return state
  }
}

const initialState = {
  value: '',
  isValid: false,
  isBlured: false,
}

const Input = ({
  element,
  id,
  onInput,
  type,
  placeholder,
  rows,
  errorText,
  validators,
}) => {
  const [state, dispatch] = useReducer(inputReducer, initialState)

  const { value, isValid } = state

  useEffect(() => {
    onInput(id, value, isValid)
  }, [id, value, isValid, onInput])

  const changeHandler = (e) => {
    dispatch({
      type: 'CHANGE',
      inputValue: e.target.value,
      validators: validators,
    })
  }

  const blurHandler = () => {
    dispatch({
      type: 'BLUR',
    })
  }

  return (
    <div>
      {element === 'input' ? (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={changeHandler}
          value={state.value}
          onBlur={blurHandler}
        />
      ) : (
        <textarea
          id={id}
          rows={rows || 3}
          placeholder={placeholder}
          onChange={changeHandler}
          value={state.value}
          onBlur={blurHandler}
        />
      )}

      {!state.isValid && state.isBlured && <p>{errorText}</p>}
    </div>
  )
}

export default Input
