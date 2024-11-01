import React, { useRef, useState } from 'react'
import ChatBody from '../../components/chat_body'

export type Message = {
  content: string
  client_id: string
  username: string
  room_id: string
  type: 'recv' | 'self'
}

const Index = () => {
  const [messages, setMessage] = useState<Array<Message>>([
    {
      content: 'hello1',
      client_id: '1',
      username: 'user1',
      room_id: '1',
      type: 'self',
    },
    {
      content: 'hello2',
      client_id: '2',
      username: 'user2',
      room_id: '1',
      type: 'recv',
    }
  ])
  const textarea = useRef<HTMLTextAreaElement>(null)


  const sendMessage = () => {
    
  }
  
  return (
    <>
      <div className='flex flex-col w-full'>
        <div className='p-4 md:mx-6 mb-14'>
          <ChatBody data={messages} />
        </div>
        <div className='fixed bottom-0 mt-4 w-full'>
          <div className='flex md:flex-row px-4 py-2 bg-grey md:mx-4 rounded-md'>
            <div className='flex w-full mr-4 rounded-md border border-blue'>
              <textarea
                ref={textarea}
                placeholder='type your message here'
                className='w-full h-10 p-2 rounded-md focus:outline-none'
                style={{ resize: 'none' }}
              />
            </div>
            <div className='flex items-center'>
              <button
                className='p-2 rounded-md bg-blue text-white'
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index