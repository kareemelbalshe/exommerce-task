import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <>
      <div className="bg-black text-white">
        <div className="flex justify-around items-start px-28 py-3">
        <div className="flex flex-1 flex-col gap-1 items-start">
        <h1 className='h11'>Exclusive</h1>
        <h2>subscribe</h2>
        <p>get 10% off that order</p>
        <div className="relative">
        <input className='bg-black text-slate-400 border-2 border-slate-50 outline-none rounded-sm py-1 px-3' placeholder='Enter your email' />
        <SendIcon className='absolute right-2 top-1/2 -translate-y-1/2 text-white' />
        </div>
        </div>
        <div className="flex-1">
          <h1 className='h11'>support</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorum.</p>
          <p>example@gmail.com</p>
          <p>+1 (123) 456 7890</p>
        </div>
        <div className="flex-1">
          <h1 className='h11'>help</h1>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Sign Up</a>
          </li>
        </ul>
        </div>
        <div className="flex-1">
          <h1 className='h11'>about</h1>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Sign Up</a>
          </li>
        </ul>
        </div>
        <div className="flex-1">
          <h1 className='h11'>download app</h1>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorum.</p>
          <div className="">
            <img src="" alt="" />
            <div className="">
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
            <ul className='flex gap-2'>
              <li><FacebookIcon /></li>
              <li><InstagramIcon /></li>
              <li><LinkedInIcon /></li>
            </ul>
          </div>
        </div>
        </div>
        <hr />
        <div className="py-5 text-center bg-black text-white">
            <p className="text-center">© 2024 Exclusive</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
