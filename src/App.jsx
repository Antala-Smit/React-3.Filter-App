import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Cloths from "./Cloths.jsx"
import Clothes from './Cloths.css'
import{Item, category} from "./Data.js"
import { useState } from 'react'

function App(){
    const [products,setProducts] = useState(Item)
    const filterData = (cat) => {
        if(cat === "all"){
            setProducts(Item)
        }else{
            let f = Item.filter(p => p.category === cat)
            setProducts(f)
        }
    }
    return(
        <>
            <Cloths
                product={products}
                menu={category}
                filterData={filterData}
            />
        </>
    )
}
export default App