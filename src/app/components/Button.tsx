import React from 'react'
import { useFormStatus } from 'react-dom'

const Button = ({ label }: { label: string }) => {
  const { pending } = useFormStatus()
  return (
    <button
      className="w-[20%] py-2 rounded-lg bg-pink-700 text-white self-end disabled:bg-pink-400 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {label}
    </button>
  )
}

export default Button
