

const SearchPost = () => {
  
   return <>
        <div className="View_search">
            <nav className="search_nav">
              <div> <h4>Find</h4> </div>
              <div> 
                <i className="fa fa-search" aria-hidden="true"></i>
                <input type="search" placeholder="find groups/friends"/>
               </div>
              </nav>
              <div className="searchList">

                   <article className='searchcard'>
                     <div className="searchNameIconContainer">
                         <i className="fa fa-search"></i>
                         <span>John Doe</span>
                     </div>
                     <div className="searchImageArrow">
                        <small>user</small>
                         <img src="" alt="" />
                         <i className="fa fa-arrow-up"></i>
                     </div>
                   </article>

                    <article className='searchcard'>
                     <div className="searchNameIconContainer">
                         <i className="fa fa-search"></i>
                         <span> IEEE</span>
                     </div>
                     <div className="searchImageArrow">
                        <small>group</small>
                         <img src="" alt="" />
                         <i className="fa fa-arrow-up"></i>
                     </div>
                   </article>

                    <article className='searchcard'>
                     <div className="searchNameIconContainer">
                         <i className="fa fa-search"></i>
                         <span>Paul Hermen</span>
                     </div>
                     <div className="searchImageArrow">
                        <small>friend</small>
                         <img src="" alt="" />
                         <i className="fa fa-arrow-up"></i>
                     </div>
                   </article>

             
              </div>
        </div> 
   </>               
}

export default SearchPost