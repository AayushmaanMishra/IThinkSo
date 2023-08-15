import '@styles/globals.css';
import { Children } from 'react';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: 'IThinkSo',
    description: 'Share Your opinion'
}

const RootLayout = ({children}) => {
  return (
    <html Lang='eng'>
        <body>
            <Provider>
            <div className='main'>
                <div className='gradient' />
            </div>
            <main className='app'>
                <Nav />
                {children}
            </main>
            </Provider>
        </body>

    </html>
  )
}

export default RootLayout