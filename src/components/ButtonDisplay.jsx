import { useState } from 'react'
import { Box, ButtonBase, Modal } from '@mui/material'
import { Close } from '@mui/icons-material'

export function ButtonDisplay() {
  const heightToWidthRatio = 1064 / 1864

  const [isModal1Open, setModal1Open] = useState(false)
  const [isModal2Open, setModal2Open] = useState(false)

  const openModal1 = () => setModal1Open(true)
  const closeModal1 = () => setModal1Open(false)
  const openModal2 = () => setModal2Open(true)
  const closeModal2 = () => setModal2Open(false)
  const closeModals = () => {
    setModal1Open(false)
    setModal2Open(false)
  }

  const modalStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-62%)',
    width: window.innerHeight / window.innerWidth > heightToWidthRatio ? '64vw' : '112vh',
    height: window.innerHeight / window.innerWidth > heightToWidthRatio ? '32vw' : '56vh',
    background: 'grey',
    border: '2px solid #000',
    boxSizing: 'border-box',
    color: 'white',
    padding: '10px',
  }

  const logoStyle = {
    position: 'fixed',
    top: window.innerHeight / window.innerWidth > heightToWidthRatio ? 'calc(50vh - 100vw * 0.256)' : '5%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: window.innerHeight / window.innerWidth > heightToWidthRatio ? '1.8vw' : '3.2vh',
    color: '#504c42',
    zIndex: 2,
  }

  const buttonStyle = {
    position: 'fixed',
    top: window.innerHeight / window.innerWidth > heightToWidthRatio ? 'calc(50vh + 100vw * 0.195)' : '84%',
    transform: 'translate(-50%, -50%)',
    fontSize: window.innerHeight / window.innerWidth > heightToWidthRatio ? '1.8vw' : '3.2vh',
    color: '#504c42',
    border: '2px solid #aea79a',
    borderRadius: '20px',
    backgroundColor: '#d4d4c9',
    padding: window.innerHeight / window.innerWidth > heightToWidthRatio ? '0.4vw 1vw' : '0.8vh 1.5vh',
    zIndex: 2,
  }

  return (
    <>
      <ButtonBase
        onClick={closeModals}
        style={logoStyle}>
        WisdomTooth AI
      </ButtonBase>
      <ButtonBase
        onClick={openModal1}
        style={{ ...buttonStyle, left: window.innerHeight / window.innerWidth > heightToWidthRatio ? '21.5%' : 'calc(50vw - 100vh * 0.50)' }}>
        About
      </ButtonBase>
      <ButtonBase
        onClick={openModal2}
        style={{ ...buttonStyle, left: window.innerHeight / window.innerWidth > heightToWidthRatio ? '33%' : 'calc(50vw - 100vh * 0.30)' }}>
        Contact
      </ButtonBase>
      <Modal
        hideBackdrop
        disableEnforceFocus
        open={isModal1Open}
        onClose={null}
        aria-labelledby="About"
        aria-describedby="Information about developers"
      >
        <Box style={modalStyle}>
          <div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'space-between' }}>
            <h2>About us</h2>
            <ButtonBase onClick={closeModal1}>
              <Close />
            </ButtonBase>
          </div>
          <div className='message-display' style={{ height: '100%' }}>
            <p>Welcome to the home of WisdomTooth AI, your dedicated assistant for dentistry and oral surgery.</p>
            <p>Created with a single aim, our AI chatbot is designed to bridge the gap between complex dental terminology for students, doctors, and patients who seek to understand the intricacies of oral health. We envision a world where knowledge about dental procedures, oral hygiene, and oral surgery is easily accessible to all, and this chatbot is our step towards that direction.</p>
            <p>Our AI chatbot leverages the most advanced artificial intelligence and machine learning techniques, trained extensively in the field of dentistry and oral surgery. It is equipped to explain dental procedures, offer differential diagnosis, and even provide educational material to students studying dentistry. It serves as a handy tool for doctors looking to brush up on their knowledge or stay updated with the latest in oral health and surgery.</p>
            <p>For patients, our chatbot can provide explanations about recommended procedures, helping them make more informed decisions about their oral health. It can simplify complex dental terminology into easily understandable language, making your dental journey less daunting.</p>
            <p>Safety and reliability are at the core of our chatbot. It is programmed to provide accurate, up-to-date information. However, it's important to note that while our chatbot is a fantastic resource, it's not a replacement for professional medical advice, diagnosis, or treatment. Always consult a healthcare provider for any questions you may have about a medical condition or treatment.</p>
            <p>Join us on this journey to make dentistry more understandable. Let WisdomTooth AI assist you in your quest to learn more about oral health and surgery.</p>
          </div>
        </Box>
      </Modal>
      <Modal
        hideBackdrop
        disableEnforceFocus
        open={isModal2Open}
        onClose={null}
        aria-labelledby="Contact"
        aria-describedby="Contact information"
      >
        <Box style={modalStyle}>
          <div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'space-between' }}>
            <h2>Contact</h2>
            <ButtonBase onClick={closeModal2}>
              <Close />
            </ButtonBase>
          </div>
          <div className='message-display' style={{ height: '100%' }}>
            <p></p>
          </div>
        </Box>
      </Modal>
    </>
  )
}
