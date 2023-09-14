import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-full md:w-1/3 bg-[#dadada] rounded p-8">
            <h2 className="text-3xl font-semibold mb-10 text-center">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark
                key = {bookmark.ID}
                bookmark = {bookmark}>
                </Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object,
};

export default Bookmarks;