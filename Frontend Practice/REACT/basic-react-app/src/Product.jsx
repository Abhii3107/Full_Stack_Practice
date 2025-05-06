import './Product.css';
import Price from "./Price.jsx";

function Product({title ,idx}){

    let oldPrices =["4000" , "1000" ,"70,000" , "60,000"];
    let newPrices=["2000" , "800" , "60,000" , "50,000"];
    let description= [["2400 DPI" , "Smooth"] , ["Mechanical"  , "RGB" ] , [" 16 Multi-Threaded" ,"RTX-3050"] ,[" High-Graphics" ,"Multi-player"] ];
         return(
            <div className='Product'>
                <h4>{title}</h4>
                <p>{description[idx] [0]}</p>
                <p>{description[idx] [1]}</p>
                <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
            </div>
         )
}

export default Product;


//-----------------------------------------------------------------
// let styles ={ backgroundColor: price > 25000 ? "pink" : ""};
// return(
//     <div className="product" style={styles}>
//         <h3>{title}</h3>
//         <h5>Price : {price}</h5>
//         <p>{features1.map((feature) => <li>{feature}</li>)}</p>
//        {price > 25000 ?  <p>"Discount pf 5%" </p>: null }
//     </div>
// );



    // const list =features1.map((feature) => <li>{feature}</li>); //passing array prop in arraymap method
    
    //conditionals
    // const consitional = <p>{price > 25000 ? "discount" : null}</p>
    // {price >= 1000 && <p>Discount : 5% </p> &}