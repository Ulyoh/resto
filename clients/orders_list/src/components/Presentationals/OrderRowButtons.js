import React from 'react';
import Button from './Button';
import i18n from '../../data/i18n';

const OrderRowButtons = ({
  allPrepared, disabledWhenAllPrepared, onePrepared, oneNotAlreadyPrepared,
  disabledWhenNonePrepared,
}) => (

  <div>
    <Button onClick={allPrepared} disabled={disabledWhenAllPrepared} txt={i18n.txt.prepared} />
    <Button onClick={onePrepared} disabled={disabledWhenAllPrepared} txt="+" />
    <Button onClick={oneNotAlreadyPrepared} disabled={disabledWhenNonePrepared} txt="-" />
  </div>);

export default OrderRowButtons;
