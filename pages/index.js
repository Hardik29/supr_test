import SuprSendInbox from '@suprsend/react-inbox'
import { useState, useEffect } from 'react';

export default function Home() {
  const [window, setWindow] = useState(false)

  useEffect(() => {
    setWindow(true)
  }, [])
  
  return (
    <>
    {window && 
    <SuprSendInbox
      workspaceKey="h56viah2ngCZspePqTzQ"
      subscriberId="i_AppkoV2IoWaFITPJaG1jpkW85p1oNU2z8K77foWS8"
      distinctId="hg@gmail.com"
    />
    }
    </>
  );
}
