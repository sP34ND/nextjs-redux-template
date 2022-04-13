import React, { useEffect, useState } from "react";
import { Layout } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from '../../features/posts/posts-slice';

// components
import Post from "../../components/Post";

const { Content } = Layout;

export default function Board() {

    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(getPosts());
    }, [])

    return (
        <Content style={{ padding: '50px 50px' }}>
            {
                posts.loading ? <p>Loading...</p> :
                    posts.data.map((post, i) => <Post key={i} title={post.title} body={post.body} />)
            }
        </Content>
    );
}

