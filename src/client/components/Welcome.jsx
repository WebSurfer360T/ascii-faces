import React from 'react'
import PropTypes from 'prop-types'
import AdContainer from '../containers/AdContainer'
import '../styles/Welcome.scss'

/**
 * Welcome component that renders a welcome message to the user.
 * @param  {Function}     props.onLetMeShopClick Function to execute when click on 'Let me shop!' button
 * @return {ReactElement}                        The markup to render
 */
const Welcome = ({ onLetMeShopClick }) => (
  <div className='welcome'>
    <div className='text'>
      <p>Sponsors:</p>
    </div>

    <div className='ad'>
      <AdContainer />

      <button
        className={
          'mdl-button mdl-js-button mdl-button--raised ' +
          'mdl-js-ripple-effect mdl-button--primary'
        }
        onClick={onLetMeShopClick}
      >
        Shop Ascii Faces
      </button>
    </div>
  </div>
)

// typechecking the props for Welcome component
Welcome.propTypes = {
  onLetMeShopClick: PropTypes.func.isRequired
}

export default Welcome
