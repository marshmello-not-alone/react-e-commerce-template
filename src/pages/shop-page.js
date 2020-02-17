import React from 'react'
import SHOP_DATA from './shop-data'

import CollectionPreview from '../components/preview-collections/preview-collection'

class ShopPage extends React.Component {
  constructor(props){
    super(props)

    this.state= {
      collections: SHOP_DATA
    }
  }
  render(){
    const {collections} = this.state || {}
    return (<div className='shop-page'> {
      collections.map(({id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps}/>
      ))}
      </div>
      )
  }
}

export default ShopPage