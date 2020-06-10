import React from 'react';

function MediaCard(props){
    return(
        <div>
            <center>
            <h2>Title:  {props.title}</h2>
            <img src = {props.image} alt = "Image" width = "100" height = "100"/>
            <p>
                {/* This is the body of MediaCard: */}
               <br /> Name : {props.body.Name}
               <br /> Father's Name : {props.body.FatherName} 
               <br /> ID: {props.body.ID}
            </p>
            </center>
        </div>
    );
}
export default MediaCard;