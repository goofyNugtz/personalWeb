import { SiMailDotRu } from 'react-icons/si'
import { FaGithub, FaFacebookF, FaLinkedinIn, FaDev } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Button from './Button/Button'

const Header:React.FC = () => {
    return (
        
        <div className='header' id='header'>
            <div className='intro'>
            <span>Hello,</span>
            <h1>I’m Rahul</h1>
            </div>
            <div className='subtitle'>
                A Developer and Front-End enthusiast
                <br/>
                <div className='grid-2x2'>
                    <span className='emoticon'>🚀</span>
                    <span>Exploring opportunities </span>
                    <span className='emoticon'>🎓</span>
                    <span>Freshman year undergrad from National Institute of Technology, Durgapur.</span>
                </div>
            </div>
            {/* <p>I am freshman year undergrad from National Institute of Technology, Durgapur. I'm currently interested in Web Development, Web Designs (UI/UX) and also <a 
            className='' href="https://www.stopstalk.com/user/profile/goofyNugtz" target="_blank" rel="noreferrer">Competitive Programing</a> but rarely.</p> */}
            {/* <Button /> */}
            <div className='contact-buttons'>
                <button>
                    <FaGithub className='icon'/> Github
                </button>
                <button>
                    <FaLinkedinIn className='icon'/> LinkedIn
                </button>
                <button>
                    <MdEmail className='icon'/> Email
                </button>
            </div>
            
        </div>
    )
}

export default Header