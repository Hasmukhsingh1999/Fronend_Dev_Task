

import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'



const ClientProviders = ({ children }) => {

  const [client] = useState(new QueryClient())

  return (
    <>
      <QueryClientProvider client={client}>
        {children}
      </QueryClientProvider>
    </>
  )
}

export default ClientProviders