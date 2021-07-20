// import React from "react"
// import React, {useState,useEffect} from "react"

// const URL = "https://accounts.spotify.com/api/token"
// const _SECRETE = "1083691a25a54727bcd509194c0ca71c"
// const _CID = "2c7a8a49367548f48d7694ba4046a8b6"

// const GetAccessToken = () => {
//   const [track, setTrack] = useState(""); //useState() hook, sets initial state to an empty array

// }

// const GetCurrentSong = () => {

//   const [track, setTrack] = useState(""); //useState() hook, sets initial state to an empty array
  
//   useEffect( async() => {

//     const requestOptions = {
//       method: 'POST',
//       headers: { 
//         'Content-Type' : 'application/json',
//         'Accept' : 'application/json',
//         'Authorization':'Basic client_id:'+_SECRETE+ 'client_secrete:' +_CID
//       }
//   };

//     const response = await fetch(URL, requestOptions);
//     const data = await response.json();

//     // setTrack(data.items[0].track.id)
//     setTrack(data)
//   }, [])
//   console.log(track)
//   return track

// }
