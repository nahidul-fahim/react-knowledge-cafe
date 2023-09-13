import PropTypes from 'prop-types';
import { FaBookmark  } from 'react-icons/fa';

const Blog = ({blog}) => {
    const {title, tags, cover_img, author_img, author_name, posted_date, reading_time} = blog;
    return (
        <div className='space-y-4 mb-[70px]'>
            <img src= {cover_img} alt= {`Cover image - ${title}`} className='rounded mb-5'/>
            <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center gap-x-4'>
                    <div>
                        <img src= {author_img} alt="" className='w-[60px] h-[60px]'/>
                    </div>
                    <div>
                        <h5 className='text-[17px] md:text-xl font-semibold'> {author_name} </h5>
                        <h6 className='text-[15px] text-[gray]'>{posted_date}</h6>
                    </div>
                </div>

                <div>
                    <p className='text-[15px] text-[gray]'>{reading_time} min read <button className='ml-4 my-auto text-base text-[#6047ec]'> <FaBookmark ></FaBookmark> </button> </p>
                </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold"> {title} </h2>
            <p className='text-[15px] text-gray-500'> {tags.map((tag, idx) => <span key={idx}> <a href="">{tag}</a></span>)
            } </p>
            <button className='text-[#6047ec] font-semibold underline decoration-solid'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
};

export default Blog;