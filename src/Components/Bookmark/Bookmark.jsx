import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const {title} = bookmark;
    return (
        <div className='mt-8 p-5 bg-[#e9e9e9] rounded-lg'>
            <div className=''>
                <h3 className='text-xl font-semibold'>{title}</h3>
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object,
};

export default Bookmark;