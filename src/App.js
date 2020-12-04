import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Spinner from 'react-loader-spinner';
import ImageCard from './components/imageCard'
import ImageSearch from './components/ImageSearch'
const REACT_APP_PIXABAY_API_KEY='19362217-b743f8aa4e519dc3ac58e5a1d'
const App=()=> {

  const [images,setImages]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [term,setTerm]=useState('');

useEffect(()=>{
axios.get(`https://pixabay.com/api/?key=${REACT_APP_PIXABAY_API_KEY}
&q=${term}&image_type=photo`)
.then(res=>{
  console.log('Images',res.data);
  const myImages=res.data.hits;
  setImages(myImages);
  setIsLoading(false)
})
.catch(err=>console.log('error',err))
},[term])
  return (
 <div className="container mx-auto">
   <ImageSearch searchText={(text)=>setTerm(text)}/>
   {isLoading?<div className="flex justify-center	items-center	"><Spinner  
        type="TailSpin"
         color="#00BFFF"
         height={100}
         width={65}/>
         </div>:
   <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-1">
{images.map(image=>
<ImageCard key={image.id} image={image}/>

)}
 </div>
}
 </div>
  );
}

export default App;
