import React  from 'react'
import request from '../request'
import Main from '../Components/Main'
import Row from '../Components/Row'


const Home = () => {

  return (
    <>
    <Main/>
    <Row ROWID={Math.random()} title="Popular" key={Math.random()} fetchURL={request.RequstPopular}/>
    <Row ROWID={Math.random()} title="TopRate" key={Math.random()} fetchURL={request.RequstTopRate}/>
    <Row ROWID={Math.random()} title="Trends" key={Math.random()} fetchURL={request.RequstTrend}/>
    <Row ROWID={Math.random()} title="Up Coming" key={Math.random()} fetchURL={request.RequstUpComing}/>
    </>
  )
}

export default Home