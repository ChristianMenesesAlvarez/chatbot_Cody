import { useState, useEffect, useRef } from 'react'
import { postUser } from '../service/api.js'
import { ToothIcon } from '../assets/ToothIcon.jsx'
import { Message } from './Message.jsx'
import { IconButton, List, ListItem, ListItemAvatar, ListItemText, Box, InputBase, CircularProgress } from '@mui/material'
import { AccountCircle, MoreHoriz, NearMeOutlined } from '@mui/icons-material'

export function Screen() {
  const [isDisabled, setDisabled] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [messages, setMessages] = useState([])
  const messagesEnd = useRef(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (userInput == '') return
    if (isDisabled === false) {
      const userMessage = { type: 'user', content: userInput }
      setMessages((prevMessages) => [...prevMessages, userMessage])
      document.getElementById('input-form').reset()
      setDisabled(true)
      const response = await postUser(userInput)
      setUserInput('')
      setMessages((prevMessages) => [...prevMessages, response])
      return setDisabled(false)
    } else return
  }

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages])

  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', flexFlow: 'column nowrap' }}>
      <List className='message-display' style={{ height: '100%' }}>
        {messages.map((msg, ind) =>
          <ListItem
            key={ind}
            ref={ind == messages.length - 1 ? messagesEnd : null}
            alignItems='flex-start'
            style={{
              background: msg.type == 'user' ? '#343541' : '#444654',
              color: 'white',
              padding: '1%',
            }}
          >
            <ListItemAvatar style={{ minWidth: 'auto', paddingRight: '15px', marginTop: '4px' }}>
              {msg.type == 'user' ? <AccountCircle /> : <ToothIcon />}
            </ListItemAvatar>
            <ListItemText>
              <Message shouldType={msg.type == 'answer'} text={msg.content} />
            </ListItemText>
          </ListItem>
        )}
      </List>

      <Box component='form' id='input-form' onSubmit={handleSubmit}
        style={{ display: 'flex', flexFlow: 'row nowrap', background: '#343541' }}>
        <InputBase
          placeholder='Send a message.'
          inputProps={{ 'aria-label': 'write a message' }}
          onChange={e => setUserInput(e.target.value)}
          style={{ width: '100%', color: 'white', paddingInlineStart: '10px' }}
        />
        <IconButton type='submit' aria-label='send'>
          {isDisabled ? <CircularProgress htmlColor='white' /> : <NearMeOutlined htmlColor='white' />}
        </IconButton>
      </Box>
    </div>
  )
}