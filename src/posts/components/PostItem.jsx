import React from 'react'
import Button from '../../shared/components/formElements/Button'


const PostItem = ({ id, image, title, description, creatorId }) => {
  return (
    <li>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
          <Button>حذف پست</Button>
      </div>
    </li>
  )
}

export default PostItem
