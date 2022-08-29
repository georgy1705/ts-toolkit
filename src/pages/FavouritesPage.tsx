import React from 'react';
import {useAppSelector} from "../hooks/redux";
import {useActions} from "../hooks/actions";

const FavoritesPage = () => {
    const {favourites} = useAppSelector(state => state.github)
    const {removeFavourite} = useActions()

    const removeFromFavourites = (event: React.MouseEvent<HTMLButtonElement>, repoUrl: string) => {
        event.preventDefault();

        removeFavourite(repoUrl)
    }

    if (favourites.length === 0) return <p className="text-center">No items.</p>
    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
            <ul className="list-none">
                {
                    favourites.map(f => (
                        <li key={f} className="mt-10">
                            <a target="_blank" href={f}>{f}</a>
                            <button
                                onClick={e => removeFromFavourites(e, f)}
                                className="ml-3 py-1 px-3 bg-red-400 rounded hover:shadow-md transition-all">
                                Remove
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>

    );
};

export default FavoritesPage;
