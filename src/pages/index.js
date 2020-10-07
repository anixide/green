import React from "react"
import Header from "../components/header"
import How from "./how"
import Pricing from "./pricing"

export default function Home() {
  return (
    <div className="relative max-h-auto">
        <Header/>
        <How />
    </div>
  )
}
