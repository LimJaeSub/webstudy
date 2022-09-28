import React,{Fragment} from 'react';
import {useMediaQuery} from 'react-responsive';

function Reservation() {

    const isPc = useMediaQuery({
        query:"(min-width:1024px)"
    });
    const isMobile = useMediaQuery({
        query:"(max-width:767px)"
    })
  return (
    <Fragment>
        
    </Fragment>
  )
}

export default Reservation