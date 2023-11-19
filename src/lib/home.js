import React, { useState, useEffect } from 'react';
import './css/home.css';

function Home() {
    const [usersArray, setUsersArray] = useState([]);
    var renderCount = 0;

    useEffect(() => {
        if (renderCount === 0) {
            fetch('http://localhost:3000/api/get_streaming_user')
                .then(response => response.json())
                .then(data => setUsersArray(data.users))
                .then(() => console.log(usersArray))
                .catch(err => console.log(err)
                );
        }
        renderCount++;
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <p>配信中</p>
            <div className='on-air-list'>
                <table>
                    {usersArray.map((user, index) => (
                        <tr key={index}>
                            <td>
                                <a href={"https://www.twitch.tv/" + user["userLogin"]}>
                                    {user["title"]}
                                </a>
                            </td>
                            <td>{user.userName}</td>
                            <td>{user.description}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
}

export default Home;
