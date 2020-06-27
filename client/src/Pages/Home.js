import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Home(){

    const [quote,setQuote] = useState({author: '', citation: ''});

    useEffect(()=>{
        
        (async ()=> await axios.get('/api/random-quote')
        .then((json)=>{
            
            if(json.status) return json.data;
            
            throw new Error('API is not answering the request.');
            
        })
        .then((data)=>{
            setQuote({author: data.author, citation: data.citation});
        })
        .catch((err)=>console.error))();

    },[]);

    const style = {
        container: {
            width: '100vw',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        blockquote: {
            textAlign: 'center',
            display: 'block',
            padding: '20px'
        },
        citation: {
            fontSize: '40px',
        },
        author: {
            
        }
    };

    return (
        <div style={style.container}>
            <blockquote style={style.blockquote}>
                <p style={style.citation}>{quote.citation}</p>
                <p style={style.author}>{quote.author}</p>
            </blockquote>
        </div>
    );
}

export default Home;