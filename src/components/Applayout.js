import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../layout/Header/Header';
import Sidebar from '../layout/Sidebar';



const AppLayoutRoute = ({ component: Component, ...rest }) => {
    
    return (
        <Route
            {...rest}
            render={matchProps => (
                <Sidebar>
                    <Component {...matchProps} />
                </Sidebar>
            )}
        />
    );
};
export default AppLayoutRoute;































// const AppLayoutRoute = ({ component: Component, ...rest }) => {
//     return (
//         <Route
        
        
//             {...rest}
//             render={matchProps => (
//                 <div className='row' style={{ display: 'contents' }}>
//                     <Sidebar>
//                     <div className='content sb-mc'>
//                         <div className='grid grid-cols-12 gap-6 mt-5'>
//                             <Component {...matchProps} />
//                         </div>
//                     </div>
//                     </Sidebar>
//                 </div>
//             )}
//         />
//     );
// };
// export default AppLayoutRoute;