import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
       <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
       </div>
       <div className={`chat-bubble text-white bg-red-400 pb-2`}>Hi! what's up?</div>
       <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>7.52 pm</div>
    </div>
  )
}

export default Message