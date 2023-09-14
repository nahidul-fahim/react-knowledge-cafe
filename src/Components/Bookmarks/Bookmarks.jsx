import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    console.log(readingTime);
    return (
        <div className='w-full md:w-1/3'>
            <div className='p-7 mb-10 border-[2px] border-[#6047EC] text-3xl font-semibold rounded-lg bg-[#6047ec2e]'>
                <h3 className='text-[#6047EC] text-3xl font-semibold text-center'>Spent time on read: {readingTime} min</h3>
            </div>

            <div className="bg-[#dadada] rounded p-8">
                <h2 className="text-3xl font-semibold mb-10 text-center">Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark
                        key={bookmark.ID}
                        bookmark={bookmark}>
                    </Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object,
    readingTime: PropTypes.number,
};

export default Bookmarks;