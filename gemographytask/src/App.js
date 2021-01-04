import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Repos from "./components/Repos";
import Pagination from "./components/Pagination";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(10);

  useEffect(() => {
    const lastMonthDate = new Date(Date.now() - 30 * 24 * 3600 * 1000);

    const year = lastMonthDate.getFullYear();
    const month = lastMonthDate.getMonth() + 1; //Last month
    const day = lastMonthDate.getDate();
    console.log(year,month,day)
    const url = `https://api.github.com/search/repositories?q=created:>2020-12-05&sort=stars&order=desc`;
    
    console.log(url);
    const fetchRepos = async () => {
      setLoading(true);
      console.log(url)
      const res = await axios.get(url);
      console.log(res.data.items.length);
      setRepos(res.data.items);
      setLoading(false);
    };

    fetchRepos();
  }, []);

  // Get current repos
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container mt-5">
     
      <Repos repos={currentRepos} loading={loading} />
      <Pagination
        reposPerPage={reposPerPage}
        totalRepos={repos.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
