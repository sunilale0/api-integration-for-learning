// import React, {Component} from 'react';
// import './App.css';


// /// start with this.state = { temporary: []}
// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state ={
//       pokemons: [],
//       pokeAbilities: [],
//       pokeInfo: []
//     }
//   }

//   // async somefunct(pokeAddress) {
//   //   let someVar = await fetch(`${pokeAddress}`);
//   //   let varJsoned = await someVar.json();
//   //   console.log('someVar in somefunct jsoned', varJsoned)
//   //   return varJsoned;
//   // } 


  
//   async componentDidMount(){
//     try {
//       const pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100`);
//       const pokeAbilities = await fetch(`https://pokeapi.co/api/v2/ability/?limit=100`);
//       console.log('pokeResponse without json conversion', pokeResponse)
//       const pokeJson = await pokeResponse.json();
//       const abilityJson = await pokeAbilities.json();

//       const pkNames = pokeJson.results.map(pokemon => {
//         return pokemon.name
//       });
//       console.log('pkNames: ', pkNames)

//       let pkInfo = [];
//       for (let i = 0; i < pkNames.length; i++) {
//         let tempPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkNames[i]}`);
//         let tempPokeJsoned = await tempPoke.json();
//         pkInfo.push(tempPokeJsoned);
//       }
//       console.log('pkInfo ', pkInfo);
//       console.log('componentDidMount pokeJson.results', pokeJson.results);
//       this.setState({
//         pokemons: pokeJson.results,
//         pokeAbilities: abilityJson.results,
//         pokeInfo: pkInfo
//       })
//     } catch (error) {
//         console.error(error);
//     }
//   }

//   imageArray = (startPoint, endPoint) => {
//     let arr = [];
//     for (let i = startPoint; i < endPoint; i++)
//       arr.push(this.state.pokeInfo[i].sprites.back_default)
//     return arr;
//   }



//   giveImage = () => {
//     console.log('console logging this.state.pokeInfo[0]["sprites"]back_default', (this.state.pokeInfo[0].sprites.back_default))
//     return this.state.pokeInfo[0].sprites.back_default;
//       return 'text';
//     }
  
//   giveDetails = (startPoint, endPoint) => {
//     var rows = [];
//     let imgStyle = {

//     }
//     let style = {
//       display: 'flex',
//       justifyContent: 'center',
//       flexDirection: 'row',
//       border: '1px green solid',
//       padding: '10px',
//       margin: '10px',
//       boxShadow: '3px 3px black',
//       background: '#2D6BE5',
//       color: 'white',
//       flex: '1',
      
      
//     }
//     for (var i = startPoint; i < endPoint; i++) {
//       rows.push(<div style={style}>
//         <div>
//         <img src={this.imageArray(startPoint, endPoint)[i]} alt={i + i + i} width='300px' key={'00' + i} style={imgStyle}/>
//         </div>
//           {/* <hr/> */}
//         <div>
//         <Pokemons 
//           name={this.state.pokemons}
//           ability={this.state.pokeAbilities}
//           id={i}
//           image={this.imageArray()[i]}
//           base_experience={this.state.pokeInfo[i].base_experience}
//           height={this.state.pokeInfo[i].height}
//           // moves={this.state.pokeInfo[i].moves[i].move.name}
//           weight={this.state.pokeInfo[i].weight}
//           species={this.state.pokeInfo[i].species.name}/>
//         </div>
        
//         </div>
//          );
       
//     }
//     console.log(rows)
//     return <div>{rows}</div>;
//   }
    


//   render() {

//     console.log('type of this.state.pokeInfo: '+ typeof this.state.pokeInfo)
//     console.log('this.state.pokeInfo: ', this.state.pokeInfo)

//     // let imageArr = this.imageArr;
//     // let someVar = '<img src={ this.state.pokeInfo[0].sprites.back_default }'
    
    

//     return (
      
//       this.state.pokemons.length > 0 && this.state.pokeInfo.length > 0 ?
// <div>
        
//           {this.giveDetails(0, 5)}
//           {this.giveDetails(5, 10)}
          
          
//         </div> : (null)
//     );
//   };
  
// }

// export default App;