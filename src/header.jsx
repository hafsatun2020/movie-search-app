import TV from './images/tv.png'
import Menu from './images/Menu.png'
import Icon from './images/Icon.png'
export default function Header(props) {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src={TV} id="tv-logo" alt="tvlogo" />
                    <h2>Movie Box</h2>
                </div>
                <div className="search">
                    <input type="search" data-testid="searchBtn" id="search-box" name="searchBox" placeholder="What do you want to watch..." />
                    <img src={Icon} alt='search icon' className='icon' />
                </div>
                <div className="menu">
                    <a href="#">Sign in</a>
                    <img src={Menu} alt="menulogo" id="menu-bars" />
                </div>

            </div>

            <div className="description-box">
                <h1>John Wick 3 : Parabellum</h1>
                <p>John Wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                <button type="button">Watch Trailer</button>
            </div>
        </>
    )
}