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
      workspaceKey="yI0TFemFuUGi4PjH6VbY"
      subscriberId="YjkjWSIIDYNovMtV5gXf_3JIdn2o4vrbix9mtyTw2yA"
      distinctId="hg@gmail.com"
    />
    }
    </>
  );
}
