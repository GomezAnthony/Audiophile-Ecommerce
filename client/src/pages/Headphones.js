const Headphones = ({data}) => {
    return ( 
        <div>
            <h1 className="text-p-color">{data[0].slug}</h1>
        </div>
     );
}
 
export default Headphones;