import React, { FilterBreeds } from "react";
import ReactDOM from "react-dom";
// class Toggle extends React.Component {
//   constructor(props){
//       super(props);
//       this.state = {isToggleOn: true}

//       this.showLess = this.showLess.bind(this)
//   }
// }

// showLess() {
//   document.getElementById("view-all").classList.add("d-none");
//   document.getElementById("all-filters").classList.remove("d-none");
// }

// showLess = (event) => {
//   event.target.document.getElementById("view-all").classList.add("d-none");
//   event.target.document
//     .getElementById("all-filters")
//     .classList.remove("d-none");
// };

// render();
// {
//   return (
//     <button onClick={this.showLess} id="show-less" className="btn-decoration">
//       Show Less Filters
//       <svg id="icon-chevronUp" viewBox="0 0 24.8 15.9">
//         <title>icon-chevronUp</title>
//         <path d="M14.9 1C13.5-.3 11.4-.3 10 1L1.1 9.9c-1.4 1.4-1.4 3.6-.1 4.9l.1.1c1.4 1.4 3.6 1.4 4.9.1l.1-.1 6.4-6.4 6.3 6.4c1.4 1.4 3.6 1.4 4.9.1l.1-.1c1.4-1.4 1.4-3.6.1-4.9l-.1-.1L14.9 1z" />
//       </svg>
//     </button>
//   );
// }

// function showLess() {
//   //   document.getElementById("view-all").classList.add("d-none");
//   //   document.getElementById("all-filters").classList.remove("d-none");
//   alert("hi");
// }

// function viewAll() {
//   alert("hello");
// }

// const newComponent = (
//   <section
//     className="
//       filter-breeds
//       d-flex
//       align-items-center
//       justify-content-center
//       section-sizing
//       mt-2
//     "
//   >
//     <div className="container res-margin">
//       <div className="filter-breed-heading res-margin">
//         <p className="font-size-35 text-dark font-regular text-center mb-5">
//           Filter Your Cat Breed
//         </p>
//       </div>
//       <div className="row res-margin">
//         <div className="col-lg-6 res-margin">
//           <div className="filter-heading text-center mb-3">
//             <p>GENDER</p>
//           </div>
//           <div className="row">
//             <div className="col-lg-6">
//               <button className="filter-btn">Male</button>
//             </div>
//             <div className="col-lg-6">
//               <button className="filter-btn">Female</button>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-6 res-margin">
//           <div className="filter-heading text-center mb-3">
//             <p>AGE</p>
//           </div>
//           <div className="dropdown d-flex justify-content-center">
//             <button
//               className="btn btn-secondary dropdown-toggle filter-btn"
//               type="button"
//               id="dropdownMenuButton"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               Choose age
//             </button>
//             <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//               <a className="dropdown-item" href="#">
//                 Affenpinscher
//               </a>
//               <a className="dropdown-item" href="#">
//                 Another action
//               </a>
//               <a className="dropdown-item" href="#">
//                 Something else here
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="all-filters" className="row mt-5 res-margin d-none">
//         <div className="col-lg-6 res-margin">
//           <div className="filter-heading text-center mb-3">
//             <p>COLOR</p>
//           </div>
//           <div className="dropdown d-flex justify-content-center">
//             <button
//               className="btn btn-secondary dropdown-toggle filter-btn"
//               type="button"
//               id="dropdownMenuButton"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               Choose color
//             </button>
//             <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//               <a className="dropdown-item" href="#">
//                 Affenpinscher
//               </a>
//               <a className="dropdown-item" href="#">
//                 Another action
//               </a>
//               <a className="dropdown-item" href="#">
//                 Something else here
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-6 res-margin">
//           <div className="filter-heading text-center mb-3">
//             <p>BREED</p>
//           </div>
//           <div className="dropdown d-flex justify-content-center">
//             <button
//               className="btn btn-secondary dropdown-toggle filter-btn"
//               type="button"
//               id="dropdownMenuButton"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               Choose breed
//             </button>
//             <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//               <a className="dropdown-item" href="#">
//                 Affenpinscher
//               </a>
//               <a className="dropdown-item" href="#">
//                 Another action
//               </a>
//               <a className="dropdown-item" href="#">
//                 Something else here
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="d-flex justify-content-center">
//         <button
//           id="filter-btn"
//           className="
//             res-margin
//             btn-decoration
//             mt-4
//           "
//         >
//           Find!
//         </button>
//       </div>
//       <div className="filter-show mt-4 d-flex justify-content-center">
//         <button onClick={viewAll} id="view-all" className="btn-decoration">
//           View All Filters
//           <svg id="icon-chevronDown" viewBox="0 0 24.8 15.92">
//             <title>icon-chevronDown</title>
//             <path d="M9.95,14.95a3.57,3.57,0,0,0,4.9,0l8.9-8.9a3.5,3.5,0,0,0,0-5,3.5,3.5,0,0,0-5,0h0l-6.4,6.4-6.3-6.4a3.5,3.5,0,0,0-5,0,3.5,3.5,0,0,0,0,5l8.9,8.9Z" />
//           </svg>
//         </button>
//         <button onClick={showLess} id="show-less" className="btn-decoration">
//           Show Less Filters
//           <svg id="icon-chevronUp" viewBox="0 0 24.8 15.9">
//             <title>icon-chevronUp</title>
//             <path d="M14.9 1C13.5-.3 11.4-.3 10 1L1.1 9.9c-1.4 1.4-1.4 3.6-.1 4.9l.1.1c1.4 1.4 3.6 1.4 4.9.1l.1-.1 6.4-6.4 6.3 6.4c1.4 1.4 3.6 1.4 4.9.1l.1-.1c1.4-1.4 1.4-3.6.1-4.9l-.1-.1L14.9 1z" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   </section>
// );

// export { newComponent };
// export default newComponent;

// class FilterBreeds extends React.Component {
//   shoot() {
//     alert("Great Shot!");
//   }
//   render() {
//     return <button onClick={this.shoot}>Take the shot!</button>;
//   }
// }

// ReactDOM.render(<FilterBreeds />, document.getElementById("root"));

// showLess: function (event) {

//     alert("Great Shot!");

// }

// render: function() {
//     return (
//         <div>
//             <ul>
//                 <li onClick={this.onItemClick}>Component 1</li>
//             </ul>
//         </div>
//     );
// }

// class FilterBreeds extends React.Component {
//   getComponent(event) {
//     alert("hi");

//     // or you can write
//     //arguments[0].target.style.backgroundColor = '#ccc';
//   }

//   render() {
//     return (
//       <div>
//         <ul>
//           <li onClick={this.getComponent.bind(this)}>Component 1</li>
//         </ul>
//       </div>
//     );
//   }
// }
// export { MyComponent };
// export default MyComponent;

// class FilterBreeds extends Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     console.log("Click happened");
//   }
//   render() {
//     return (
//       <button key={showless} onClick={this.handleClick}>
//         Click Me
//       </button>
//     );
//   }
// }
