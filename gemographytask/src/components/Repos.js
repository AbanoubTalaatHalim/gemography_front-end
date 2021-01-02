import React from "react";

const Repos = ({ repos, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {repos.map((repo) => (
        <li key={repo.id} className="list-group-item">
          {repo.name}
          <br />
          {repo.description} <br />
          <img
            src={repo.owner.avatar_url}
            alt="..."
            class="img-thumbnail"
          ></img>
          <br />
          {repo.owner.starred_url}
          <br />
          {repo.owner.issue_events_url}
          <br />
          <span>Time Interval by {repo.owner.login}</span>
        </li>
      ))}
    </ul>
  );
};

export default Repos;
