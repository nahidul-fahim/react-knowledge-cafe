import profileImage from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='container mx-auto p-5'>
            <div className='flex justify-between items-center border-b-[1px] border-[rgba(17, 17, 17, 0.15)] pb-4'>
                <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
                <img src={profileImage} alt="profile image"/>
            </div>
        </div>
    );
};

export default Header;