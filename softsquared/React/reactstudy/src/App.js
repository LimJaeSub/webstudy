import Hello from './components/Hello';
import Hi from './components/Hi';
function App() {

  const users =[{
    username:"hello",
    userage:25
  },{
    username:"hi",
    userage:26
  }]

  return (
    <div className="App">
      <Hello users={users[0]} />
      <Hi users={users[1]}></Hi>
    </div>
  );
}

export default App;
