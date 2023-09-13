import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title, tags, cover_img, author_img, author_name, posted_date, reading_time} = blog;
    return (
        <div>
            <img src= {cover_img} alt= {`Cover image - ${title}`} className='rounded'/>
            <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center gap-x-4'>
                    <div>
                        <img src= {author_img} alt="" className='w-[60px] h-[60px]'/>
                    </div>
                    <div>
                        <h5 className='text-xl font-semibold'> {author_name} </h5>
                        <h6 className='text-base text-[gray]'>{posted_date}</h6>
                    </div>
                </div>

                <div>
                    <p className='text-base text-[gray]'>{reading_time} min read</p>
                </div>
            </div>
            <h2 className="text-3xl font-bold"> {title} </h2>
            <p className='text-base text-gray-500'> {tags.map((tag, idx) => <span key={idx}> <a href="">{tag}</a></span> )

            } </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
};

export default Blog;