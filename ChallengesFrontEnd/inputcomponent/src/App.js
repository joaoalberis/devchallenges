import './App.css';
import {Input} from './components/Input/Input'
import lock from './assets/lock.svg'
import phone from './assets/phone.svg'

function App() {
  return (
    <>
    <h1>Inputs</h1>
      <div className="inputs">
        <Input titulo="<Input />"/>

        <Input titulo="<Input error />" error />

        <Input titulo="<Input disabled />" disabled />

        <div className="inputGroup">
          <Input titulo="<Input helperText={'Some interesting text'} />" helperText={'Some interesting text'} />
          <Input titulo="<Input helperText={'Some interesting text'} error />" helperText={'Some interesting text'} error />
        </div>

        <div className="inputGroup">
          <Input titulo="<Input startIcon />" startIcon={phone} />
          <Input titulo="<Input endIcon />" endIcon={lock} />
        </div>

        <Input titulo="<Input value='text'/>" value='text' />

        <div className="inputGroup">
          <Input titulo="<Input size='sm' />" size='sm' />
          <Input titulo="<Input size='md' />" size='md' />
        </div>


        <Input titulo="<Input fullWidth />" fullWidth />

        <Input titulo="<Input multiline row='4' />" multiline row='4' />
      </div>
      <footer>
        <p>created by <a href="https://github.com/joaoalberis">João Alberis</a> - devChallenges.io</p>
      </footer>
    </>
  );
}

export default App;
