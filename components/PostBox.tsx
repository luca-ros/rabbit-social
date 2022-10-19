import { useSession } from 'next-auth/react'
import React from 'react'
import Avatar from './Avatar'

function PostBox() {
    const { data: session } = useSession()

    return (
        <form>
            <div className='flex items-center space-x-3'>
                <Avatar />

                <input
                    disabled={!session}
                    className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
                    type="text"
                    placeholder={session ? 'Créez une publication en saisissant votre titre' : 'Connectez-vous pour publier'}

                />
            </div>
        </form>
    )
}

export default PostBox