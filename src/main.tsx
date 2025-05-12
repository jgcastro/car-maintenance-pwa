import React, { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider, Loader, Center } from '@mantine/core'
import { theme } from './styles/theme.ts'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './config/i18n.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={
      <Center style={{ height: '100vh', width: '100vw' }}>
        <Loader size="xl" />
      </Center>
    }>
      <MantineProvider theme={theme} defaultColorScheme="auto">
        <App />
      </MantineProvider>
    </Suspense>
  </StrictMode>,
)
