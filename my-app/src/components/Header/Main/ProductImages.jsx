import React, {useState} from 'react'
import Picture1Bottom from '../../../images/image-product-1-thumbnail.jpg'
import Picture1 from '../../../images/image-product-1.jpg'
import Picture2Bottom from '../../../images/image-product-2-thumbnail.jpg'
import Picture2 from '../../../images/image-product-2.jpg'
import Picture3Bottom from '../../../images/image-product-3-thumbnail.jpg'
import Picture3 from '../../../images/image-product-3.jpg'
import Picture4Bottom from '../../../images/image-product-4-thumbnail.jpg'
import Picture4 from '../../../images/image-product-4.jpg'


const ProductImages = (props) => {

const [picture, setPicture] = useState({picture1: true, picture2:false, picture3: false, picture4:false}); 

const setBigPicture = (event) => {
  if (event.target.id === '1'){
    setPicture({
        picture1:true,
        picture2: false, 
        picture3: false, 
        picture4: false
    })
  } else if (event.target.id === '2'){
    setPicture({
        picture1:false,
        picture2: true, 
        picture3: false, 
        picture4: false
    })
  } else if (event.target.id === '3'){
    setPicture({
        picture1:false,
        picture2: false, 
        picture3: true, 
        picture4: false
    })
  } else if (event.target.id === '4'){
    setPicture({
        picture1:false,
        picture2: false, 
        picture3: false, 
        picture4: true
    })
  }

}


/*const [picture1, setPicture1] = useState(true); 
const [picture2, setPicture2] = useState(false); 
const [picture3, setPicture3] = useState(false); 
const [picture4, setPicture4] = useState(false); 

const setBigPicture1 = () => {
   setPicture1(true); 
   setPicture2(false); 
   setPicture3(false); 
   setPicture4(false); 
}

const setBigPicture2 = () => {
    setPicture1(false); 
    setPicture2(true); 
    setPicture3(false); 
    setPicture4(false); 
}

const setBigPicture3 = () => {
    setPicture1(false); 
    setPicture2(false); 
    setPicture3(true); 
    setPicture4(false); 
}

const setBigPicture4 = () => {
    setPicture1(false); 
    setPicture2(false); 
    setPicture3(false); 
    setPicture4(true); 
}*/
    return (
        <div className='product-images'>
          <div className='main-picture'>
           <img src={picture.picture1 ? Picture1 : picture.picture2 ? Picture2 : picture.picture3 ? Picture3 : picture.picture4 ? Picture4 : ''}></img>
          </div>
          <div className='bottom-pictures'>
           <img src={Picture1Bottom} className={props.clickedImage} onClick = {setBigPicture} id='1'></img>
           <img src={Picture2Bottom} className={props.clickedImage} onClick = {setBigPicture} id='2'></img>
           <img src={Picture3Bottom} className={props.clickedImage} onClick = {setBigPicture} id='3'></img>
           <img src={Picture4Bottom} className={props.clickedImage} onClick = {setBigPicture} id='4'></img>
          </div>
        </div>
    )
}

export default ProductImages; 