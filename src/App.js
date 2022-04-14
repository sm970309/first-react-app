import useTabs from "./useTabs";

const content= [
  {
    tab:"Section 1",
    content: "I'm Section 1"
  },
  {
    tab:"Section 2",
    content: "I'm Section 2"
  }
]

function App() {
  const {currentItem,changeItems} = useTabs(0,content)
  return (
    <div className="App">
      <div>{currentItem.content}</div>
      {content.map((section,index)=><button onClick={()=>changeItems(index)} key={index}>{section.tab}</button>)}
    </div>
  )


}
export default App;