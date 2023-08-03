import './App.css';
import { Button } from './components/Button/button';
import local_grocery_store from './cart.svg'

function App() {
  return (
    <>
    <h1>Buttons</h1>
      <div className="buttons">
        <Button titulo={"<Button />"} color={"default"} />

        <Button titulo={"<Button variant=”outline” />"} variant={"outline"}/>

        <Button titulo={"<Button variant=”text” />"} variant={"text"} />

        <Button titulo={"<Button disableShadow />"} color={"primary"} disableShadow />
        <div className="groupButton">
          <Button titulo={"<Button disabled />"} disabled />

          <Button titulo={"<Button variant='text' disabled />"} variant={"text"} disabled />
        </div>
        <div className="groupButton">
          <Button titulo={"<Button startIcon=”local_grocery_store” />"} color="primary" startIcon={local_grocery_store} />

          <Button titulo={"<Button endIcon='local_grocery_store' />"} color="primary" endIcon={local_grocery_store} />
        </div>
        <div className="groupButton">
          <Button titulo={"<Button size=”sm” />"} color="primary" size="sm" />

          <Button titulo={"<Button size=”md” />"} color="primary" size="md" />

          <Button titulo={"<Button size=”lg” />"} color="primary" size="lg" />
        </div>
        <div className="groupButton">
          <Button titulo={"<Button color='default' />"} color="default" />

          <Button titulo={"<Button color='primary' />"} color="primary" />

          <Button titulo={"<Button color='secondary' />"} color="secondary" />

          <Button titulo={"<Button color='danger' />"} color="danger" />
        </div>
      </div>
    </>
  );
}

export default App;
