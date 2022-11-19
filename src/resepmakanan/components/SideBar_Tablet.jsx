import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

const SideBarTablet = () => {
    const [activeItem, setActiveItem] = useState("Resepku");

    const handleActiveItem = (e, {name}) => {
        setActiveItem(name)
    }

    return (
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
    )
}

export default SideBarTablet;