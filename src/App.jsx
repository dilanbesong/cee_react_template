
import { Routes, Route } from 'react-router-dom'
import AuthNav from './components/auth/authnav'
import HomePage from './components/home/homePage'
import AdminPanel from './components/admin/adminPanel'
import Register from './components/admin/register'
import Payment from './components/home/homeCompenents/payments'
import Notification from './components/home/homeCompenents/notification'
import CreatePost from './components/home/homeCompenents/createPost'
import Location from './components/home/homeCompenents/location'
import ProfileUpdate from './components/home/homeCompenents/profileupdate'
import Profile from './components/home/homeCompenents/profile'
import FriendChat from './components/home/homeCompenents/friendChat'
import Search from './components/home/homeCompenents/search'
import Home from './components/home/homeCompenents/Home'
import ViewPost from './components/home/homeCompenents/viewPost'
import Chat from './components/home/homeCompenents/chat'
import GroupPage from './components/home/homeCompenents/groupPage'
import CreateGroup from './components/home/homeCompenents/createGroup'
import FriendRequest from './components/home/homeCompenents/FriendRequest'
import FriendList from './components/home/homeCompenents/FriendList'
import MyGroups from './components/home/homeCompenents/mygroups'
import GroupMembers from './components/home/homeCompenents/groupMembers'
import SentFriendRequest from './components/home/homeCompenents/sentFriendRequest'
import { ProtectedRoute } from './ProtectedRoute'


export default function App() {

  return <>
   <Routes>
     <Route path='/' element={ <AuthNav/>}/>
  <Route path='/home' element={<ProtectedRoute/>}>
     <Route path='main' element= {<HomePage children={<Home/>}/>}> </Route>
     <Route path='payment' element={<HomePage children={ <Payment/> }/>}> </Route>
     <Route path='notification' element={<HomePage children={ <Notification/> }/>}> </Route>
     <Route path='createPost' element={<HomePage children={ <CreatePost/> }/>}> </Route>
     <Route path='editPost/:id' element={<HomePage children={ <CreatePost/> }/>}> </Route>
     <Route path='location' element={<HomePage children={ <Location/> }/>}> </Route>
     <Route path='profileupdate' element={<HomePage children={ <ProfileUpdate/> }/>}> </Route>
     <Route path='profile' element={<HomePage children={ <Profile/> }/>}> </Route>
     <Route path='profile/:id' element={<HomePage children={ <Profile/> }/>}> </Route>
     <Route path='friendchat' element={<HomePage children={ <FriendChat/> }/>}> </Route>
     <Route path='post/:id' element={ <HomePage children={<ViewPost/>}/> }></Route>
     <Route path='search' element={<HomePage children={ <Search/> }/>}> </Route>
     <Route path='chat' element={<HomePage children={<Chat/>}/>}></Route>
     <Route path='group/:id' element={<HomePage children={<GroupPage/>}/>}></Route>
     <Route path='creategroup' element={<HomePage children={<CreateGroup/>}/>}></Route>
     <Route path='mygroup' element={<HomePage children={<MyGroups/>}/>}></Route>
     <Route path='groupmembers' element={<HomePage children={<GroupMembers/>}/>}></Route>
     <Route path='sentfriendRequest' element={ <HomePage children={<SentFriendRequest/>}/>}></Route>
     <Route path='friendrequest' element={ <HomePage children={<FriendRequest/>}/>}></Route>
     <Route path='friendlist' element={ <HomePage children={<FriendList/>}/>}></Route>
     <Route path='admin' element={<AdminPanel/>}></Route>
     <Route path='admin/register' element={ <HomePage children={<Register/>}/>}></Route>
  </Route>
  </Routes>
  </>
}

