// import React, { useContext } from 'react';
// import { AuthContext } from '../../providers/Providers';

// const Home = () => {
//     const user = useContext(AuthContext)
//     return (
//         <div>
//             <h2>User Name: {user && <span>{user.displayName}</span>}</h2>
//         </div>
//     );
// };

// export default Home;




import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Home = () => {
    const {user,createUser} = useContext(AuthContext)
    console.log(createUser)
    return (
        <div>
            <h2>Name: {user&& <span>{user.displayName}</span>}</h2>
        </div>
    );
};

export default Home;




