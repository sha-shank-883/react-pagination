import Reactpaginate from "react-paginate";
import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 6 ;

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=2&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get('x-total-count');
      setpageCount(Math.ceil(total / limit));
      // console.log(total);
      setItems(data);
    };
    getComments();

  }, []);

  // console.log(items);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };


  const handlePageClick = async (data) => {

    console.log(data.selected);

    let currentPage = data.selected + 1
    const commentsFormServer = await fetchComments(currentPage);
    setItems(commentsFormServer);
  };


  return (
    <div className="container">
      <div className="row m-2">

        {items.map((item) => {
          return (

            <div key={item.id} className="col-sm-8 col-md-4 v my-2">
              <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                <div className="card-body">
                  <h5 className="card-title text-center h2">Id: {item.id} </h5>
                  {/* <h6 className="card-subtitle mb-2 text-muted text-center"> Name: {item.name} </h6> */}
                  <h6 className="card-subtitle mb-2 text-muted text-center">Email: {item.email} </h6>
                  <p className="card-text">Comments:  {item.body}</p>



                </div>
              </div>

            </div>
          );

        })}
      </div>




      <Reactpaginate
        previousLable={'previous'}
        nextLabel={"next"}
        pageCount={pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}


      />

    </div>
  );
}; export default App ;