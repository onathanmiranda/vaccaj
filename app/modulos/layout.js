import Logo from '../../components/atoms/logo';

export default function Layout({ children }){
  return (
    <>
      <Logo className='h-34 mx-auto my-13'/>
      {children}
    </> 
  )
}