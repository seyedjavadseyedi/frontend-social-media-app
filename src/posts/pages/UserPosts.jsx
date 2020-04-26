import React from 'react'
import PostList from '../components/PostList'

const posts = [
    {
        id: 'p1',
        image: '',
        title: 'عنوان پست ۱',
        description: 'توضیحات پست ۱',
        creator: 'u1'
    },
    {
        id: 'p2',
        image: '',
        title: 'عنوان پست ۲',
        description: 'توضیحات پست ۲',
        creator: 'u2'
    }
]

const UserPosts = () => {
    return (
        <PostList items={posts} />
    )
}

export default UserPosts
