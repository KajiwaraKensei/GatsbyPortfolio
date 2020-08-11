import React from "react"
import styled from "styled-components"
import axios from "axios";
type Props = {
  className?: string
}
const headers = {
  "ContentType": "application/json;charset=utf-8",
  'AccessControlAllowOrigin': '*'
}
const Component: React.FC<Props> = props => {
  const { className } = props
  const sendAPI = () => {
    const obj = {
      token: "xoxb-1085142476817-1292792502805-nRepsgCKhzytL95mmRNZNLQr",
      channel: "@Kaji",
      text: "hogehoge"
    }
    const method = "POST";
    const body = JSON.stringify(obj);
    const headers = {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    fetch('https://slack.com/api/chat.postMessage', { method, headers, body })
      .then(res => { console.log(res) })
      .catch(res => {
        console.error(res)
      });
  }
  return (
    <div className={className}>
      Message
      <button onClick={sendAPI}>hoge</button>
    </div>
  )
}

export default styled(Component)``
