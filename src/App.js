import { Fragment, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Title from './Title';
import Topform from './Topform';
import List from './List';
import { taskContext } from './taskContext';

const App =()=>{
  //Array Destructuring
  const [taskItems ,setTaskItems] =useState([{
    id:1,
    title:"Task number 1",
    done:false,    
  },
  {
    id:2,
    title:"Task number 2",
    done:true,
  },
  {
    id:3,
    title:"Task number 3",
    done:false,
  }])
  return(
    <taskContext.Provider value={{
      taskItems,
      setTaskItems,
    }}>
         <Fragment>
       <Container>
          <Row>
            <Title></Title>
          </Row>
          <Row>
            <Topform></Topform>
          </Row>
          <Row>
            <List></List>
          </Row>
    </Container>

    </Fragment>

    </taskContext.Provider>
 
  )
}
export default App;