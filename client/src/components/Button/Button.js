const Button = ({label}) => {
    return ( 
        <div>
            <button className="bg-o-color hover:bg-orange-200 text-w-color w-[200px] h-[60px]">{label}</button>
        </div>
     );
}
 
export default Button;