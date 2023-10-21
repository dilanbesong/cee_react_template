import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { BASEURL } from "../../../baseUrl";
const ProfileUpdate = () => {
  const { state } = useLocation() // userId
  
  const navigate = useNavigate();
  const [student, setStudent] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const { user } = student;
  const [profileInfo, setProfileInfo] = useState({
    username: user.username,
    email: user.email,
    backgroundProfile:user.backgroundProfile,
    profileImage:user.profileImage,
    level:user.level,
    regNumber:user.regNumber,
    PhoneNumber:user.PhoneNumber
  });
  const [loading, setLoading ] = useState(true)

  const handleProfileEdit = (e) => {
    const { value, name } = e.target.value
    setProfileInfo(profileInfo => {
      return {...profileInfo, [name]:value }
    })
  }
  async function getUser() {
     const { data } = await axios.get(`${BASEURL}/user/${state}`)
     if(data.email){
       setLoading(false)
       setProfileInfo(data)
       return
     }
    return
  }

  useEffect(() => {
     getUser()
  },[])

   const reader = new FileReader()

  const handleProfileImage = (e) => {
    const { name } = e.target
     reader.readAsDataURL(e.target.files[0])
     reader.addEventListener('load', e => {
        setProfileInfo( profileInfo => {
           return {...profileInfo, [name]:e.target.result}
        })
     })
  }

  const handleBackgroundProfile = (e) => {
     const { name } = e.target
     reader.readAsDataURL(e.target.files[0])
     reader.addEventListener('load', e => {
        setProfileInfo( profileInfo => {
           return {...profileInfo, [name]:e.target.result}
        })
        console.log(profileInfo);
     })
  }

  const handleEdit = async () => {
    const { data }  = await axios.put(`${BASEURL}/editProfile`, profileInfo)
    sessionStorage.setItem('user', JSON.stringify(data))
    setProfileInfo(data.user)
  }

   const handleDeleteAccount = async (userId) => {
    const isConfirm = confirm('Are you sure you want to delete this account !')
    if(isConfirm){
      const { data } = await axios.delete(`${BASEURL}/adminPanel/deleteOneUser/${userId}`)
      if( data.isDelete){
        alert('This accpunt has been deleted from this plateform .....')
        navigate('/home/admin')
      }
      return
    }
    return
  }

  return (
    <>
     { loading ? <div className="centerLoad"> <ThreeDots color="brown"/></div> :  <div className="Update_profile">
        <nav>
          {" "}
          <i className="fa fa-arrow-left" onClick={() => navigate(-1)}></i>
        </nav>
        <div className="update_list">
          <p className="profile_info">
            <img src={profileInfo.profileImage} alt="profile.jpg" />
          </p>

          <p>
            <span>Username :</span>
            <input type="text" name="username" onChange={handleProfileEdit} value={profileInfo.username} />
            <i className=" fa fa-user-o" aria-hidden="true"></i>
          </p>

          <p>
            <span>Email address :</span>
            <input type="email" name="email" onChange={handleProfileEdit} readOnly={ user.isAdmin ? false : true } value={profileInfo.email} />
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </p>

          <p>
            <span>Reg number :</span>
            <input type="text" name="regNumber"  onChange={handleProfileEdit} readOnly={ user.isAdmin ? false : true } value={profileInfo.regNumber} maxLength={13} />
            <i className="fa fa-code" aria-hidden="true"></i>
          </p>

          <p>
            <span>Background profile :</span>
            <input type="file" name="backgroundProfile" onChange={handleBackgroundProfile} id="file" />
            <i className="fa fa-picture-o" aria-hidden="true"></i>
          </p>

          <p>
            <span>Profile picture :</span>
            <input type="file" name="profileImage" onChange={handleProfileImage} id="file" />
            <i className="fa fa-file-image-o" aria-hidden="true"></i>
          </p>

          <p>
            <span>Student Level :</span>
            <input type="text" name='level' onChange={handleProfileEdit} readOnly={ user.isAdmin ? false : true } value={profileInfo.level} />
            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
          </p>

          <p>
            <span>Phone Number :</span>
            <input type="tel" name="phoneNumber" onChange={handleProfileEdit} value={profileInfo.PhoneNumber} />
            <i className="fa fa-phone" aria-hidden="true"></i>
          </p>

          <p>
            <span>Nickname :</span>
            <input type="text" value={profileInfo.email} />
            <i className=" fa fa-user-md" aria-hidden="true"></i>
          </p>

          <p>
            <button onClick={handleEdit}>
              Edit <i className="fa fa-edit"></i>
            </button>
            {
              user.isAdmin 
              &&
              <button onClick={ () => handleDeleteAccount(state) }>
                 delete <i className="fa fa-trash"></i>
              </button>
            }
          </p>
        </div>
      </div> }
    </>
  );
};

export default ProfileUpdate;
