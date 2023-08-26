import { useNavigate } from "react-router-dom";

const CreateGroup = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="createGroup">
        <nav>
          <h4> <i className="fa fa-arrow-left" onClick={() => navigate(-1)}></i>    Create group</h4>
          <p>
            <i className="fa fa-users" aria-hidden></i>
          </p>
        </nav>
        <form className="createGroupForm">
          <p>
            {" "}
            <label htmlFor="">Group name :</label>
            <input type="text" placeholder="Group name ..." />
          </p>
          <p>
            <label htmlFor="">Group descrip :</label>
            <textarea name="" placeholder="Group description ..."></textarea>
          </p>
          <div className="Privacy">
            <h4>Privacy</h4>
            <div className="PrivacyOptionsList">
              <div className="Options">
                  <input type="radio" name="a" checked />
                <div className="privacyDescription">
                  <h4>public</h4>
                  <p>
                    Everyone on this group including none members can view and react to post
                  </p>
                </div>
              </div>

              <div className="Options">
                  <input type="radio" name="a" />
                <div className="privacyDescription">
                  <h4>private</h4>
                  <p>
                    Only group members can view post and react to them
                  </p>
                </div>
              </div>

              <div className="Options">
                  <input type="radio" name="a"  />
                <div className="privacyDescription">
                  <h4>secrete</h4>
                  <p>
                    Only admins can view post
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className="groupButtons">
                  <button className="cancel">Cancel</button>
                  <button className="create">Create</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateGroup;
