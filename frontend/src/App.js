// import logo from './logo.svg';
 import './App.css';
//  import { UpdatePassword } from './components/passwordupdate/update';
// import { Details } from './components/personal details/details';
// import { Education } from './components/educationaldetails/education';
// import { Skills } from './components/skills/skills';
// import { Events } from './components/events/events';
// import { UseStateFunction } from './components/use state/use';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { SignIn } from './components/signin/sign';
import { SignUp } from './components/signup/signup';
import { Profile } from './components/profile/profile';
import { StudentData } from './components/studentdata/students';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/students' element={<StudentData/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    <StudentData/>
    </>
  );
}

export default App;
