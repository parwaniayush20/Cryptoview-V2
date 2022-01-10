import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Typography, Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Title } = Typography;

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 11 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  console.log(cryptosList?.data?.coins);

  if (isFetching) return <Loader />;

  return (
    <>



      {!simplified && (
        <div>
          <div>
            <Title level={3} className="heading">
              This is your go-to page to see all available crypto assets
            </Title>
            <p>
              More than 99 coins are presented here. The default setting shows prices in USD and sorts crypto assets based on the market capitalization.
            </p>
          </div>
          <div className="search-crypto">
            <Input placeholder="Search coins here" onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
          </div>
        </div>
      )}

      <Row gutter={[18, 18]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >

            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
                style={{ borderRadius: "11px" }}
              >
                <p>USD Price : {millify(currency.price)}</p>
                <p>Market Cap : {millify(currency.marketCap)}</p>
                <p>Daily Change : {currency.change}%</p>
                <p>Listed At : {millify(currency.listedAt)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
