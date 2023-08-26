import { useNavigate } from 'react-router-dom'
const ProfileUpdate = () => {
  const navigate = useNavigate()
  return <>
        <div className="Update_profile">
          <nav> <i className="fa fa-arrow-left" onClick={() => navigate(-1)}></i></nav>
             <div className="update_list">

                <p className="profile_info">
                   <img src="esutlogo.jpg" alt="esutlogo"/>
                </p>

                 <p>
                   <span>Username :</span> 
                   <input type="text" value="Dilan Besong"/>
                   <i className=" fa fa-user-o" aria-hidden="true"></i>
                  </p>

                 <p>
                   <span >Email address :</span> 
                   <input type="email" value="besongdilan@gmail.com"/>
                   <i className="fa fa-envelope" aria-hidden="true"></i>
                  </p>

                <p>
                   <span>Reg number :</span> 
                   <input type="text" value="2019030187292" maxLength={13}/>
                   <i className="fa fa-code" aria-hidden="true"></i>
                  </p>

                 <p>
                   <span>Background profile :</span> 
                   <input  type="file" id="file"/> 
                   <i className="fa fa-picture-o" aria-hidden="true"></i>
                  </p>

                <p>
                  <span>Profile picture :</span>
                   <input  type="file" id="file"/> 
                  <i className="fa fa-file-image-o" aria-hidden="true"></i>
                </p>

                <p>
                  <span>Student Level :</span> 
                  <input type="text" readOnly value="500"/>
                   <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                </p>

                <p>
                  <span>Phone Number :</span> 
                  <input type="tel" value="0706872214"/> 
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </p>

                <p>
                  <span>Nickname :</span> 
                  <input type="text" value="@DilanBesong"/>
                  <i className=" fa fa-user-md" aria-hidden="true"></i>
                </p>

                <p><button>Edit <i className="fa fa-edit"></i></button></p>
             </div>   
        </div> 
   </>
}

export default ProfileUpdate