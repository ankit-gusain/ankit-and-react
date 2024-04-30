import './App.css'
import AddData from './AddData'
import Form from './Form'
import Form2 from './form2'

function App() {

  let data = [
    {
      type: "good",
      name: "radhe radhe"
    },
    {
      type: "better",
      name: "radhe radhe radhe radhe"
    },
  ]

  return (
    <>
      <Form2></Form2>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Rem incidunt doloremque qui eum praesentium temporibus ab
        impedit enim asperiores tenetur?
      </p>

      <Form></Form>
      <AddData type={data[0].type} name={data[0].name}></AddData>
      <AddData type={data[1].type} name={data[1].name}></AddData>

    </>
  )
}

export default App
