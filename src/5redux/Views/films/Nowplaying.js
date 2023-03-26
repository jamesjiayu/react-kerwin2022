import React, { useEffect, useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
export default function Nowplaying (props) {
  const [list, setList] = useState([])
  // console.log('outside setlist: ', list)
  const URL = 'http://localhost:3001/tasks/'
  // const pr = fetch(URL)
  // console.log('fetch(URL): ', pr)
  // pr.then(res => console.log('res.json()', res.json()))

  useEffect(() => {
    // let p1 = null
    // async function t () {
    //   const response = await fetch(URL)
    //   console.log('response in async: ', response)
    //   //console.log('response.json() in async: ', response.json())
    //   p1 = await response.json()
    //   console.log('p1 : ', p1) //
    //   // p1 = await p.then(res => res.json()) //no no no
    //   // console.log('before setlist: ', list)
    //   // setList([1, 2])
    //   // console.log('after setlist: ', list)
    //   return p1
    // }
    // t().then(d => console.log(d))
    //setList(t())
    fetch(URL).then(res => res.json()).then(dat => setList(dat))
  }, [])
  const handleChangePage = (id) => {
    //  window.location.href = '#/details/' + id //
    // console.log(props) //Who is Dad?
    // console.log(props.history)
    props.history.push(`/detail/${id}`)
  }
  // onClick={handleChangePage}
  // return (<>
  //   <div>Now playing :</div>
  //   {list.map(task => <FilmItem key={task.id}{...task}  {...props}>
  //     {/* <NavLink to={'/details/' + task.id}> {task.content} </NavLink> */}
  //   </FilmItem>)}
  // </>)
  return (
    <><div>use withRouter, if no props. Now playing :</div>
      {list.map(task => <WithFilmItem key={task.id}{...task} >
      </WithFilmItem>)}
    </>
  )
}
function FilmItem (props) {
  // console.log('in FilmItem', props)
  const { id, content, history } = props //histroy from where? 
  const handleChangePage = (id) => {
    history.push(`/detail/${id}`)
  }
  return (<>

    <li onClick={() => handleChangePage(id)}><span>Film Item:</span>
      {/* <NavLink to={'/details/' + task.id}> {task.content} </NavLink> */}
      {content} </li>
  </>)
}

const WithFilmItem = withRouter(FilmItem)
//export default withRouter(FilmItem)