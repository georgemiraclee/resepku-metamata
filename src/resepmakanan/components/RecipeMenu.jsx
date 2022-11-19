import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Responsive, Sidebar } from 'semantic-ui-react';
import '../styles/RecipeMenu.css';


const RecipeMenu = () => {
    const [activeItem, setActiveItem] = useState("Resepku");
    const [visible, setVisibility] = useState(false);

    const handleActiveItem = (e, {name}) => {
        setActiveItem(name)
    }

    const handleSidebarHide = () => {
        setVisibility(true)
    }
    
    const handleVisibility = () => {
        setVisibility(prevState => !prevState)
    }
    return (
        <div>
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Menu inverted fixed="top">
                    <Menu.Item>
                        <Icon name="food" color="orange" />
                    </Menu.Item>
                    <Menu.Item
                            as={ Link }
                            to="/"
                            header
                            name='Resepku'
                            active={activeItem === 'Resepku'} 
                            onClick={handleActiveItem}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item
                            as={ Link }
                            to="/newrecipe" 
                            name='Tambah Resep Baru'
                            active={activeItem === 'Tambah Resep Baru'} 
                            onClick={handleActiveItem}
                        />
                        <Menu.Item
                            as={ Link }
                            to="/favorites"
                            name='Resep Favorit' 
                            active={activeItem === 'Resep Favorit'} 
                            onClick={handleActiveItem}
                        />
                    </Menu.Menu>
                </Menu>
            </Responsive>
            <Responsive {...Responsive.onlyMobile} >
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation="overlay"
                        icon="labeled"
                        inverted
                        vertical
                        visible={visible}  
                        onHide={handleSidebarHide}              
                    >
                        <Menu.Item as='a'>Home</Menu.Item>
                        <Menu.Item as='a'>Games</Menu.Item>
                        <Menu.Item as='a'>Channels</Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher style={{minHeight: "100vh"}}>
                        <Menu inverted>
                            <Menu.Item>
                                <Icon name="food" color="orange" />
                            </Menu.Item>
                            <Menu.Item
                                    as={ Link }
                                    to="/"
                                    header
                                    name='Resepku'
                                    active={activeItem === 'Resepku'} 
                                    onClick={handleActiveItem}
                            />
                            <Menu.Menu position='right'>
                                <Icon name="sidebar" size="large" style={{color: "white"}} link onClick={handleVisibility} />
                            </Menu.Menu>
                        </Menu>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Responsive>
        </div>
    )
    
}

export default RecipeMenu;