const Button = ({label}) => {
    return ( 
        <div>
            <button className="bg-o-color text-w-color hover:bg-red-500 w-[200px] h-[60px]">{label}</button>
        </div>
     );
}
 
export default Button;