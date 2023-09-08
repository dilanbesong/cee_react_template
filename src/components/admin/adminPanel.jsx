import '../../styles/admin/admin.css'
import { useNavigate } from 'react-router-dom'
import {MapLocation} from '../home/homeCompenents/location'
const AdminPanel = () => {
     const navigate = useNavigate()
     return <>
               <main className="adminContent">
                  <aside className="adminSideBar">
                     <ul className='adminSideBarListContainer'>
                         <li onClick={() => navigate('/home/admin/register')} > <i className='fa fa-plus' aria-hidden></i> <span>New</span></li>
                         <li onClick={() => navigate('/home/profile')}> <i className='fa fa-user' aria-hidden></i> <span>Profile</span></li>
                         <li onClick={() => navigate('/home/main')}> <i className='fa fa-home' aria-hidden></i> <span>Home</span></li>
                         <li onClick={() => navigate('/home/friendchat')}> <i className='fa fa-users' aria-hidden></i> <span>Chats</span></li>
                         <li> <i className='fa fa-check-circle' aria-hidden></i> <span>Active</span></li>
                     </ul>
                  </aside>
                  <div className="adminVisualizer">
                    <nav className="adminNav">
                      <i className="fa fa-arrow-left" style={{color:'#ccc'}} onClick={() => navigate(-1)}></i>
                         <select>
                                <option value="100"> 100 level</option>
                                <option value="200"> 200 level</option>
                                <option value="300"> 300 level</option>
                                <option value="400"> 400 level</option>
                                <option value="500"> 500 level</option>
                         </select>
                         <select>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                         </select>
                         <img src="" alt="" />
                    </nav>
                       Visualiser
                       <div className="adminBox">
                            <article>
                               <p className='genderImage'> 
                                <i className='fa fa-male' aria-hidden></i>
                                </p>
                                <strong>28 boys</strong>
                              </article> 
                            <article>
                                <p className='genderImage'> 
                                <i className='fa fa-female' aria-hidden></i>
                                </p>
                                <strong>28 girls</strong>
                              </article> 
                            <article>
                               <p className='genderImage'> 
                                <i className='fa fa-users' aria-hidden></i>
                                </p>
                                <strong>56 students</strong>
                         </article> 
                            <article><p className='genderImage'> 
                                <i className='fa fa-credit-card' aria-hidden></i>
                                </p>
                                 <strong>N14,564</strong> 
                             </article> 
                                     
                       </div>
                       <div className="StudentData">
                          <div className="graphData">
                            <canvas></canvas>
                           </div>
                           <div className="activeStudents">
                              <div className="activeList">

                                 <article className='user'>
                                    <img src="" alt="" />
                                    <span>2019030187292</span>
                                    <span>Ifeanyi chukwu</span>
                                  </article>

                              </div>
                           </div>
                        </div>
                       <div className="studentTables">


                           <div className="studenTable">
                               <nav className='TableNav'>
                                   <p>
                                    <i className="fa fa-search"></i> 
                                    <input type="search" placeholder='find users'/>
                                   </p>
                               </nav>
                               <section className='userList'>

                                  <article className='user'>
                                    <img src="" alt="" />
                                    <span>2019030187292</span>
                                    <button onClick={() => alert('Are you want to delete')}>delete</button>
                                    <button onClick={() => navigate('/home/profileupdate')}>edit</button>
                                  </article>

                               </section>
                           </div>




                           <div className="paymentTable">
                              <nav className='TableNav'>
                                   <p>
                                    <i className="fa fa-search"></i>
                                     <input type="search" placeholder='check payment ...' />
                                   </p>
                              </nav>
                              <section className='payList'>
                                 <article className='user payCard'>
                                    <img src="" alt="" />
                                    <span>2019030187292</span>
                                    <span>9fchrsfbjhreiuri3r909e</span>
                                  </article>
                              </section>
                           </div>


                                        
                       </div>
                       <div className="onlineGraph">
                          <MapLocation lat={0} lng={15}/>
                       </div>
                  </div>
          </main> 
     </>             
}

export default AdminPanel