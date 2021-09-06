import React from 'react';
import './index.css';

const PaymentInfo = () => {
  return (
    <div className='payment_info__payment p-4'>
      <p className='title mb-1'>One-time Donation</p>

      <div className='d-flex justify-content-between'>
        <p>$25 Donation</p>
        <p className='title'>$25.00</p>
      </div>

      <p className='title mt-2 mb-1'>Fee Coverage</p>

      <div className='d-flex justify-content-between'>
        <p>Processing fees for a $25 donation</p>
        <p className='title'>$1.50</p>
      </div>

      <div className='py-2'><hr /></div>

      <div className='d-flex justify-content-between align-items-center'>
        <p className='total_txt'>
          Total
        </p>

        <div className='d-flex justify-content-between align-items-center'>
          <span className='total_currency'>USD</span> &nbsp;&nbsp; <p className='total_amount'>$26.50</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
