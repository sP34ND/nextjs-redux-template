import React, { useState, useEffect } from "react";
import { Layout } from 'antd';

const { Content } = Layout;

export default function Home() {

  useEffect(() => {
    
    (async () => {
      const resp = await fetch('/api/hello');
      const jsonresp = await resp.json(); 
      console.log(jsonresp);
    })();

  }, [])
  

  return (
      <Content style={{ padding: '50px 50px' }}>
        <div className="site-layout-content">Content</div>
      </Content>
  );
}