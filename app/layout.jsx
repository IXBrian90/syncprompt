import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

// Define metadata
export const metadata = {
  title: "SyncPrompt",
  description: "Discover & Share AI Prompts",
};

// Define RootLayout component
const RootLayout = ({ children }) => (
  <html lang='en'>
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
);

export default RootLayout;