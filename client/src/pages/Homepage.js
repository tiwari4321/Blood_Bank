import React from 'react'
import { useSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";
import Layout from '../components/shared/Layout/Layout';

const Homepage = () => {
  const { loading, error, } = useSelector((state) => state.auth);
  return (
    <Layout>

      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="container">
            <h4
              className="ms-4"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-plus text-success py-4"></i>
              Add Inventory
            </h4>
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col">Blood Group</th>
                  <th scope="col">Inventory Type</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Donar Email</th>
                  <th scope="col">TIme & Date</th>
                </tr>
              </thead>

            </table>


          </div>
        </>
      )}
    </Layout>

  )
}

export default Homepage