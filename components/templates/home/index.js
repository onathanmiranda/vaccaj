import Logo from '../../atoms/logo';

export default function Home(){
  return (
    <div className="flex justify-center items-center pb-89 lg:pb-0 lg:pt-55 h-[calc(100svh)]">
      <div>
        <Logo className='w-233'/>
        {false && <button className={`${button} mx-auto mt-34`} onClick={handleInstall}>instalar como app</button>}
      </div>
    </div>
  );
}