import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Title } = Typography;
const { Panel } = Collapse;


const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;
  if (isFetching) return <Loader />;

  return (
    <>
      <div>
        <Title level={1} className="heading">
          What is cryptocurrency and how does it work?
        </Title>

        <Title level={3} className="heading">
          Cryptocurrency – meaning and definition
        </Title>
        <p>
          Cryptocurrency, sometimes called crypto-currency or crypto, is any form of currency that exists digitally or virtually and uses cryptography to secure transactions. Cryptocurrencies don't have a central issuing or regulating authority, instead using a decentralized system to record transactions and issue new units.
        </p>


        <Title level={3} className="heading">
          What is cryptocurrency?
        </Title>
        <p>
          Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions. It’s a peer-to-peer system that can enable anyone anywhere to send and receive payments. Instead of being physical money carried around and exchanged in the real world, cryptocurrency payments exist purely as digital entries to an online database describing specific transactions. When you transfer cryptocurrency funds, the transactions are recorded in a public ledger. Cryptocurrency is stored in digital wallets.

          Cryptocurrency received its name because it uses encryption to verify transactions. This means advanced coding is involved in storing and transmitting cryptocurrency data between wallets and to public ledgers. The aim of encryption is to provide security and safety.

          The first cryptocurrency was Bitcoin, which was founded in 2009 and remains the best known today. Much of the interest in cryptocurrencies is to trade for profit, with speculators at times driving prices skyward.
        </p>


        <Title level={3} className="heading">
          How does cryptocurrency work?
        </Title>
        <p>
          Cryptocurrencies run on a distributed public ledger called blockchain, a record of all transactions updated and held by currency holders.

          Units of cryptocurrency are created through a process called mining, which involves using computer power to solve complicated mathematical problems that generate coins. Users can also buy the currencies from brokers, then store and spend them using cryptographic wallets.

          If you own cryptocurrency, you don’t own anything tangible. What you own is a key that allows you to move a record or a unit of measure from one person to another without a trusted third party.

          Although Bitcoin has been around since 2009, cryptocurrencies and applications of blockchain technology are still emerging in financial terms, and more uses are expected in the future. Transactions including bonds, stocks, and other financial assets could eventually be traded using the technology.
        </p>


        <Title level={3} className="heading">
          Cryptocurrency examples
        </Title>
        <p>
          <Title level={5} className="heading">
            Bitcoin:
          </Title>
          <p>
            Founded in 2009, Bitcoin was the first cryptocurrency and is still the most commonly traded. The currency was developed by Satoshi Nakamoto – widely believed to be a pseudonym for an individual or group of people whose precise identity remains unknown.
          </p>

          <Title level={5} className="heading">
            Ethereum:
          </Title>
          <p>
            Developed in 2015, Ethereum is a blockchain platform with its own cryptocurrency, called Ether (ETH) or Ethereum. It is the most popular cryptocurrency after Bitcoin.
          </p>

          <Title level={5} className="heading">
            Litecoin:
          </Title>
          <p>
            This currency is most similar to bitcoin but has moved more quickly to develop new innovations, including faster payments and processes to allow more transactions.
          </p>

          Non-Bitcoin cryptocurrencies are collectively known as “altcoins” to distinguish them from the original.
        </p>
      </div>
    </>
  );
};

export default Exchanges;
