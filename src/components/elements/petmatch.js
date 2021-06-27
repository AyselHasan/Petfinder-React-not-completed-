import bgimage from "./../../assets/images/petmatch-bg.jpg"

const PetMatch = () =>{
    return(
        <section className="pet-match font-regular d-flex align-items-center" style={{backgroundImage:`url(${bgimage})` }}>
        <div style={{marginLeft: '7%'}} className="font-regular">
          <h1 style={{textShadow: '2px 2px #5f5f5f'}} className="text-white font-size-45">
            Get Personalized Pet Matches
          </h1>
          <br />
          <h4 className="text-white" style={{textShadow: '2px 2px #5f5f5f'}}>
            Answer a few quick questions to see your perfect matches on
            Petfinder
          </h4>
          <button className="get-started-btn text-white mt-4 fw-bolder">
            GET STARTED
          </button>
        </div>
      </section>
      
    );
}

export default PetMatch;