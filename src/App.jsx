import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar'
import Header from './components/Header';
import Card from './components/Card';
import Description from './components/Description';
import Footer from './components/Footer';
import './App.css'
import pokeball from './assets/pokeball.svg'
export default function App() {
    
    const inputRef =useRef();

    const [randomNumbers, setRandomNumbers] = useState([]);
    const [pokemonData,setPokemonData] = useState({ initial:true, err:false });
    async function fetchData(name){

        const response =  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        response.then((res)=>{
            if(!res.ok){
                throw new Error('something went wrong');
            }
            else{
                return res.json();
            }
        })
        .then((data)=>{
            setPokemonData(data);
        })
        .catch(()=>{
            setPokemonData({ initial:false, err:true });
        })
    }
    function setData( name ){

        setPokemonData({});
        fetchData(name);
    }
    useEffect(() => {

        let nums = []
        for (let index = 0; index < 3; index++) {
            nums.push(Math.floor(Math.random() * 1000));
        }

        setRandomNumbers(nums);

    }, [])

    function handleSubmit(event){

        event.preventDefault()
        window.scrollTo(0,2100);
        if(inputRef.current.value){
            inputRef.current.value = inputRef.current.value.toLowerCase();
            setData(inputRef.current.value);
        }
        inputRef.current.value = '';
    }
    return (
        <div className="container">
            <Navbar />
            <div className="content">
                <Header />
                <div className="pokeball-img">
                    <img className="bgtext" src={pokeball}></img>
                </div>
                <div className="card-container">
                    <Card pName={''} id={randomNumbers[0]} />
                    <Card pName={''} id={randomNumbers[1]} />
                    <Card pName={''} id={randomNumbers[2]} />
                </div>
                <div className="input-form">
                    <form action="">
                        <input ref={inputRef} id='form' type="text" placeholder='Enter Pokémon Name' autoComplete='off' />
                        <button type="submit" onClick={handleSubmit} >Search</button>
                    </form>
                </div>
                <Description pokemonData={pokemonData} />
            </div>
            <Footer/>    
        </div>
    )


}

