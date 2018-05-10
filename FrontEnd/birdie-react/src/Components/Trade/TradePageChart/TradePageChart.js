import React, { Component } from 'react';
import TradingViewWidget , { Themes, watchlist } from 'react-tradingview-widget';

class LandingPageChart extends Component {
    render() {
        return (
      <div classname= 'LandingPageChart'>
			<TradingViewWidget
				symbol="BINANCE:BTCUSDT"
				theme={Themes.DARK}
				locale="en"
				timezone="America/Vancouver"
				width="610"
				height="500"
				withdateranges="true"
				watchlist = {[
					'BINANCE:BTCUSDT',
					'BINANCE:ETCBTC',
					'BINANCE:LTCBTC',
					'BINANCE:TRXBTC',
					'BINANCE:XVGBTC',
					'BINANCE:ICXBTC',
					'BINANCE:ADABTC',
					'BINANCE:EOSBTC',
					'BINANCE:BCCUSDT',
					'BINANCE:LTCUSDT',
					'BINANCE:ONTBTC',
					'BINANCE:NANOBTC',
					'BINANCE:ETHUSDT',
					'BINANCE:BNBBTC',
					'BINANCE:XRPBTC',
					'BINANCE:BNBUSDT',
					'BINANCE:STORMBTC',
					'BINANCE:NEOUSDT',
					'BINANCE:NEOBTC',

					'BINANCE:NCASHBTC',
					'BINANCE:XLMBTC',
					'BINANCE:VENBTC',
					'BINANCE:WANBTC',
					'BINANCE:IOSTBTC',
					'BINANCE:IOTABTC',
					'BINANCE:ETHBTC',
					'BINANCE:SUBBTC',
					'BINANCE:OMGBTC',
					'BINANCE:BNBUSDT',
					'BINANCE:ZRXBTC',
					'BINANCE:BCCBTC',
					'BINANCE:LSKBTC',
					'BINANCE:STRATBTC',
					'BINANCE:WTCBTC',
					'BINANCE:NEBLBTC',
					'BINANCE:MTLBTC',
					'BINANCE:XMRBTC',
					'BINANCE:ELFBTC',
					'BINANCE:QSPBTC',
					'BINANCE:QTUMBTC'
				]}
			/>
            </div>
        );
    }
}

export default LandingPageChart;