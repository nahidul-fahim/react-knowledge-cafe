import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  return (
    <>
      <Header>

      </Header>

      <div className='container mx-auto p-5 flex md:flex-row flex-col gap-x-12 justify-start md:justify-between items-start'>
        <Blogs handleAddToBookmark= {handleAddToBookmark}>

        </Blogs>

        <Bookmarks bookmarks={bookmarks}>

        </Bookmarks>
      </div>
    </>
  )
}

export default App;
