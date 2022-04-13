import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import Link from 'next/link';
import { Provider } from 'react-redux';

// css
import '../styles/globals.css';
import 'antd/dist/antd.css';

// constants
import pages from '../pages.json';

// redux
import store from '../store';

const { Header, Content, Footer } = Layout;

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Layout className="layout">
        <Header>
          <div className="logo" style={{
            float: 'left',
            width: '120px',
            height: '31px',
            margin: '16px 24px 16px 0',
            background: 'rgba(255, 255, 255, 0.3)'
          }} />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={'1'}>
            {
              pages.map((page) => <Menu.Item key={page.id}>
                <Link href={page.path}><a>{page.title}</a></Link>
              </Menu.Item>)
            }
          </Menu>
        </Header>
        <Component {...pageProps} />
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Provider>
  )
}

export default MyApp
