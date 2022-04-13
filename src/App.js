import logo from './logo.svg';
import './App.css';

const number = 3323;


const singers = [
  { name: 'Dr. Mufij', job: 'Artrist' },
  { name: 'Hasan', job: 'Artrist' },
  { name: 'Kobol', job: 'Artrist' },
  { name: 'Moto', job: 'Artrist' },
  { name: 'Cikna', job: 'Artrist' },
  { name: 'hihihi', job: 'Artrist' },

]

// set style

const peraStyle = {
  color: 'red',
  backgroundColor: 'white',


}

function App() {

  const names = ['Jarul', 'Hasna', 'Sabbir', 'Shovo', 'Zia', 'Ikram', 'Tushar', 'Jannat']
  return (
    <div className="App">

      {
        singers.map(singer => <Person name={singer.name} job={singer.job} ></Person>)
      }

      {/* {
        names.map(name => <li>{name}</li>)

      } */}

      {/* {
        names.map(name => <Person name={name}></Person>)
      } */}

      {/* <Friend name='Sabbir' zila="Maymansing"></Friend>

      <Friend name="Ziaur" zila="Brahmanbaria"></Friend>


      <Friend name="Hasan" zila="Dhaka"></Friend>


      <Friend name="Ikram" zila="Moheshkali"></Friend> */}

      {/* info Number set */}

      {/* <Info name={names[0]} phone="543534"></Info>
      <Info name={names[1]} phone="5345"></Info>
      <Info name={names[2]} phone="53545"></Info>
      <Info name="JAMIL" phone="53545"></Info>
      <Info name="zia" phone="53445"></Info> */}

    </div>
  );
}

function Person(props) {
  console.log(props)
  return (
    <div className='person'>
      <h1>Name : {props.name}</h1>
      <h1>Job : {props.job}</h1>
    </div>
  );
}

function Friend(props) {
  // console.log(props)

  return (
    <div className='container'>
      <h1>Name: {props.name}</h1>
      <p>Zila : {props.zila}</p>

    </div>
  );

}

export default App;
