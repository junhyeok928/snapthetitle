import React, { useEffect, useState } from 'react';
import axios from 'axios';

function InstagramFeed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://graph.instagram.com/me/media', {
            params: {
                fields: 'id,caption,media_type,media_url,thumbnail_url,permalink',
                access_token: 'IGQWRQdmpGeDloMktBUHlLNkJwOFpOVXpyb2xDTUFHaktEeDd4RmROQU5xTlpOS3JaUTJvb2wxalZABR3RPaVZAoNmZAwWk5Hck9RUmhnc2lyWU9aTmI3UTNYWDExYWQycmFUa013M29uU1NfUQZDZD'
            }
        })
            .then(response => {
                // Filter out posts with null media_url
                const filteredPosts = response.data.data.filter(post => post.media_type !== 'VIDEO');
                setPosts(filteredPosts);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 pt-20 mx-auto lg:w-8/12">
                <span className="font-bold">@snapthetitle</span>
            </div>
            <div className="container px-5 py-24 mx-auto lg:w-8/12">
                <div className="flex flex-wrap -m-4">
                    {posts.map(post => (
                        <div className="lg:w-1/3 sm:w-1/2 p-4" key={post.id}>
                            <div className="flex relative">
                                <div className="flex flex-col text-center w-full">
                                    <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                                        <img className="w-full h-full object-cover object-center" src={post.media_url}
                                             alt={post.caption}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default InstagramFeed;
