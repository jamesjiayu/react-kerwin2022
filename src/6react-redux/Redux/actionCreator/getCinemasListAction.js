//thunk // return function
// export function getCinemasListAction () {
//   return (dispacth) => {
//     const URL = 'http://localhost:3001/cinemas/'
//     fetch(URL).then(res => res.json()).then(data => {
//       console.log('data, payload', data)
//       dispacth({
//         type: 'changeCinemas',
//         payload: data
//       })
//     })
//   }
// }

//promise //return promise
// const URL = 'http://localhost:3001/cinemas/'
// export function getCinemasListAction () {
//   return fetch(URL).then(res => res.json()).then(data => {
//     console.log('data, payload', data)
//     return {
//       type: 'changeCinemas',
//       payload: data
//     }
//   })
// }

const URL = 'http://localhost:3001/cinemas/'
export async function getCinemasListAction () {
  let list = await fetch(URL).then(res => res.json()).then(data => {
    console.log('data, payload', data)
    return {
      type: 'changeCinemas',
      payload: data
    }
  })
  return list
}