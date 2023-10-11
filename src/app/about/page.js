import React from 'react'
import Button from '../components/btn'

export default function About(props) {
const abc = true

if (abc === true) return <div className='mt-4 mx-auto text-7xl text-blue-900'>ABC TRUE</div>
    return <>
        <div className='mt-4 mx-auto text-7xl text-blue-900'>About</div>
        <Button type="link" href=".." className="btn-primary-sm">Back</Button>
    </>
}