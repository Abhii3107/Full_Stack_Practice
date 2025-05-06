import Product from "./Product.jsx";


function ProductTab(){
    let styles={
        display :"flex",
        flexWrap :"wrap",
        justifyContent: "centre",
        alignItems: "centre"
    }

    return(
        <div style={styles}>         
        <Product title="KEYBOARD" idx={0}/>
        <Product title="Mouse" idx={1}/>
        <Product title="CPU" idx={2}/>
        <Product title="PS5" idx={3}/>
       </div>
    );
}
export default ProductTab;
 
//------------------------------------------------------------------
// let option1=["Hi-Tech" , "durable" ,"fast"];    // passing like these -features1={option1}
// // let option2={a:"hi-tech" , b: "durable" ,c :"fast"}; //features2={option2.b}
// return(
//     <>
//     <Product title="Phone" price={1000} features1={option1}/>
//     <Product title="laptop" price={30000} features1={option1}/>
//     <Product title="Phone" price={10000} features1={option1}/>
//    </>
// );