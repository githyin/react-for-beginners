import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinPrice, setCoinPrice] = useState();
  const [inputMoney, setInputMpney] = useState();
  const onInputMoney = (event) => {
    setInputMpney(event.target.value);
  };
  const onSelectCoin = (event) => {
    setCoinPrice(parseInt(event.target.value));
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1 className={styles.title}>
        The Coins! {loading ? "" : `(${coins.length})`}
      </h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={onSelectCoin}>
            <option value={1}>--- Select coin ---</option>
            {coins.map((coin, index) => (
              <option key={index} value={coin.quotes.USD.price}>
                {coin.name} ({coin.symbol})
              </option>
            ))}
          </select>
          <hr />
          <label htmlFor="inputMoney">Money</label>
          <input
            id="inputMoney"
            placeholder="Please Input Your Money!"
            value={inputMoney}
            type="number"
            onChange={onInputMoney}
          ></input>
          <label htmlFor="outputCoin">Coin</label>
          <input
            id="outputCoin"
            placeholder="Waitting your Input"
            value={inputMoney / coinPrice}
            onChange={onInputMoney}
            disabled
          ></input>
        </div>
      )}
    </div>
  );
}

export default App;
