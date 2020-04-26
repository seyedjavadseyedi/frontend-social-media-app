import React from 'react'
import PostList from '../components/PostList'
import {useParams} from 'react-router-dom'

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
    const userId = useParams().userId
    const userPosts = posts.filter(userPost => userPost.creator === userId)
    return (
        <PostList items={userPosts} />
    )
}

export default UserPosts
