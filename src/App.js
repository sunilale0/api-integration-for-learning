import React, { Component } from 'react';
import WorkingApi from './workingApi';

class App extends Component {
  // Lifecycle Properties
  // componentDidMount, componentDidUpdate,
  state = {
    someVar: '',
    pokeDitto: null,
    pokemons: []
  };
  async componentDidMount() {
    // what to run after the component mounts
    // in this case when App.js mounts(loads)
    try {
      const pokeDitto = await fetch('https://pokeapi.co/api/v2/pokemon/ditto/');
      const dittoJson = await pokeDitto.json();
      const pokemons = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=20'
      );
      const pokeJson = await pokemons.json();
      console.log('dittoJson', dittoJson);
      console.log('dittoJson.base_experience', dittoJson.base_experience);

      this.setState({
        someVar: 'component Mounted',
        pokeDitto: dittoJson,
        pokemons: pokeJson.results
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  loadPokeCards = el => {
    return (
      <li>
        {console.log(el.name)}
        {el.name}
      </li>
    );
  };

  render() {
    // return <WorkingApi />;
    return this.state.pokemons.length ? (
      <div>
        <ul>
          {this.state.pokemons.forEach(el => (
            <div className='card' style={{ width: '18rem' }}>
              <div className='card-body'>
                {console.log(el)}
                something else
                <h5 className='card-title'>{el.name}</h5>
                <p className='card-text'>
                  The url of {el.name} is{el.url}
                </p>
                <a href={el.url} className='btn btn-primary'>
                  URL
                </a>
              </div>
            </div>
          ))}
        </ul>
        <p>
          something: {this.state.pokemons.forEach(el => console.log(el.name))}
        </p>
      </div>
    ) : (
      'Loading...'
    );
  }
}

export default App;
