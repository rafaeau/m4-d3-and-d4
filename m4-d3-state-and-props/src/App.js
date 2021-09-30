import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'
import scifi from '../src/data/scifi.json'
import BookList from './components/BookList'


function App() {
  return (
    <>
    <WarningSign text="THIS IS AN ALERT!"/>
    <MyBadge text="This is a badge" color="primary"/>
    <SingleBook book={scifi[0]}/>
    <BookList books={scifi}/>
    </>
  );
}

export default App;
