import React from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Head = styled.header`
  color: white;
  background-color: rgba(20, 20, 20, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
    return (
        <Head>
            <List>
                <Item>
                    <SLink to={"/"}>
                      Movies
                    </SLink>
                </Item>
                <Item>
                    <SLink to={"/tv"}>
                        TV
                    </SLink>
                </Item>
                <Item>
                    <SLink to={"/search"}>
                       Search
                    </SLink>
                </Item>
            </List>
        </Head>

    );
};

export default Header;
