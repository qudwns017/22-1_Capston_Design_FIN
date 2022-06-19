import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

function QRreader (props) {
  var userData;
  var userInfo;
  var userEmail;
  var userNum;

  const [data, setData] = useState('No result');
  
  const iuser = {
    email: 'haha',
    number: '010123123'
  }

  

    


  // console.log(userEmail);
  // console.log(userNum);
  // console.log(iuser.email);
  // console.log(iuser.number);


  const checkUser = (value) => {
    if(value) {
      userData = String(value);
      userInfo = userData.split('_');
      userEmail = userInfo[0];
      userNum = userInfo[1];

      if (userEmail == iuser.email && userNum == iuser.number)
      {
        alert('확인')
      } else {
        console.log(userEmail);
        console.log(userNum);
        console.log(iuser.email);
        console.log(iuser.number);
        alert('오류')
      }
    } 
  }
  

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            console.log(result)
            setData(result.text);
            checkUser(result.text);
          }

        }}
        style={{ width: '100%' }}
      />
      <p>{data}</p>
    </>
  );
};

export default QRreader