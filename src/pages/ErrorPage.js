import React from 'react'
import Ban from '../components/Ban/Ban'
import Error404 from '../components/Error404/Error404'
import Footer from '../components/Footer/Footer'
import ToTopButton from '../components/ToTopButton/ToTopButton'

function ErrorPage() {

  return (
    <div>
      <Ban/>
      <Error404/>
      <ToTopButton />
      <Footer />
    </div>
  )
}

export default ErrorPage
