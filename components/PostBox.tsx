import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import Avatar from './Avatar'
import { LinkIcon, PhotographIcon } from '@heroicons/react/outline'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { ADD_POST } from '../graphql/mutations'

type FormData = {
    postTitle: string
    postBody: string
    postImage: string
    subrabbit: string
}

function PostBox() {
    const { data: session } = useSession()
    const [addPost] =useMutation(ADD_POST)

    const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false)
    const {
        register,
        setValue,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>()

    const onSubmit = handleSubmit(async (formData) => {
        try {
            

        } catch (errors) {

        }
    })

    return (
        <form onSubmit={onSubmit} className='sticky top-16 z-50 rounded-md border border-gray-300 bg-white p-2'>
            <div className='flex items-center space-x-3'>
                <Avatar />

                <input
                    {...register('postTitle', { required: true })}
                    disabled={!session}
                    className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
                    type="text"
                    placeholder={
                        session ? 'Créez une publication en saisissant votre Titre' : 'Connectez-vous pour publier'
                    }
                />

                <PhotographIcon onClick={() => setImageBoxOpen(!imageBoxOpen)} className={`h-6 cursor-pointer text-gray-300 ${imageBoxOpen && 'text-blue-300'}`} />
                <LinkIcon className='h-6 text-gray-300' />
            </div>

            {/* searchBar Filtering */}
            {!!watch('postTitle') && (
                <div className='flex flex-col p-y-2'>
                    {/* Bodybox */}
                    <div className='flex items-center px-2'>
                        <p className='min-w-[90px]'>Body:</p>
                        <input
                            className='m-2 flex-1 bg-blue-50 p-2 outline-none'
                            {...register('postBody')}
                            type="text"
                            placeholder='Texte (facultatif)'
                        />
                    </div>

                    <div className='flex items-center px-2'>
                        <p className='min-w-[90px]'>Subrabbit:</p>
                        <input
                            className='m-2 flex-1 bg-blue-50 p-2 outline-none'
                            {...register('subrabbit', { required: true })}
                            type="text"
                            placeholder='Next.js'
                        />
                    </div>

                    {imageBoxOpen && (
                        <div className='flex items-center px-2'>
                            <p className='min-w-[90px]'>Image URL:</p>
                            <input
                                className='m-2 flex-1 bg-blue-50 p-2 outline-none'
                                {...register('postImage')}
                                type="text"
                                placeholder='facultatif...'
                            />
                        </div>
                    )}

                    {/* Errors */}
                    {Object.keys(errors).length > 0 && (
                        <div className='space-y-2 p-2 text-red-400'>
                            {errors.postTitle?.type === 'required' && (
                                <p>- Un titre de poste est requis</p>
                            )}
                            {errors.subrabbit?.type === 'required' && (
                                <p>- Un titre de poste est requis</p>
                            )}
                        </div>
                    )}

                </div>
            )}

            {!!watch('postTitle') && (
                <button 
                type='submit' 
                className='w-full rounded-full bg-blue-400 p-2 text-white'>Publier le Post
                </button>
            )}
        </form>
    )
}

export default PostBox