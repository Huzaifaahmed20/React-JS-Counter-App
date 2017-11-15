import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Helloworld from './helloworld';
import Counter from './countermethod'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
{/* <Helloworld link="https://www.facebook.com/" text="facebook"/>
<Helloworld link="https://www.google.com/" text="google"/>
<Helloworld link="https://www.youtube.com/" text="youtube"/> */}
<Counter />

</div>




    , document.getElementById('root'));
registerServiceWorker();
