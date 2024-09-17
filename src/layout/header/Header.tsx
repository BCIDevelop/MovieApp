import bell from '../../assets/bell.svg'
import search from '../../assets/search.svg'
import  './header.css'
const Header = () => {
    function handleClick(e:React.MouseEvent<HTMLAnchorElement>){
        const anchors = document.querySelectorAll('.element__anchor')
        anchors.forEach(element=>{
            if (element != e.currentTarget) {
                element.classList.remove('element__anchor--active')
            }
        })
        e.currentTarget.classList.add('element__anchor--active')

    }

  return (
    <header className="header">
      <nav className="header__nav nav">
        <ul className="nav__list lists">
            <li className="lists__element element"> <a onClick={handleClick} className='element__anchor element__anchor--active' href="#">Home</a> </li>
            <li className="lists__element element"><a onClick={handleClick} className='element__anchor' href="#">Genre</a></li>
            <li className="lists__element element"><a onClick={handleClick} className='element__anchor' href="#">Country</a></li>
            <div className="lists__search search-input">
                <input className='search-input__input' placeholder='Search Movies...' type="search" />
                <img className='search-input__image' src={search} alt="Search image" />

            </div>
            <li className="lists__element element"><a onClick={handleClick} className='element__anchor' href="#">Movies</a></li>
            <li className="lists__element element"><a onClick={handleClick} className='element__anchor' href="#">Series</a></li>
            <li className="lists__element element"><a onClick={handleClick} className='element__anchor' href="#">Anination</a></li>
            <li className="lists__element element"><a onClick={handleClick} className='element__anchor' href="#">Login/Signup</a></li>
            <img className='lists__bell' src={bell} alt="Notification bell" />
        </ul>
      </nav>
    </header>
  )
}

export default Header
