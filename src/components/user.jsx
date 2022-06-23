// import React from "react";


//class User extends React.Component {
//  constructor(props) {
//      console.log("hey I'm from Constructor");
//      super(props);

//      this.state = {
//          planet: "earth",
//      };
//  }
//   componentDidMount() {
//       this.setState({ planet: "Jupiter" });
//  };


// static getDerivedStateFromProps(props,state) {
// console.log("I'm from get derived state from props");
// return {planet:"jupiter"}
//})
//}


//  shouldComponentUpdate(nextprop, nextstate) {
//      console.log("from shouldComponentUpdate");
//      console.log({
//          nextprop,
///          nextstate,
//      });
//      return true;
//   };


//  getSnapshotBeforeUpdate(prevprops, prevstate) {
//     console.log("from getSnapshotBeforeUpdate");
//      console.log({ prevprops, prevstate });
//      return true;
//  }

//  componentDidUpdate() {
//      console.log("from componentdidupdate");
//      console.log(this.state);
//   }

//  render() {
//      console.log("hey I'm from Render");
//      return (
//         <div>
//             <h1>{this.props.name}</h1>
//             <p>{this.props.description}</p>
//              <p>{this.state.planet}</p>
//          </div>
//      );
//   }
//}
//                                              Hook Method -1

//import React from "react";
//const User = (props) => {
//   const planet = React.useState("Earth");
//   console.log(planet);
//   return (
//      <div>
//           <h1>{props.name}</h1>
//           <p>{props.description}</p>
//       </div>
//   );
//};

//                                            Hook Method -2
// import React , {useState} from "react";
// const User = (props) => {
//    const planet =useState("Earth");
//    console.log(planet);
//  return (      <div>
//            <h1>{props.name}</h1>        
//               <p>{props.description}</p>
//        </div>
//  );
// };

// Hook method using setState but we can't use set state in Hook but the hook i came up with a method called useEffect
import React, { useState, useEffect } from "react";
const User = (props) => {
    const [planet, setPlanet] = useState("Earth");
    useEffect(() => {
        setPlanet("Jupiter");
        console.log("Component Mounting ");
    },[])

    useEffect(() =>{
        console.log("Planet Changed");
    },[planet])
    return (<div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <button onClick={() =>setPlanet("pluto")}>{planet}</button>
    </div>
    );
};
export default User;