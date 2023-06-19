"use client"
import { queryClient } from '@/lib/queryclient'
import { QueryClientProvider } from '@tanstack/react-query'

import React from 'react'

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient} >
      {children}
    </QueryClientProvider>
  )
}

export default RootLayout