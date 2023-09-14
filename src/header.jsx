import TV from './images/tv.png'
import Menu from './images/Menu.png'
import './index.css'
export default function Header() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src={TV} id="tv-logo" alt="tc logo"/>
                    <h2>Movie Box</h2>
                </div>
                <div className="search">
                    <input type="search" data-testid="searchBtn" id="search-box" name="searchBox" placeholder="What do you want to watch..." />
                    <button type="submit" id="search-btn" ><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className="menu">
                    <a href="#">Sign in</a>
                    <img src={Menu} id="menu-bars" alt="MENU LOGO" />
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