import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Sidebar, Transition } from 'semantic-ui-react';
import App from './App';


const SideBarMobile = () => {
    const [activeItem, setActiveItem] = useState("Resepku");
    const [visible, setVisibility] = useState(false);
    const [animationVisible, setAnimationVisibility] = useState(true);

    const handleActiveItem = (e, {name}) => {
        setActiveItem(name)
        
    }

    const handleSidebarClick = () => {
        setVisibility(false)
    }

    const handleSidebarHide = () => {
        setVisibility(false)
        setAnimationVisibility(prevState => !prevState)        
    }
    
    const handleVisibility = () => {
        setVisibility(prevState => !prevState)
        setAnimationVisibility(prevState => !prevState)
    }

    return (
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
                <Menu.Item
                    as={ Link }
                    to="/newrecipe" 
                    name='Tambah Resep Baru'
                    active={activeItem === 'Tambah Resep Baru'} 
                    onClick={handleActiveItem}
                    onClick={handleSidebarClick}
                />
                <Menu.Item
                    as={ Link }
                    to="/favorites"
                    name='Resep Favorit' 
                    active={activeItem === 'Resep Favorit'} 
                    onClick={handleActiveItem}
                    onClick={handleSidebarClick}
                />
            </Sidebar>
            <Sidebar.Pusher style={{minHeight: "100vh"}}>
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
                        <Transition.Group animation="swing right" duration={500}>
                            {animationVisible && 
                            <Icon
                                name="sidebar" 
                                size="large" 
                                link 
                                onClick={handleVisibility}
                                style={{color: "white", margin: "0.4em 0.4em 0 0"}}
                            />}
                        </Transition.Group>
                    </Menu.Menu>
                </Menu>
                <App />
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    )
}

export default SideBarMobile;