// components/AlertDialog.js
import { useState } from 'react'

interface AlertDialogProps {
  title: string
  message: string
}

const AlertDialog = ({ title, message }: AlertDialogProps) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => {
    setIsOpen(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="mb-6">{message}</p>
        <div className="text-right">
          <button
            className="px-4 py-2 bg-pink-700 text-white rounded-md hover:bg-pink-900"
            onClick={handleClose}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

export default AlertDialog
