import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'


function App() {
  return (
    <>
    <WarningSign String="THIS IS AN ALERT!"/>
    <MyBadge string="Text M4-D3" color="danger"/>
    <SingleBook/>
    </>
  );
}

export default App;
