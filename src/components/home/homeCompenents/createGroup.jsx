import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateGroup = () => {
  const navigate = useNavigate();
  const defaultGroupInfo = {
    groupName: "",
    groupDescription: "",
    groupVisibility: true,
    groupProfile: "",
    groupBackgroundProfile: "",
  };
  const [edit, setEdit] = useState(false);
  const [group, setGroup] = useState(defaultGroupInfo)
  const [profileblob, setProfileblob] = useState([])

  const handleGroupInput = (e) => {
    const { name, value } = e.target
    setGroup({ ...group, [name]: value })
  };

  const handleGroupeCreationAndUpdate = (e) => {
    e.preventDefault();
    console.log(group);
  };
  return (
    <>
      <div className="createGroup">
        <nav>
          <h4>
            {" "}
            <i
              className="fa fa-arrow-left"
              onClick={() => navigate(-1)}
            ></i>{" "}
            Create group
          </h4>
          <p>
            <i className="fa fa-users" aria-hidden></i>
          </p>
        </nav>
        <form
          className="createGroupForm"
          onSubmit={handleGroupeCreationAndUpdate}
          autoComplete="off"
        >
          <p>
            {" "}
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
            {" "}
            <input type="file" id="groupProfilePic" required />{" "}
            <label htmlFor="groupProfilePic">
              select gp-profile <i className="fa fa-file" aria-hidden></i>
            </label>
          </p>
          <p>
            {" "}
            <input type="file" id="groupBackgroundPic" required/>{" "}
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
            <button className="create" type="submit">
              {edit ? "Edit" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateGroup;
