import React from 'react'
import Input from '../../shared/components/formElements/Input'

const NewPost = () => {
  return (
    <div>
      <form>
        <Input element='input' type='text' placeholder='عنوان پست...' />
      </form>
    </div>
  )
}

export default NewPost
