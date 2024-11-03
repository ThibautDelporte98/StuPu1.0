
import Nav from 'layouts/Navigation';
import Head from 'components/header/HeadHome';
import SignUpChoice from 'layouts/SignUpChoice';


const Home = () => {

    return (
      <>
      <div className='cstm-container'>
        <Nav/>
        <SignUpChoice />
      </div>
      </> 
    );

  };
  
  export default Home;
  