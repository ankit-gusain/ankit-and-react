import AddDate1 from './AddDate1'
import AddDate2 from './AddDate2'
import './App.css'
import Sample from './SampleComp'
import AddDate3 from './AddDate3'

function App() {
  let data = [
    {
      iType: "p1",
      iName: "Soap",
      iDate: "10/10/2010",
    },
    {
      iType: "p2",
      iName: "eatables",
      iDate: "11/11/2011"
    },
    {
      iType: "p3",
      iName: "Wearables",
      iDate: "12/12/2012",
    },
  ]
  return (
    <>
      <p>Lorem ipsum dolor sit amet consectetur, adipisi
        elit. Porro, facere commodi? Labore, architecto
        accusamus cupiditate quidem laboriosam animiol
      </p>

      <Sample />

      <div>type 1 using the props in react ::::</div>
      <AddDate1></AddDate1>

      <div>type 2 using the props in react ::::</div>
      <AddDate2 type="1" day="mon" year="2000"></AddDate2>
      <AddDate2 type="2" day="tues" year="2010"></AddDate2>
      <AddDate2 type="3" day="wednes" year="2020"></AddDate2>

      <div>type 3 using the props in react ::::</div>
      <AddDate3 type={data[0].iType} name={data[0].iName} date={data[0].iDate} ></AddDate3>
      <AddDate3 type={data[1].iType} name={data[1].iName} date={data[1].iDate} ></AddDate3>
      <AddDate3 type={data[2].iType} name={data[2].iName} date={data[2].iDate} ></AddDate3>

    </>
  )
}

export default App
