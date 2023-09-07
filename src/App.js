import React from 'react'
import CrptoInfoList from './componenets/CryptoInfoList'
import './App.css'

const App = () => {
  const [load,setLoad] = React.useState(false)
  const [search,setSearch] = React.useState("")
  const [data, setData] = React.useState([])

  React.useEffect(()=>{
    const getCryptoData = async () =>{
        const response = await fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=100")
        const apiData = await response.json()
        setLoad(prevState => !prevState)
        setData(apiData.coins) 
        

    }

  getCryptoData();
  },[])

  const onChangeSearchInput = e =>{
    setSearch(e.target.value)
  }

  return (
  <>
    <div className='header-container'>
    <input onChange={onChangeSearchInput} 
    value={search} type="search" 
    placeholder='Search For Crypto...' 
    className='search-input'/>
   </div>
   {load ? <div className='d-flex flex-row justify-content-center mt-5'><p className='font-weight-bold'>Loading....</p></div> : 
   <div className='crypto-conatiner'>
    {
    data.length > 0  && 
    <>
    {
      data.filter(crypto=> crypto.name.toLowerCase().includes(search.toLowerCase())).map(eachCrypto=>(
        <CrptoInfoList eachCrypto={eachCrypto} key={eachCrypto.id} />
      ))
      }
  </>
    }  
   </div>
   }
  </>
  )
}



export default App