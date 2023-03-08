import React from 'react'
import { ColorRing } from 'react-loader-spinner';

const Loader = (props) => {
    return (
        <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh'}}>
            <ColorRing
                visible={true}
                height="100"
                width="100"
                ariaLabel="blocks-loading"
                wrapperStyle={{
                }}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
            <p>{props.message}</p>
        </div>
    )
}

export default Loader