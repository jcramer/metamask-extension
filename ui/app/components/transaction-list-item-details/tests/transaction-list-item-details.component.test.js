import React from 'react'
import assert from 'assert'
import { shallow } from 'enzyme'
import TransactionListItemDetails from '../transaction-list-item-details.component'
import Button from '../../button'
import SenderToRecipient from '../../sender-to-recipient'
import TransactionBreakdown from '../../transaction-breakdown'
import TransactionActivityLog from '../../transaction-activity-log'

describe('TransactionListItemDetails Component', () => {
  it('should render properly', () => {
    const transaction = {
      history: [],
      id: 1,
      status: 'confirmed',
      txParams: {
        from: '0x1',
        gas: '0x5208',
        gasPrice: '0x3b9aca00',
        nonce: '0xa4',
        to: '0x2',
        value: '0x2386f26fc10000',
      },
    }

    const wrapper = shallow(
      <TransactionListItemDetails
        transaction={transaction}
      />,
      { context: { t: (str1, str2) => str2 ? str1 + str2 : str1 } }
    )

    assert.ok(wrapper.hasClass('transaction-list-item-details'))
    assert.equal(wrapper.find(Button).length, 1)
    assert.equal(wrapper.find(SenderToRecipient).length, 1)
    assert.equal(wrapper.find(TransactionBreakdown).length, 1)
    assert.equal(wrapper.find(TransactionActivityLog).length, 1)
  })

  it('should render a retry button', () => {
    const transaction = {
      history: [],
      id: 1,
      status: 'confirmed',
      txParams: {
        from: '0x1',
        gas: '0x5208',
        gasPrice: '0x3b9aca00',
        nonce: '0xa4',
        to: '0x2',
        value: '0x2386f26fc10000',
      },
    }

    const wrapper = shallow(
      <TransactionListItemDetails
        transaction={transaction}
        showRetry={true}
      />,
      { context: { t: (str1, str2) => str2 ? str1 + str2 : str1 } }
    )

    assert.ok(wrapper.hasClass('transaction-list-item-details'))
    assert.equal(wrapper.find(Button).length, 2)
  })
})
