import erc20 from './erc20Token/v1.json';

import dsEthToken from './dsEthToken/v1.json';
import dsValue from './dai/v1/DSValue.json';
import dsGuard from './dai/v1/DSGuard.json';
import dsChief from './dai/v1/DSChief.json';
import dsSpell from './dai/v1/DSSpell.json';
import dsSpellBook from './dai/v1/DSSpellBook.json';
import dsProxy from './dsProxy/v1.json';
import dsProxyFactory from './dsProxyFactory/v1.json';

import makerOtc from './makerOtc/v1.json';
import saiProxy from './saiProxy/v1.json';
import proxyRegistry from './proxyRegistry/v1.json';

import saiTop from './dai/v1/SaiTop.json';
import tub from './dai/v1/SaiTub.json';
import tap from './dai/v1/SaiTap.json';
import vox from './dai/v1/SaiVox.json';
import mom from './dai/v1/SaiMom.json';
import pit from './dai/v1/GemPit.json';

const daiV1 = {
  saiTop,
  tub,
  tap,
  vox,
  mom,
  pit
};

const dappHub = {
  dsValue,
  dsEthToken,
  dsGuard,
  dsChief,
  dsSpell,
  dsSpellBook,
  dsProxy
};

const exchangesV1 = {
  makerOtc
};

const general = {
  erc20
};

const proxies = {
  saiProxy,
  dsProxyFactory,
  proxyRegistry
};

export { daiV1, dappHub, exchangesV1, general, proxies };