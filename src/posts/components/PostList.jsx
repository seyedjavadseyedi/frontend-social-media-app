import React from 'react'
import PostItem from './PostItem'

const PostList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div>
        <p>پستی وجود ندارد!</p>
      </div>
    )
  }

  return (
    <div>
      <ul>
        {items.map(({ id, image, title, description, creator }) => (
          <PostItem
            key={id}
            id={id}
            image={image}
            title={title}
            description={description}
            creatorId={creator}
          />
        ))}
      </ul>
    </div>
  )
}

export default PostList
