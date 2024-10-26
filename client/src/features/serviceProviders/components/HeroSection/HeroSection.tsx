import { Link } from 'react-router-dom';
import styles from './HeroSection.module.scss';
import SearchProviders from '../../../../components/Navbar/components/SearchProviders/SearchProviders';
import { Typewriter } from 'react-simple-typewriter';
import { IoMdStar } from 'react-icons/io';
import { HiWrenchScrewdriver } from 'react-icons/hi2';
import { PiUsersThreeFill } from 'react-icons/pi';
import { ImCheckboxChecked } from 'react-icons/im';

export default function HeroSection() {
    return (
        <header className={styles.hero}>
            <div className='container'>
                <div className={styles.heroSection}>
                    <div className={styles.col}>
                        <h1>Your partner in finding <br />
                            <Typewriter
                                words={['Mechanic', 'Electrician', 'Detailer', 'Body Specialist']}
                                loop={true}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h1>
                        <ul className={styles.heroNav}>
                            <li className={styles.active}>Hire A Pro</li>
                            <li><Link to='/auth/register'>Find customers</Link></li>
                        </ul>
                        <SearchProviders />
                        <div className={styles.msg}>
                            <div className={styles.dot}></div>
                            <div className={styles.dot}></div>
                            <div className={styles.dot}></div>
                            <div className={styles.thought}>We only provide best service providers</div>
                        </div>
                    </div>
                    <div className={styles.col}>
                        Image
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <div className="container">
                    <div className={styles.stats}>
                        <div className={styles.rating}>
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <IoMdStar />
                            ))}
                            <span>8.474</span> Reviews
                        </div>
                        <div className={styles.serviceProvider}>
                            <HiWrenchScrewdriver />
                            <span>8.474</span> Service Providers
                        </div>
                        <div className={styles.customers}>
                            <PiUsersThreeFill />
                            <span>8.474</span> Customers
                        </div>
                        <div className={styles.appointments}>
                            <ImCheckboxChecked />
                            <span>8.474</span> Appointments
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
