import React from 'react';
import {useSearchUsersQuery} from "../store/github/github.api";

const HomePage = () => {
    const {isLoading, isError, data} = useSearchUsersQuery('georgy1705')

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default HomePage;
