import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'

const CreateGroup = () => {
  const navigate = useNavigate();
  const { state } = useLocation()  // state is the groupId gotten passed from the useNavigation hook
  
  const [student, setStudent ] = useState(JSON.parse(sessionStorage.getItem('user')))
  const { user } = student
  const defaultGroupInfo = {
    groupName: "",
    groupDescription:'',
    groupVisibility: true,
    groupProfile: "https://tse1.mm.bing.net/th?id=OIP.QxsVsurnuz5IpPrRtTqJGwHaHa&pid=Api&P=0&h=220",
    groupcreator:user._id,
    groupBackgroundProfile: "https://tse1.explicit.bing.net/th?id=OIP.O4T614rCJAnj7fwRGKTkrAAAAA&pid=Api&P=0&h=220",
  };
  const [isEdit, setIsEdit] = useState(state ? true : false);
  const [group, setGroup] = useState(defaultGroupInfo)

  async function getGroupInfo(){
     const {  data } = await axios.get(`/api/getGroup/${state}`)
     setGroup(data)
  }
   
  useEffect( () => {
      if(isEdit){
         getGroupInfo()
      }
  },[])
  

  const handleGroupInput = (e) => {
    const { name, value } = e.target
    setGroup({ ...group, [name]: value })
  };

   let reader = new FileReader()

  const handleGroupBackgroundProfile = (e) => {
    const { name, files } = e.target
    
     reader.addEventListener('load', e => {
       setGroup({...group, [name]:e.currentTarget.result})
     })

     reader.readAsDataURL(files[0])
  }

  const handleGroupProfilePic = (e) => {
     const { name, files } = e.target
  
     reader.addEventListener('load', e => {
       setGroup({...group, [name]:e.currentTarget.result})
     })

     reader.readAsDataURL(files[0])
  }

  const handleGroupCreationAndUpdate = async (e) => {
    e.preventDefault();
    if(isEdit){
       delete group._id
       const { data } = await axios.put('/api/group/editGroup', group)
       if(data.groupName) navigate(`/home/group/${data._id}`)
    }
    const { data } = await axios.post('/api/createGroup', group)
    if(data.groupName) navigate(`/home/group/${data._id}`)
    else alert(data.msg)
  };
  return (
    <>
      <div className="createGroup">
        <nav>
          <h4>
            <i
              className="fa fa-arrow-left"
              onClick={() => navigate(-1)}
            ></i>
            Create group
          </h4>
          <p>
            <i className="fa fa-users" aria-hidden></i>
          </p>
        </nav>
        <form
          className="createGroupForm"
          // onSubmit={(e) => handleGroupCreationAndUpdate(e)}
          autoComplete="off"
        >
          <p>
            <label htmlFor="">Group name :</label>
            <input
              type="text"
              value={group.groupName}
              name="groupName"
              onChange={handleGroupInput}
              placeholder="Group name ..."
              required
            />
          </p>
          <p>
            <label htmlFor="">Group descrip :</label>
            <textarea
              value={group.groupDescription}
              name="groupDescription"
              onChange={handleGroupInput}
              placeholder="Group description ..."
              required
            ></textarea>
          </p>
          <p>
            <input type="file" id="groupProfilePic" name="groupProfile" onChange={handleGroupProfilePic}/>
            <label htmlFor="groupProfilePic">
              select gp-profile <i className="fa fa-file" aria-hidden></i>
            </label>
          </p>
          <p>
            <input type="file" id="groupBackgroundPic" name="groupBackgroundProfile" onChange={handleGroupBackgroundProfile}/>
            <label htmlFor="groupBackgroundPic">
              select bg-profile <i className="fa fa-file" aria-hidden></i>
            </label>
          </p>
          <div className="Privacy">
            <h4>Privacy</h4>
            <div className="PrivacyOptionsList">
              <div className="Options">
                <input
                  type="radio"
                  value={Boolean(group.groupVisibility)}
                  name="groupVisibility"
                  onChange={handleGroupInput}
                  checked
                />
                <div className="privacyDescription">
                  <h4>public</h4>
                  <p>
                    Everyone on this group including none members can view and
                    react to post
                  </p>
                </div>
              </div>

              <div className="Options">
                <input
                  type="radio"
                  value={Boolean(!group.groupVisibility)}
                  name="groupVisibility"
                  onChange={handleGroupInput}
                />
                <div className="privacyDescription">
                  <h4>private</h4>
                  <p>Only group members can view post and react to them</p>
                </div>
              </div>

              <div className="Options">
                <input
                  type="radio"
                  value={Boolean(group.groupVisibility)}
                  name="groupVisibility"
                  onChange={handleGroupInput}
                />
                <div className="privacyDescription">
                  <h4>secrete</h4>
                  <p>Only admins can view post</p>
                </div>
              </div>
            </div>
          </div>
          <div className="groupButtons">
            <button
              className="cancel"
              onClick={() => setGroup(defaultGroupInfo)}
              type="button"
            >
              Cancel
            </button>
            <button className="create" type="button" onClick={ handleGroupCreationAndUpdate}>
              {isEdit ? "Edit" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateGroup;
