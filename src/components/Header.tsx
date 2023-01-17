import './style.scss'
function Header() {
    return (
        <div className='root test'>

            <div className="w-20 h-15 text-purple-900">
                <img src="header_icon/frame.svg" alt="swell"/>
            </div>
            <div className="flex gap-x-12">
                <p>Why Swell?</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>Resources</p>
            </div>

            <div className="flex gap-x-6 items-center">
                <p>Start free trial </p>
                <button className="w-20 h-10 items-center rounded-sm border border-indigo-600">Log in</button>
            </div>


        </div>
    )
}
export default Header;