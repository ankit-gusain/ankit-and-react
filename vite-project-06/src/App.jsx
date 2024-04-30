import Cards from "./component-01/Cards"
import val from "./component-01/Val."
import CreateForm from "./component-01/CreateForm"

function App() {

  return (
    <>

      <CreateForm></CreateForm>
      <Cards name={val[0].name} price={val[0].price} date={val[0].date}></Cards >

    </>
  )
}

export default App;