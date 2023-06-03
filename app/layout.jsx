import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/global.css";

export const metadata = {
    title: "",
    description: "Discover and share prompts"
};

const RootLayout = ({ children }) => (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
  
          <main className='app'>
            <Nav/>
            {children}
          </main>
          </Provider>
      </body>
    </html>
  );
  
  export default RootLayout;
