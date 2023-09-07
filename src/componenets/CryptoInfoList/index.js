import React from 'react'
import './index.css'

const CrptoInfoList = props => {
      const {eachCrypto} = props
      const {
            icon,
            marketCap,
            name,
            price,
            rank,
            symbol,
            twitterUrl,
            websiteUrl} = eachCrypto
  return (
    <div className='crypto-card p-2'>
            <div className='text-center mb-5'>
                  <img className='icon' src={icon} alt={name} />
                  <h1 className='crpto-name'>{name} ({symbol})</h1>
                   <p className='text-white'>Rank: {rank}</p>
                   <p className='text-white'>Price in $: {price}</p>
                   <p  className='text-white'>marketCap : {marketCap} </p>
            </div>
            <div className='d-flex flex-row justify-content-between'>
                  <div>
            <a href={websiteUrl} rel="noreferrer" target='_blank'><button className='btn btn-primary'>website</button></a>
            </div>
            <div>
            <a href={twitterUrl} rel="noreferrer" target='_blank'><button className='btn btn-primary'>Twitter</button></a>
            </div>
            </div>
            
    </div>
  )
}


export default CrptoInfoList



