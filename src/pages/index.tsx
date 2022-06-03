import * as React from "react"
import Landing from "../components/landingPage/Landing"
import GlobalContext from "../context/GlobalContext";

// styles


const displayName= (a: number , b: number):String => {
  return `Vikas ${a+b}`;
}
// data

// markup
const IndexPage = () => {
  return (
    <GlobalContext>
    <main >
      <Landing />
    </main>
    </GlobalContext>
  )
}

export default IndexPage
