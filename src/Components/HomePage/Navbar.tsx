function Navbar(){
    return(
        <>
        <div className="w-full bg-slate-800 h-14 justify-items-start space-x-16 space-y-6 text-white" >
            <div className="sticky top-0 left-0 visible-xs">
                <div className="cursor-pointer inline-block w-auto m-0 transition-all duration-700 ease-in" id="btn">
                    <div className="transition-all  duration-700 ease-in-out block h-5px w-50px bg-oran mt-2.5 mb-2.5 ml-2.5 mr-2.5  top"></div>
                    <div className="transition-all  duration-700 ease-in-out block h-5px w-50px bg-oran mt-2.5 mb-2.5 ml-2.5 mr-2.5  middle"></div>
                    <div className="transition-all  duration-700 ease-in-out block h-5px w-50px bg-oran mt-2.5 mb-2.5 ml-2.5 mr-2.5  bottom"></div>
                </div>
            </div>
            <a className="relative top-44 p-7 rounded left-5 bg-slate-500" href="#">Home</a>
            <a className="relative top-44 p-7 rounded bg-slate-500" href="#">Login</a>
            <a className="relative top-44 p-7 rounded bg-slate-500" href="#">Signup</a>
        </div>
        {/* <div className="h-full w-400px top-0 right-0 z-1 bg-oran ">
            <ul className="sidebar-list">
                <li className="sidebar-item"><a href="#" className="sidebar-anchor">Item 1</a></li>
                <li className="sidebar-item"><a href="#" className="sidebar-anchor">Item 2</a></li>
                <li className="sidebar-item"><a href="#" className="sidebar-anchor">Item 3</a></li>
                <li className="sidebar-item"><a href="#" className="sidebar-anchor">Item 4</a></li>
            </ul>
        </div> */}
        </>
    );
}
export default Navbar;
