import zx9 from '../../assets/image-speaker-zx9.png'
const ZX9Category = () => {
  return (
    <div className='py-7'>
      <div className="bg-o-color h-[650px] w-[90%] max-w-[1100px] container mx-auto rounded-lg">
        <div className="bg-[url('../src/assets/pattern-circles.svg')] h-[100%] bg-center bg-cover bg-no-repeat flex flex-col items-center justify-around  p-6">
          <img className='w-44' src={zx9} />
          <h1 className='text-w-color uppercase text-5xl w-72 font-normal text-center'>ZX9 Speaker</h1>
          <p className='text-center text-t2-color font-thin max-w-[368px] w-[75%] tracking-normal'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <button className='bg-black hover:bg-slate-500 text-w-color w-[170px] h-[50px] text-sm'>SEE PRODUCT</button>
        </div>
      </div>
    </div>
  );
};

export default ZX9Category;
