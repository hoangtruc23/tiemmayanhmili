import React from 'react'

function Brand() {
  return (
    <div>
      <div className="brands">
        <div className="brands-inner">
          <span className="brands-caption">Thương hiệu</span>
          <div className="brands-list">
            <span className="brand on">SONY</span>
            <span className="brand">CANON</span>
            <span className="brand">DJI</span>
            <span className="brand">INSTA360</span>
            <span className="brand">LEICA</span>
            {/* <span className="brand">BLACKMAGIC</span>
            <span className="brand">PANASONIC</span> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brand
