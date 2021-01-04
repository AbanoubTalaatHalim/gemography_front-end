import React from "react";
import { Media} from 'reactstrap';

const Repos = ({ repos, loading }) => {

  if (loading) {
    return <h2>Loading...</h2>;
  }

  function toDate(string){
    const dateNow = new Date()
    const repoDate = new Date(string);
    var Difference_In_Time = dateNow.getTime() - repoDate.getTime(); 
    return parseInt(Difference_In_Time / (1000 * 3600 * 24));
  }

  return (
    <div className="container">
      {repos.map((repo) => (
        
        
        // <div className="card row">
        // <li key={repo.id} className="list-group-item card-header">  
        // <img className="card w-25 col-4" src={repo.owner.avatar_url}></img>
        // <div className="card-body col-8">
        //   <h2 className="card-title">{repo.name}</h2>
        //   <br />
        //   <p className="card-text">{repo.description}</p> <br />
        //   <br />
        //   {repo.owner.starred_url}
        //   <br />
        //   </div>
        // </li>
        // </div>

        
          <Media list>
              <Media  tag="li">
                <Media left middle>
                    <Media style={{width:"200px",height:"200px"}} object src={repo.owner.avatar_url} alt={repo.name}/>
                </Media>
                <Media body className="ml-5">
                <Media heading >
                    {repo.name}
                </Media>
                <p className="mb-3 h6">
                    {repo.description}
                </p>
                <Media>
                <p className="mr-2" style={{border:"1px solid black",width:"150px"}} >
                    Issues :{repo.open_issues} k
                </p>
                <p className="mr-2" style={{border:"1px solid brown",width:"150px"}}>
                    watchers :{repo.watchers} 
                </p>
                <p>
                    Submited <span className="h6">{toDate(repo.created_at)}</span> Days ago by <span style={{fontWeight:"bold"}}>{repo.owner.login}</span>
                </p>
                </Media>
                </Media>
                    </Media>
                    </Media>
                    
      ))}
    </div>
  );
};

export default Repos;
