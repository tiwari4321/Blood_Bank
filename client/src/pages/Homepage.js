import React from 'react'
import { useSelector } from "react-redux";
import Spinner from "../components/shared/Spinner";
import Layout from '../components/shared/Layout/Layout';

const Homepage = () => {
  const { loading, error, } = useSelector((state) => state.auth);
  return (
    <Layout>
      {error && <span>{alert(error)}</span>}
      {loading ? (<Spinner />) : (<div>
        <h1>Homepage</h1>

      </div>)}

    </Layout>

  )
}

export default Homepage