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

  fetchImage = async url => {
    const pokeData = await fetch(url);
    const pokeJson = await pokeData.json();
    console.log(pokeJson);
    console.log('image of pokemon url', pokeJson.sprite.front_default);
    return pokeJson.sprite.front_default;
  };

  render() {
    // return <WorkingApi />;
    return this.state.pokemons.length ? (
      <div style={{ display: 'block' }}>
        {this.state.pokemons.map(el => (
          <div className='card' style={{ width: '18rem' }} key={el.name + 1}>
            <img
              src={() => this.fetchImage(el.url)}
              className='card-img-top'
              alt='...'
            />
            <div className='card-body'>
              {console.log(el)}
              something else
              <h5 className='card-title'>{el.name}</h5>
              <p className='card-text'>
                The url of {el.name} is {el.url}
              </p>
              <a href={el.url} className='btn btn-primary'>
                URL
              </a>
            </div>
          </div>
        ))}
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
