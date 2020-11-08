import axios from 'axios';

const Apikey = 'cfd5afa059f58f3f52acef7574917ad5ca32fb877d3d1069b783f9aa6727e1b1'

const cryptoHttp = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data',
  headers: {
    authorization: `Apikey ${Apikey}`
  }
});

export default cryptoHttp;
