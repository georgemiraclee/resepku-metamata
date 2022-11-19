import React, { Fragment, useState } from 'react';
import { Button, Icon, Header, Input, Dropdown } from 'semantic-ui-react';
import '../styles/Aside.css';

const Aside = (props) => {
    const {isError, getRandomRecipe, search} = props;
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e, {name, value}) => {
		setSearchQuery(value);
	}
	
	const handleSearch = () => {
		search(searchQuery)
		setSearchQuery("")
	}

    return(
        <Fragment>
            <div className="SideBar-search">
				<Header as='h3'>Cari resep Terpopuler: </Header>
				<Input 
					fluid
					error = {isError}						
					icon={
						<Icon 
							name='search' 
							inverted 
							circular 
							link 
							onClick={handleSearch}
						/>
					} 
					placeholder={isError ? "Tidak ada resep yang cocok, Coba lagi" : "Search"} 
					name="searchQuery" 
					value={searchQuery} 
					onChange={handleSearchChange}					 
				/>
			</div>
			<div className="SideBar-dropdown">
				<Header>Filter by category: </Header>
				<Dropdown text='Filter' icon='filter' floating labeled button fluid className='icon'>
					<Dropdown.Menu>
						<Dropdown.Header icon='tags' content='Filter by category' />
						<Dropdown.Item>Seafood</Dropdown.Item>
						<Dropdown.Item>Desert</Dropdown.Item>
						<Dropdown.Item>Daging</Dropdown.Item>
						<Dropdown.Item>Ayam</Dropdown.Item>
						<Dropdown.Item>Kambing</Dropdown.Item>
						<Dropdown.Item>Pasta</Dropdown.Item>
						<Dropdown.Item>Pork</Dropdown.Item>
						<Dropdown.Item>Side</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
			<div>
				<h3>Tidak sesuai apa yang kamu inginkan?</h3>
				<Button id="SideBar-btn" color="olive" onClick={getRandomRecipe}>Beri Kejutan!</Button>
			</div>
        </Fragment>
    )
}

export default Aside;