import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTwo from './components/PageTwo';

const App = () => {
{/* <ToastContainer theme="dark" /> */}
  const notify = () => {
    toast.success("i am top left!",{position: toast.POSITION.TOP_LEFT })
    toast.error('i am top center',{position: toast.POSITION.TOP_CENTER })
    toast.warning('iam  top right', {position: toast.POSITION.TOP_RIGHT})
    toast.success('i am bottom left',{position: toast.POSITION.BOTTOM_LEFT})
    toast.info('i am bottom center ',{position: toast.POSITION.BOTTOM_CENTER})
    toast('i am bottom right',{position: toast.POSITION.BOTTOM_RIGHT})

    console.log("hit")
  }

  const btn2 = () => {
    toast.error("sumon")
  }

  return (
    <div className="App">
      
    <button className='bg-red-800 py-2 px-3 mt-2 text-cyan-300' onClick={notify}> Notify!</button>
    {/* <button className=' bg-orange-700 px-3 py-3 mt-8 text-white' onClick={btn2}>click me for toast </button> */}
    <ToastContainer />
    <PageTwo/>
    </div>
  );
}

export default App;
