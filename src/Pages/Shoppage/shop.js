import React from 'react';
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../Components/collection-preview/preview-collection";
class ShopPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            shopItems:SHOP_DATA
        }
    }

    render() {
        console.log(this.state.shopItems);
        return(
            <div>
                {
                    this.state.shopItems.map(({id,...other})=>{
                        return(
                                <CollectionPreview key={id} {...other} />

                        )
                    }
                    )
                }
            </div>
        )
    }

}
export default ShopPage;