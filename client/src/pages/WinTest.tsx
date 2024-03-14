import axios from 'axios';
import React, {useEffect, useState} from 'react';

interface gameInfo {
  drawDiainage: number;
  drawToken: number;
  loseDiainage: number;
  loseToken: number;
  totalToken: number;
  winDiainage: number;
  winToken: number;
}

const WinTest = () => {
  const [gameInfo, setGameInfo] = useState<gameInfo>();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/admin/win`, {withCredentials: true}).then(res => {
      setGameInfo(res.data.data);
    });
  }, []);

  return <div>{gameInfo ? <div>총 베팅 수량 : {gameInfo.totalToken}</div> : null}</div>;
};

export default WinTest;
