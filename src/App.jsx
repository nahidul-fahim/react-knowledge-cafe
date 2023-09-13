import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {

  return (
    <>
      <Header>

      </Header>

      <div className='container mx-auto p-5 flex md:flex-row flex-col gap-x-12 justify-start md:justify-between items-start'>
        <Blogs>

        </Blogs>

        <Bookmarks>

        </Bookmarks>
      </div>
    </>
  )
}

export default App
