import React from 'react'
import jQuery from "jquery";
import {SearchBar} from 'react-native-elements'
window.$ = window.jQuery = jQuery
var IMP = window.IMP; 
IMP.init("imp10942072"); 

export const PaymentPage = () => {
  const callPaymentModule = () => {
    IMP.request_pay({ // param
      pg: "html5_inicis",
      pay_method: "card",
      merchant_uid: "ORD20180131-0000011",
      name: "노르웨이 회전 의자",
      amount: 64900,
      buyer_email: "gildong@gmail.com",
      buyer_name: "홍길동",
      buyer_tel: "010-4242-4242",
      buyer_addr: "서울특별시 강남구 신사동",
      buyer_postcode: "01181"
    }, rsp => { // callback
      if (rsp.success) {
          console.log("Success : ", rsp)
      } else {
          console.log("Failed : ", rsp)
      }
  }
)
}

    return (
        <div>
      <header className="App-header">
      <SearchBar placeholder="search grouop activity member"/>
        <p>
          결제 패이지
        </p>
        <button onClick={callPaymentModule}>
          이 버튼을 누르면 결제가 됨
        </button>
      </header>
    </div>
    )
}

export default PaymentPage