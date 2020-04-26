import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
    const users = [
        {
            id: 'u1',
            image: '',
            name: 'سید جواد',
            posts: 5
        },
        {
            id: 'u2',
            image: '',
            name: 'مهدیار',
            posts: 9
        }
    ]

    return (
        <UsersList items={users} />
    )
}

export default Users
