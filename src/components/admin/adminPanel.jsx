import "../../styles/admin/admin.css";
import { useNavigate } from "react-router-dom";
import { MapLocation } from "../home/homeCompenents/location";
import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, BoysVsGirlsGraph, OnlineGraph } from "./chart";
import { ThreeDots } from "react-loader-spinner";
import io from "socket.io-client";
 const socket = io.connect("https://cee-info.onrender.com");

const Levels = ["100", "200", "300", "400", "500"];

const AdminPanel = () => {
 
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user")).user;
  const [loading, setLoading] = useState(false);
  const [showYear, setShowYear] = useState(false);
  const [yearList, setYearList] = useState([]);
  const [selectedYear, setSelectedYear] = useState("all");
  const [studentData, setStudentData] = useState([]);
  const [paymentSearchInput, setPaymentSearchInput] = useState("");
  const [paymentList, setPaymentList ] = useState([])
  const [isLoadPayment, setIsLoadPayment ] = useState(true)
  const [onlineUsers, setOnlineUsers ] = useState([])


   socket.on("status", (activeUsers) => {
    console.log(activeUsers)
    setOnlineUsers(activeUsers)
  });


  async function getYears() {
    const { data } = await axios.get("/api/adminPanel/getYearOptions");
    if (data.YearOfEntry) {
      setShowYear(true);
      setYearList(data.YearOfEntry);
    }
  }

  async function getStudents(selectedYear) {
    const { data } = await axios.get(
      `/api/adminPanel/getStudents/${selectedYear}`
    );
    if (data.users) {
      setStudentData(data);
      setLoading(true);
      return;
    }
  }
  async function searchPayment(refNumber){ 

    const { data } = await axios.get(`/api/payment/searchPayments/${refNumber}`)
    if(data.length){
      setIsLoadPayment(false)
      setPaymentList(data)
      return
    }
  }

  useEffect(() => {
    getStudents(selectedYear);
    searchPayment(paymentSearchInput)
  }, [selectedYear, paymentSearchInput]);

  useEffect(() => {
    getYears();
    getStudents(selectedYear);
  }, []);

  async function blockUser( e, userId, isBlocked){
     if(isBlocked == false){
       const isConfirm = confirm('Are you sure you want to block this user ?')
       if(isConfirm){
         const { data } = await axios.put('/api/adminPanel/blockAccount', { userId })
           if(data.msg){
              alert(data.msg)
              e.target.textContent = 'unblock'
             return
           }
           alert(data.err)
       }
       return
     }
     const isConfirm = confirm('You are about to release this account click ok to release ?')
     if(isConfirm){ 
         const { data } = await axios.put('/api/adminPanel/blockAccount', { userId })
         if(data.msg){
           alert(data.msg)
           this.isBlocked = false
           return
         }
        alert(data.err)

     }

  }

  return (
    <>
      <main className="adminContent">
        <aside className="adminSideBar">
          <ul className="adminSideBarListContainer">
            <li onClick={() => navigate("/home/admin/register")}>
              {" "}
              <i className="fa fa-plus" aria-hidden></i> <span>New</span>
            </li>
            <li onClick={() => navigate(`/home/profile/${user._id}`)}>
              {" "}
              <i className="fa fa-user" aria-hidden></i> <span>Profile</span>
            </li>
            <li onClick={() => navigate("/home/main")}>
              {" "}
              <i className="fa fa-home" aria-hidden></i> <span>Home</span>
            </li>
            <li onClick={() => navigate("/home/friendchat")}>
              {" "}
              <i className="fa fa-users" aria-hidden></i> <span>Chats</span>
            </li>
            <li>
              {" "}
              <i className="fa fa-check-circle" aria-hidden></i>{" "}
              <span>Active</span>
            </li>
          </ul>
        </aside>
        <div className="adminVisualizer">
          <nav className="adminNav">
            <i
              className="fa fa-arrow-left"
              style={{ color: "#ccc" }}
              onClick={() => navigate(-1)}
            ></i>
            <select>
              {Levels.map((level, i) => {
                return (
                  <option key={i} value={level}>
                    {level} level
                  </option>
                );
              })}
            </select>
            <select onChange={(e) => setSelectedYear(e.target.value)}>
              {showYear &&
                yearList.map((year, i) => {
                  return (
                    <option key={i} value={year}>
                      {year}
                    </option>
                  );
                })}
            </select>
            <img src="" alt="" />
          </nav>
          Visualiser
          <div className="adminBox">
            <article>
              <p className="genderImage">
                <i className="fa fa-male" aria-hidden></i>
              </p>
              <strong>{loading && studentData.NumberOfBoys} boys</strong>
            </article>
            <article>
              <p className="genderImage">
                <i className="fa fa-female" aria-hidden></i>
              </p>
              <strong>{loading && studentData.NumberOfGirls} girls</strong>
            </article>
            <article>
              <p className="genderImage">
                <i className="fa fa-users" aria-hidden></i>
              </p>
              <strong>
                {loading && studentData.NumberOfStudents} students
              </strong>
            </article>
            <article>
              <p className="genderImage">
                <i className="fa fa-credit-card" aria-hidden></i>
              </p>
              <strong>N{loading && studentData.totalPayments}</strong>
            </article>
          </div>
          <div className="StudentData">
            {loading && <BarChart studentData={studentData} />}
            <div className="activeStudents">
              <div className="activeList">
                 { onlineUsers.map( user => {
                    return  <article key={user._id} className='user'>
                                    <img src={user.profileImage} alt={user.profileImage} />
                                    <span>{user.regNumber}</span>
                                    <span>{user.username}</span>
                               </article>
                 })}
              </div>
            </div>
          </div>
          <div className="studentTables">
            {loading && <BoysVsGirlsGraph studentData={studentData} />}

            <div className="studenTable">
                               <nav className='TableNav'>
                                   <p>
                                    <i className="fa fa-search"></i> 
                                    <input type="search" placeholder='find users'/>
                                   </p>
                               </nav>
                               <section className='userList'>
                                 {loading && studentData.users.map( user => {
                                  return<article key={user._id} className='user'>
                                    <img src={user.profileImage} alt="student profilePic" />
                                    <span>{user.regNumber}</span>
                                    <button onClick={(e) => blockUser(e, user._id, user.isBlocked ) }>{ user.isBlocked ? 'unblock' : 'block' }</button>
                                    <button onClick={() => navigate('/home/profileupdate', {state:user._id})}>edit</button>
                                  </article>
                                 })}
                               </section>
                           </div>


            <div className="paymentTable">
              <nav className="TableNav">
                <p>
                  <i className="fa fa-search"></i>
                  <input
                    type="search"
                    onChange={(e) => setPaymentSearchInput(e.target.value)}
                    value={paymentSearchInput}
                    placeholder="check payment ..."
                  />
                </p>
              </nav>
              <section className="payList">
               { isLoadPayment ? <center> <ThreeDots color="brown"/> </center> : paymentList.map ( payment => {
                  return  <article className="user payCard">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.ruat7whad9-kcI8_1KH_tQHaGI&pid=Api&P=0&h=220" alt="" />
                     <span>{payment.regNumber}</span>
                    <span>{payment.refNumber}</span>
                </article>
               })}
              </section>
            </div>
          </div>
          {loading && <OnlineGraph studentData={studentData} />}
        </div>
      </main>
    </>
  );
};

export default AdminPanel;
